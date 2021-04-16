---
title: Add Global Singleton Loading for Http Requests
date: "2020-06-09"
update: "2020-06-17"
template: "post"
tags:
  - 'FE'
  - "Vue"
  - "CSS"
  - "Design Pattern"
---

我有一个美丽的愿望：Don't repeat yourself.

<!--truncate-->

## 需求背景

### 为什么要添加全局 Loading

虽然现有组件库提供了 Loading 的封装方法，可以通过以下的代码，在请求开始前开启 Loading，请求结束后关闭Loading。但是如果对很多个请求都要写类似这样的代码，还是略麻烦。所以现在的需求是为 Http 请求添加全局 Loading。

### 如何在不影响项目已有业务代码的前提下添加

在我们的项目已有业务代码里，并不是所有的请求都添加了 Loading 效果，只是针对部分耗时较长的请求。

为了不影响已有代码，为全局的 Http 请求方法添加可配置参数 showLoader 来控制是否添加 Loading，默认为false。

### 如何处理串行、并行的多个请求

串行的多个请求，可以按请求顺序展示、关闭 Loading，但是在请求间隔时间很短的情况下，可能有损用户体验。

并行的多个请求，如果添加多个遮罩 Loading，每当一个请求返回相应后再关闭一个遮罩，这对用户体验来说是不友好的，应该保证全局只有一个遮罩，在最后一个请求完成后关闭。

## 需求实现

### 自定义组件

#### 组件设计

1. 遮罩，局部遮罩（组件）或全屏遮罩（默认全屏）
   - 全屏时，遮罩层绝对定位于浏览器窗口视图， position: fixed；
   - 局部时，遮罩层绝对定位于组件，position: absolute，absolute 定位相对于最近的已定位祖先元素（在我们这里应该是目标挂载节点），如果没有已定位祖先元素则会默认以 document.body 为基准，所以设置根元素 position: relative，用 addClass 和 removeClass 方法实现
   - 图层位于最上方，z-index 设置 999（但是这里其实没有完全保证最上方，不会吧，不会吧，不会有弹出框或提示框 Popover 的 z-index 比我还大吧？）
   - 背景颜色可自定义，默认 rgba(0, 0, 0, .9)
   - 遮罩内元素垂直、水平居中，用 flex 布局实现
2. 动态旋转 icon ，可自定义 element-icon 如 ‘el-icon-loading'，默认使用 CSS 动画实现的圆环旋转
3. 文字提示，可自定义，默认为空
4. 优化交互效果，给组件添加淡入、淡出的过渡效果。

```javascript
<template>
    <transition name="fade">
        <div
            v-show="visible"
            class="loading-mask"
            :style="{ background: background || '' }"
            :class="{ 'is-fullscreen': fullscreen }">
            <div class="loading-spinner">
                <i v-if="icon" :class="icon" />
                <div v-else class="loading-icon"></div>
                <p v-if="text" class="loading-text">
                    {{ text }}
                </p>
            </div>
        </div>
    </transition>
</template>
```

样式代码：

<details>
<summary>Click to expand code</summary>

```scss
$PRIMARY_COLOR: #409eff;

.loading-mask {
    position: absolute;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    background:rgba(0, 0, 0, .6);
}

.is-fullscreen {
    position: fixed;
}

.loading-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $PRIMARY_COLOR;
}

.loading-icon {
    width: 2em;
    height: 2em;
    border-radius: 100%;
    border-width: .1em;
    border-style: solid;
    border-color: transparent;
    animation: spin 1.5s linear infinite;
}

.loading-text {
    font-size: 1em;
}

@keyframes spin {
    0% {
        border-color: $PRIMARY_COLOR transparent transparent transparent;
        transform: rotate(0);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        border-color: transparent $PRIMARY_COLOR $PRIMARY_COLOR $PRIMARY_COLOR;
        transform: rotate(360deg)
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```

</details>

#### 暴露服务接口

<details>
<summary>Click to expand code</summary>

```js
import Vue from 'vue'
import loading from './loading.vue'
import { afterLeave, addClass, removeClass, getStyle } from './utils'

const LoadingConstructor = Vue.extend(loading)

interface LoadingConfig {
    target?: any,  // 遮罩的目标节点，默认是 document.body
    fullscreen?: boolean,  // 是否全屏，默认为 true
    background?: string,   // 遮罩层的背景颜色
    icon?: string,    // 旋转icon，默认为旋转的圆环
    text?: string,    // 提示文字，默认为空
}

const DEFAULTCONFIG = {
    fullscreen: true,
}

// 全屏模式下，单例，不重复创建
let fullscreenLoading: any

LoadingConstructor.prototype.originalPosition = ''

// 关闭 Loading, 销毁组件
LoadingConstructor.prototype.close = function() {
    if (this.fullscreen) {
        fullscreenLoading = undefined
    }
    afterLeave(this, () => {
        const target = this.fullscreen ? document.body : this.target
        removeClass(target, 'loading-parent-relative')
        if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el)
        }
        this.$destroy()
    }, 500)
    this.visible = false
}

const addStyle = (options: LoadingConfig, parent: any, instance: any) => {
    let maskStyle: any = {}
    if (options.fullscreen) {
        instance.originalPosition = getStyle(document.body, 'position')
        maskStyle.zIndex = 999
    } else {
        instance.originalPosition = getStyle(parent, 'position')
    }
    Object.keys(maskStyle).forEach(property => {
        instance.$el.style[property] = maskStyle[property]
    })
}

const Loading = (options: LoadingConfig) => {
    options = { ...DEFAULTCONFIG, ...options}
    if (typeof options.target === 'string' && options.target.length) {
        try {
            options.target = document.querySelector(options.target)
        } catch (e) {
            throw 'invalid target'
        }
    }

    options.target = options.target || document.body
    // 如果目标节点不是 document.body 说明不是全屏模式
    if (options.target !== document.body) {
        options.fullscreen = false
    }
    // 全屏模式下，单例，不重复创建
    if (options.fullscreen && fullscreenLoading) {
        return fullscreenLoading
    }
    let parent = options.target
    // 创建组件实例，传入处理后的参数
    let instance: any = new LoadingConstructor({
        el: document.createElement('div'),
        data: options
    })
    addStyle(options, parent, instance)
    console.log(options.fullscreen, options.target, instance.originalPosition)
    if (instance.originalPosition !== 'absolute' && instance.originalPosition !== 'fixed') {
        addClass(parent, 'loading-parent-relative')
    }
    parent.appendChild(instance.$el)
    // 渲染组件
    Vue.nextTick(() => {
        instance.visible = true
    })
    if (options.fullscreen) {
        fullscreenLoading = instance
    }
    return instance
}

export default Loading
```

</details>

#### 注册自定义指令

一个指令定义对象可以提供如下几个钩子函数 （均为可选）：

- bind：绑定触发，只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- inserted：插入触发，被绑定元素插入父节点时调用 （仅保证父节点存在，但不一定已被插入文档中）。
- update：更新触发，所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是可以通过比较更新前后的值来忽略不必要的模板更新。
- componentUpdated：组件更新触发，指令所在组件的 VNode 及其子 VNode 全部更新后调用。
- unbind：解绑触发，只调用一次，指令与元素解绑时调用。

指令钩子函数会被传入以下参数：

- el：指令所绑定的元素，可以用来直接操作 DOM。
- binding：一个对象，包含以下 property：
  - name：指令名，不包括 v- 前缀。
  - value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
  - oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
  - expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
  - arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
  - modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
- vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
- oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

> 除了 el 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。

<details>
<summary>Click to expand code</summary>

```js
import Vue from 'vue'
import Loading from './loading.vue'
import { afterLeave, addClass, removeClass, getStyle } from './utils'

const LoadingConstructor = Vue.extend(Loading)
const loadingDirective: any = {}

interface bindingConfig {
    name?: string,
    value?: any,
    oldValue?: any,
    arg?: string,
    expression?: string,
    modifiers: any,
}

loadingDirective.install = (Vue: any) => {
    // 切换组件的显示状态
    const toggleLoading = (el: any, binding: bindingConfig) => {
        if (binding.value) {
            Vue.nextTick(() => {
                if (binding.modifiers.fullscreen || binding.modifiers.body) {
                    el.originalPosition = getStyle(document.body, 'position')
                    el.maskStyle.zIndex = 999  // 不一定能确保遮罩层在最上面
                    addClass(el.mask, 'is-fullscreen')
                    insertDom(document.body, el)
                } else {
                    el.originalPosition = getStyle(el, 'position')
                    removeClass(el.mask, 'is-fullscreen')
                    insertDom(el, el)
                }
            })
        } else {
            afterLeave(el.instance, () => {
                if (!el.instance.hiding) return
                el.domVisible = false
                const target = binding.modifiers.fullscreen || binding.modifiers.body ? document.body : el
                removeClass(target, 'loading-parent-relative')
                el.instance.hiding = false
            }, 300, true)
            el.instance.visible = false
            el.instance.hiding = true
        }
    }

    // 插入DOM
    const insertDom = (parent: any, el: any) => {
        if (!el.domVisible && getStyle(el, 'display') !== 'none' && getStyle(el, 'visibility') !== 'hidden') {
            Object.keys(el.maskStyle).forEach(property => {
                el.mask.style[property] = el.maskStyle[property]
            })

            if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
                addClass(parent, 'loading-parent-relative')
            }
            el.domVisible = true

            parent.appendChild(el.mask)
            Vue.nextTick(() => {
                if (el.instance.hiding) {
                    el.instance.$emit('after-leave')
                } else {
                    el.instance.visible = true
                }
            })
            el.domInserted = true
        } else if (el.domVisible && el.instance.hiding === true) {
            el.instance.visible = true
            el.instance.hiding = false
        }
    }

    Vue.directive('customLoading', {
        bind(el: any, binding: bindingConfig, vnode: any) {
            const textExr = el.getAttribute('loading-text')
            const spinnerExr = el.getAttribute('loading-spinner')
            const backgroundExr = el.getAttribute('loading-background')
            const vm = vnode.context
            // 传参构建实例
            const instance = new LoadingConstructor({
                el: document.createElement('div'),
                data: {
                    text: vm && vm[textExr] || textExr,
                    spinner: vm && vm[spinnerExr] || spinnerExr,
                    background: vm && vm[backgroundExr] || backgroundExr,
                    fullscreen: !!binding.modifiers.fullscreen
                }
            })
            el.instance = instance
            el.mask = instance.$el
            el.maskStyle = {}

            binding.value && toggleLoading(el, binding)
        },

        update(el: any, binding: bindingConfig) {
            el.instance.setText(el.getAttribute('element-loading-text'))
            if (binding.oldValue !== binding.value) {
                toggleLoading(el, binding)
            }
        },

        unbind(el: any, binding: bindingConfig) {
            if (el.domInserted) {
                el.mask &&
                el.mask.parentNode &&
                el.mask.parentNode.removeChild(el.mask)
                toggleLoading(el, { value: false, modifiers: binding.modifiers })
            }
            el.instance && el.instance.$destroy()
        }
    })
}

export default loadingDirective
```

</details>

### 单例模式

为什么不直接调用 element-ui 的 Loading 组件呢？

> 以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例。
>
> 此时调用它们中任意一个的 close 方法都能关闭这个全屏 Loading，这并不符合我们预期对并行请求的处理。

在现有的很多示例里，用 state 存储 Loading 组件的 visible 状态， 但是我们的多页面应用，有多个独立的 Store，并不适合。

为了兼容 Loading 组件适用于其他情况，另外包装一层，保证只有一个 Loading 实例。

```js
import Loading from '../../components/loading'

const LOADING_CONFIG = {
    fullscreen: true,
    text: "请求中"
}

export default class SingletonLoading {
    private static loadingInstance: any
    private static loadingNum: number
    // 私有构造函数
    private constructor () {}
    private static noneLoadingReqeusts (): boolean {
        return SingletonLoading.loadingNum === 0
    }
    // 公有静态函数，只有类能调用
    public static show (): any {
        if (!SingletonLoading.loadingInstance) {
            SingletonLoading.loadingInstance = Loading.service(LOADING_CONFIG)
            SingletonLoading.loadingNum = 0
        }
        SingletonLoading.loadingNum += 1
    }
    public static close (): any {
        SingletonLoading.loadingNum -= 1
        // 当没有正在进行中的请求，销毁组件
        if (SingletonLoading.noneLoadingReqeusts()) {
            SingletonLoading.loadingInstance.close()
            SingletonLoading.loadingInstance = null
        }
    }
}
```

### Axios 解析

```js
instance.interceptors.request.use(
    (config: any) => {
        if (config.showLoader) {
            SingletonLoading.show()
        }
        // do something before request is sent
        return config
    },
    error => {
        return Promise.reject(error)
    },
)

instance.interceptors.response.use(
    response => {
        const { data, config }: { data: any, config: any} = response
        if (config.showLoader) {
            SingletonLoading.close()
        }
        // do something with response data
    },
    error => {
        return Promise.reject(error)
    },
)
```

## 最终效果

![loading](/img/blog/2020-06-09-add-global-singleton-loading-for-http-requests/loading.png)
