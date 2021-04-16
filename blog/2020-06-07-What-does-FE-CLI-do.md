---
title: 前端项目脚手架做了什么？
date: "2020-06-07"
update: "2020-10-12"
template: "post"
tags:
  - 'FE'
  - "Engineering"
  - "Webpack"
---

在前端开发的初始阶段，开发者通常只需要关注 HTML, CSS, JavaScript，但是现代化的前端开发已经不仅仅是业务代码本身，涉及方方面面，从流程上来说可以划分为：开发需求、部署需求、线上运维（质量+体验）需求。

为了使得前端构建更加标准化、工具化、自动化，出现了很多工具来提高前端开发的效率、质量和体验，统称为前端工程化。

<!--truncate-->

### 开发需求

#### 语言增强

##### JavaScript

前端的核心语言是 JavaScript，但是因为 JavaScript 在设计上的种种不足，为了优化语言本身的问题，有陆续的提案优化（下一代 JavaScript 语言，统称为 ES6 ），也出现了很多试图替代 JavaScript 的语言， 这其中如：

  - Coffeescript

  - Typescript

  - JSX

  - Dart
  ...

这些语言在语法上具有相应的优势，比如 Typescript 和 Dart 提供静态语法的一些强类型特性。

##### CSS

和 JavaScript 类似，也出现了一些 CSS-* 语言来优化 CSS 的开发，如嵌套书写、变量计算、命名规范等，这些语言同样最终都会被编译为原生的 CSS, 这个过程叫 CSS 的预处理，因而也被称为预处理器。

  - Less

  - Sass

为了解决样式兼容问题，又出现了后处理工具，可以自动增加浏览器前缀 autoprefixer，编译 CSS next 的语法，配合 stylelint 校验 CSS 语法等。

  - PostCSS

##### 语言转换

那么，我们写的 ES6 代码、TS 代码、Vue 代码、JSX 代码....如何在不同的浏览器引擎上识别、运行呢？

实际上，这些代码最后会被编译成浏览器都支持的 JavaScript 代码，过程中就需要不同的编译工具来完成转换。

Babel 是目前使用最为广泛的 JavaScript 编译器，标语是"Use next generation JavaScript, Today"，将某些ES6的新语法转换为向后兼容的ES5语法代码。  [demo] https://babeljs.io/repl

虽然JavaScript 被认为是解释性语言，但是其编译过程也大致遵循编译原理过程，主要包括以下三个核心阶段：

- 解析 Parsing

  通过词法分析Tokenizer 和语法分析，将原始代码字符串解析成抽象语法树（Abstract Syntax Tree, AST）。 [demo] https://astexplorer.net/

  AST 可能包括 ImportDeclaration, VariableDeclaration, FunctionDeclaration等，ImportDeclaration 表示模块的引用关系，对于确定模块的编译顺序非常重要。

- 转换 Transformation

  遍历 AST 做转换处理操作，增加/更新/删除节点，得到新的 AST 对象。

- 生成代码 Code Generation

  基于转换之后的 AST 对象，生成可执行的目标语言代码字符串。

随着前端的快速迭代发展，跨端开发需求应运而生，即一套代码通过编译转换后可以在多个目标平台上运行，降低开发和维护成本。

类似地，跨端开发的实现本质，也就是基于一定解析规则生成AST，再转换并生成目标代码。目前已经有框架和工具（flutter,  weex, Taro, uni-app 等）初步实现。

#### 可维护性

##### 模块化

对比其它编程语言，Java 有类文件，Python 有 import 机制，Ruby 有 require ，PHP有 include 和 require，而早期的 JavaScript 并没有模块化的概念。

在业务开发中，通常有很多页面需要实现相似的功能，比如获取用户信息，早期浏览器端只能通过 `script` 标签引入，或者 `ctrl + c`、 `ctrl +v` 复用业务代码，但是这样很容易造成代码污染，不利于后期维护，如果想修改一个功能需要去不同文件寻找散落的业务代码，效率很低。因此，前端工程化的一大目标就是：组件化、模块化。

2014年，前端框架 Angular 横空出世，React、Vue 后来者居上，无论是基于面向对象的设计模式，还是函数式编程的哲学思想，都天然提供了组件化的结构，在开发过程中以“一切皆可对象 / 函数”为指导思想，很容易形成可复用的模块。

目前，JavaScript 的模块化规范可以分为：

- CommonJS 模块化规范

  CommonJS 规范并不完全适用于前端的应用场景，因此延伸出 AMD 规范（Asynchronous Module Definition）和 CMD 规范

- ES6 模块化规范

  为了实现快速高效的业务迭代，不重复造轮子，在前端团队中，一般都要求能够形成基础组件库和业务组件库。在设计前端项目架构的时候，通常会考虑：

    - 通用工具方法模块化

    - 基础业务方法模块化

    - 交互组件复模块化

##### 代码校验

JavaScript 代码检测工具，如 `eslint`，可自行配置规则库，它可以用于检查常见的 JavaScript 代码错误，也可以进行代码风格检查。

CSS 代码校验工具，如 `stylelint`，用来约束 CSS 的书写规范。

##### 单测

单元测试是用来确保项目质量及代码质量的一个环节，虽然单元测试并不能直接地减少 bug，但是可以减少因为反复修改过程中新生成的 bug。

随着前端项目日渐复杂化及代码追求高复用性等，促使单元测试愈发重要。

常用的第三方测试框架有Jest、Mocha、Karma等。

##### 目录结构

通常一个前端项目会分有一个 src 目录和 dist 目录， src 放置源码，dist 放置编译后的代码。

为了使得项目结构更加清晰，代码可读性更强，src目录可以根据项目架构进一步划分，如：

```text
src
  assets 静态资源目录
  components 组件目录
  pages 页面目录
  test 单测目录
  utils 公共函数方法目录
  mocks 数据模拟目录
  config 配置目录
  store 状态管理目录
  .env*: 项目中我们通常会使用环境变量来影响应用在不同运行环境下的行为. 从文件中读取环境变量
  ...
```


#### 开发效率

##### 热更新

原始的前端开发过程是，修改前端代码，保存代码文件，调用命令编译代码，然后在浏览器端手动刷新，这个过程完全可以做到自动化。

![HMR](/img/blog/2020-06-07-What-does-FE-CLI-do/HMR.jpg)

Webpack 的热更新（hot-reload），webpack-dev-server 相当于一个小型的静态文件服务器，通过 webpack-dev-middleware 插件监控代码文件变化（1），如果代码文件有改变则重新打包编译，并将生成的代码以对象的形式保存在内存中（1, 2），通过 socket 长连接与浏览器端通信（4），浏览器端收到消息（主要是新模块的 hash 值）后，通过 HotModuleReplacement 向 dev-server 发请求，获取模块最新的代码（7, 8, 9），HotModuleReplacement 会再次比较新旧模块，决定是否更新（10, 11）。

Webpack 也可以监听静态文件的变化，如图片文件，浏览器收到通知后会直接进行刷新，没有模块替换的过程。

##### 调试工具

根据终端、框架、需求的不同，选择不同的调试工具。

### 部署需求

上线部署的理想目标是：自动化部署，持续集成。

对于前端项目来说，主要涉及到包版本控制、项目依赖管理、编译等方面。

#### 版本控制

在开发过程中，通常借助 Git 工具做版本控制。


上线之后，对于浏览器来说，如果资源的路径和文件名不改变，缓存未失效的情况下，会优先使用缓存的文件，不是所有用户都会清缓存，这样用户访问到的还是之前的版本。

同路径同名的新版本文件会覆盖上一版本的文件，由于发布耗时可能会出现不同步的问题。

以前的办法是，main.js 文件修改后，在引用 main.js 文件的地方修改版本号或重命名，但是这样逐个修改太麻烦了。

```js
<script src="main.js?version=101"></script>
```

通过构建工具，可以配置文件指纹的自动更新。

#### 依赖管理

详见另一篇文章 [node_modules, the Heaviest Object in the Universe](https://xinxiong.netlify.app/node_modules-the-heaviest-object-in-the-universe/)

### 线上需求

应用上线之后，质量和用户体验非常重要。对于用户来说，最直接的体验就是页面加载、切换、交互是否流畅。

Web 应用的一大特点是，所有资源的加载都需要通过网络或缓存（当然也可以通过服务端渲染），优化请求是缩短首屏时间的关键，前端主要从应用层入手，涉及到的一些点：

- 缓存机制，如果缓存可用就可以减少网络请求：

  强缓存、协商缓存。

- 减少资源请求数量，遵循“越少越好，越早越好”的原则：

  延迟加载（按需加载），数据预加载，雪碧图。

- 压缩资源体积

  代码压缩，图片压缩。

- 提升资源请求速度：

  CDN 分发，负载均衡。

Web应用的另一大特点是，早期应用主要是静态页面，对性能开销的要求很低，现在的前端动态交互越来越丰富，会涉及到大量对 DOM 的操作，DOM 更新会导致页面的重绘或回流，尤其是回流的开销很大。

曾经流行的 jQuery，简化了对DOM的操作，但并没有解决 DOM 操作带来的开销问题。React 和 Vue 都提出了虚拟 DOM，虚拟 DOM 是模拟表示真实 DOM 结构和属性的 JavaScript 对象，通过 DOM diff 算法只需要局部、批量更新DOM，有效降低大面积、频繁的真实DOM的重渲染。也有开发者认为，虚拟DOM并不总是比操作真实DOM快，优势是在牺牲部分性能的前提下抽象了原本的渲染过程，实现了跨平台的基础。

## 构建工具是什么

构建工具可以实现前端项目自动化处理，让前端开发人员不再需要手动地去重复做这些事情，解放开发人员的双手，更好地聚焦到业务开发上。

本质就是将代码“串”起来，最终构建出目标代码文件，常见的构建工具有：grunt、gulp、webpack、rollup、parcel等。

### 工作流工具概览

前端工作流的各个环节，从开发到上线，涉及的前端需求，几乎都可以找到对应的工具来解决。工作流工具，顾名思义，本质上是一种事件流的机制，将各个环节的工作（Task）串联起来。

grunt、gulp：早期的工作流工具 ，**All in one** 的打包策略，仅适用于项目工具流构建，慢慢被新工具替代。

  - Grunt 使用临时文件，任务流同步串行。

  - Gulp 使用 Node Stream，支持异步读写文件，效率更高。

webpack：适用于大型项目的构建，目前生态最完善，社区人气高，有强⼤的 loader 和 plugin。

Rollup：适⽤于库的打包，可以将各个模块打包进⼀个⽂件中，文件体积小，但不利于拆包，生态不如 webpack 丰富。

Parcel：适用于快速打包应用，开箱即用无需配置（零配置的缺点就是太多默认配置），较新的工具，生态还不完善。

### Webpack

#### 打包流程

1. 初始化参数 
  
  从命令行和配置文件中读取并合并参数，环境为 development 和 production 时，编译的目标不完全相同，对应的配置参数也不完全相同。

2. 确定编译入口 ，开始编译

  单页面应用有单个入口，多页面应用有多个入口。 

  从入口开始，根据模块的依赖关系确定编译顺序（是一个有向无环图，拓扑排序，可以用队列和邻接表求解）。
  
  ```json
  module: {
      entry: {
          page1: "./src/pages/page1.js",
          page2: "./src/pages/page2.js"
          ...
      }
  }
  ```

3. 编译模块 

  根据配置的解析规则，调用相应的 Loader 对不同的后缀名类型文件进行编译。比如 vue-loader 解析 .vue 文件，babel-loader 解析 .js 文件，ts-loader 解析 .ts 文件， 直到所有入口依赖的文件都完成编译。
  
  ```json
  module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: vueLoaderConfig
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')] // 用 include exclude 指定解析范围，通常只针对项目自身代码，不解析 node_modules 下的文件
        }
        ...
    ]
  }
  ```

  与此同时，Webpack 提供了很多钩子函数，插件可以在合适的时机介入，比如在解析完成后， uglifyjs-webpack-plugin 可以对解析后的代码进行压缩，生成新的代码。

  代码压缩涉及到 AST 的转换过程，除了移除注释、空行、简化变量名等常见压缩方式，难点是如何通过 tree-shaking 清除无效代码（dead code elimination），包括无效的模块引用。

  详见另外一篇文章[Export & Import of ES6 Module](https://xinxiong.netlify.app/Export-Import-of-ES6-Module/)

4. 完成模块编译并输出

  根据步骤 2 里的打包入口，编译后的Module（模块）组合成 Chunk（块），通常每个入口输出一个单独的 Chunk 文件。

  根据业务情况，通过更改 output 配置项，一个入口也可以拆包输出多个文件。比如，`split-chunk-plugin` 可以根据模块的动态引入分块打包，`mini-CSS-extract-plugin` 可以把 JS 和 CSS 分开打包。

  通常，打包完成的代码是经过压缩的，不具备可读性，为了方便定位源码调试，可以配置输出 sourcemap 文件。

5. 输出到文件系统 

  Webpack 可以配置文件指纹（包括hash、chunkhash 和 contenthash）， 当生成的文件内容相比上一次打包生成的文件有改动时，hash 值会自动改变。
  文件名改变后，不会覆盖上一版本的文件，可以实现非覆盖发布。

  ```json
  module: {
      output: {
          path: "./static/dist",
          filename: '[name].js',
          chunkFilename: '[name].[chunkhash:8].js',
      }
  }
  ```

#### Tapable

Tapable 核心库，是Webpack插件系统的大管家，提供了不同的钩子函数，控制 Webpack钩子函数的发布与订阅，用于自定义事件的触发和处理，高效有序地组织工作流。

```js
const {
    SyncHook,                   // 同步钩子
    SyncBailHook,               // 同步熔断钩子
    SyncWaterfallHook,          // 同步流水钩子
    SyncLoopHook,               // 同步循环钩子
    AsyncParalleHook,           // 异步并发钩子
    AsyncParallelBailHook,      // 异步并发熔断钩子
    AsyncSeriesHook,            // 异步串行钩子
    AsyncSeriesBailHook,        // 异步串行熔断钩子
    AsyncSeriesWaterfallHook     // 异步串行流水钩子
} = require("tapable");
```

### 脚手架

脚手架用于快速搭建新项目，集成了一系列包管理配置、编译工具配置和工作流工具配置，常见的脚手架有 `vue-cli` 和 `create-react-app`。

一定规模的团队，可以自行开发内部的脚手架工具，也可以建立可配置的项目模板管理。


参考资料：

[Rebuilding our tech stack for the new Facebook.com](https://engineering.fb.com/web/facebook-redesign/)

[Build Your Own Webpack -- Ronen Amiel](https://www.youtube.com/watch?v=Gc9-7PBqOC8)

[从源码窥探Webpack4.x原理](https://juejin.im/post/6844904046294204429)

[我们是如何做好前端工程化和静态资源管理 | Aotu.io「凹凸实验室」](https://aotu.io/notes/2016/07/19/A-little-exploration-of-front-end-engineering/index.html)
