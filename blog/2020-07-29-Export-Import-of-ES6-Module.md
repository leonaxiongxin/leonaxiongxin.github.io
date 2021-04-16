---
title: Export & Import of ES6 Module
date: "2020-07-29"
template: "post"
tags:
  - 'FE'
  - "Module"
  - "Webpack"
---

为什么不同形式的模块导入/导出会导致 Tree-shaking 效果不同？

<!--truncate-->

[Tree Shaking](https://www.webpackjs.com/guides/tree-shaking/)，从字面上解释就是把无效代码（dead code）抖掉，通常用于打包输出时，可以有效缩小打包体积。比如在开发时引入一个模块，上线打包时，理想目标是只把用到的部分打包进 bundle 里，其他未使用的部分不需要被打包进来。

在传统编译型的语言中，由编译器将 Dead Code 从 AST 中删除，dead code指：

    - 代码不会被执行，不可到达

    - 代码执行的结果不会被用到

    - 代码只会影响死变量（只写不读）

对于 CommonJS 规范的模块，通过 require 动态引用模块，运行时才加载，不能通过简单的静态分析去做优化，这方面目前 Rollup 和 Parcel 的Tree Shaking支持更好。

对于 ES6 规范的模块，Tree Shaking 依赖于 [import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 和 [export](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export) 的[静态结构特性](https://exploringjs.com/es6/ch_modules.html#static-module-structure)。

babel 插件在解析模块时，遇到 import 语句，找到对应路径的文件。但是这个文件可能是一个大的 package，并不是详细路径，需要继续遍历找到确切的需要被打包的代码文件。

![transform-dynamic-import](/img/blog/2020-07-29-Export-Import-of-ES6-Module/transform-dynamic-import.png)

## export 导出

### 命名导出

ExportNamedDeclaration, 一个文件可以同时命名导出多个变量 / 函数 / 类，在其他文件导入时命名必须严格相同。

```js
// 导出单个
export const myVariable = 123  // ExportNamedDeclaration, declaration
export const myFunction = (name) => {
    console.log(name)
}

// 导出列表
const myFunction = (name) => {
    console.log(name)
}
const myVariable = 123
export { myFunction，myVariable }  // ExportNamedDeclaration, specifiers

// 导入
import { myFunction } from '/modules/my-module.js'
```

### 默认导出

ExportDefaultDeclaration，一个文件只能默认导出一个变量 / 函数 / 类，在其他文件导入时可以使用其他命名。

```js
// 默认导出, ExportDefaultDeclaration
export default myFunction = (name) => {
    console.log(name)
}
export const myVariable = 123

// 导入
import yourFunction, { myVariable } from '/modules/my-module.js'
```

### 重命名导出

ExportNamedDeclaration, 导出时进行重命名，在其他文件导入时必须使用重命名后的名称。

重定向的命名并不能在本模块使用，只是搭建一个重定向的桥梁；如果需要在本模块内使用，则先导入、再导出，否则重复导入两次 Tree Shaking 在处理时会有问题。

```js
const myFunction = (name) => {
    console.log(name)
}
export { myFunction as yourFunction }  // ExportNamedDeclaration, specifier.local.name, specifier.exported.name

// 导入
import { yourFunction } from '/modules/my-module.js'
```

### 模块重定向

ExportNamedDeclaration or ExportAllDeclaration, 在当前模块中，导出指定导入模块的默认导出，相当于是创建了一个“重定向”。

通常在业务包的 index 文件里使用，这样我们在其他模块导入时可以直接写包路径，而不用写一长串的具体路径。

```js
export { default } from './other-module' // ExportNamedDeclaration
export * from './other-module' // ExportAllDeclaration
```

## import 导入

### 导入列表

ImportSpecifier, 导入默认值

ImportDefaultSpecifier, 在目标文件是默认导出，导入时可以使用其他命名。

```js
// 默认导出, ExportDefaultDeclaration
export default myFunction = (name) => {
    console.log(name)
}
export const myVariable = 123

// 导入默认值、导入列表，会解析为两行 newLine
import yourFunction, { myVariable } from '/modules/my-module.js'
```

### 导入时重命名

ImportSpecifier

```js
import { reallyReallyLongModuleExportName as shortName  } from '/modules/my-module.js'
```

### 导入整个模块的内容

ImportNamespaceSpecifier, 全量引入，谨慎使用，打包体积可能会很大

```js
import * as myModule from '/modules/my-module.js'

// 拒绝全量导入 lodash 及类似的代码
import lodash from 'lodash'
// 而应该使用
import debounce from 'lodash/debounce'
// 对于组件库可以使用导入列表的方式，具体要看依赖包的导出方式
import { SlideModal } from '@ss/mtd-react-native' 
```

### 动态导入

在解析时，其他都是 ImportDeclaration，动态导入是 CallExpression

在遇到动态导入时，会把该模块单独打包得到一个 chunk，以实现按需加载（在使用时才导入）。

```js
import('/modules/my-module.js')
  .then((module) => {
    // Do something with the module.
  });

let module = await import('/modules/my-module.js')
```

### 仅为副作用导入一个模块

整个模块仅为副作用（中性词）而导入，将会运行模块中的全局代码, 但实际上不导入模块中的任何内容（接口）。

```js
import '/modules/my-module.js'
```

## 结论

1. 默认导出与导入默认值配对使用，为了避免命名冲突在导入时可以使用其他命名。为了更好的 Tree Shaking，from 后接详细路径。

    ```js
    export default class extends React.PureComponent {}

    import anyName from './BottomSheet'
    ```

2. 命名导出与导入列表配对使用，在导入时严格使用相同的变量名（这个应该没问题，变量名不一致 IDE lint 会报错），可以重命名。

    ```js
    export class BottomSheet extends React.PureComponent {}

    import { BottomSheet } from './BottomSheet'
    ```

3. 避免全量导入，尽量使用部分导入或导入列表。如果不得不使用全量导入，为了更好的 Tree Shaking，from 后接详细路径。

    ```js
    import lodash from 'lodash' // no
    import debounce from 'lodash/debounce' // yes
    ```

4. 模块文件夹下的 index 文件可作为模块重定向的“桥梁”，避免详细路径过长的情况。

    ```js
    // @hfe/mrn-bus-common/lib/components/index.ts
    export { BottomSheet, NativeBottomSheet } from './BottomSheet/BottomSheet'
    // @hfe/mrn-bus-common/index.ts
    export * from './lib/components'

    // 使用
    import { BottomSheet } from '@hfe/mrn-bus-common/lib/components/' // yes but long
    import { BottomSheet } from '@hfe/mrn-bus-common' // yes
    ```

5. 避免重复的导入。

    ```js
    import {
    PageStatus as FavoriteBusStatus,
    FavoriteComponent
    } from '@hfe/mrn-bus-time-business'

    export { FavoriteBusStatus }  // yes
    export { PageStatus as FavoriteBusStatus } from '@hfe/mrn-bus-time-business'  // no
    ```
