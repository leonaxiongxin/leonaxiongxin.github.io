---
title: Take a Look at React Components
date: "2020-06-14"
template: "post"
tags:
  - "FE"
  - "React"
  - "HOC"
  - "Hooks"
---

React 组件知多少...

<!--truncate-->

## React 组件的类型

### 函数组件

函数组件，内部不保留 State，也称为 Stateless Component，没有实例，也没有生命周期方法，是一个纯函数变换，支持定义 defaultProps。
每次都会重新渲染生成新组件，所以更适用于小的 UI 视图组件，如 Button。
  
### PureComponent

PureComponent 是优化性能的重要方法之一。

举个例子，在普通的类组件里，当父组件重渲染时，会自动触发所有的子组件重渲染，即使在子组件并不需要更新的情况下。

PureComponent 在内部更改了生命周期方法 shouldComponentUpdate(nextProps, nextState) 的逻辑来检查组件是否需要重渲染，只有在检测到 Props 或 State 发生改变时才会触发重渲染。

但是需要注意的是，实际上只是对 Props / State 进行了浅对比（Shallow Equal），所以对于 Array / Object 形式的Props / State 直接修改下标并不能触发重渲染。

```js
if (ctor.prototype && ctor.prototype.isPureReactComponent) {
  return (
    !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
  );
}
```

<details>
<summary>Click to expand  source code of shallow equal</summary>

```js
/**
 * 与 == 、 === 的比较不同, == 在比较前会做类型转换，=== 要求类型相同，但存在特殊情况 NaN 和 +0/-0
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x: any, y: any) {
  return (
    (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y) // eslint-disable-line no-self-compare
  );
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA: mixed, objB: mixed): boolean {
  if (is(objA, objB)) {
    return true;
  }

  if (
    typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    if (
      !objB.hasOwnProperty(keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }

  return true;
}
```

</details>

### 类组件

- 状态逻辑难复用
  
  以往的做法是通过 Props 传递 或 HOC（高阶组件），导致层级冗余

- 趋向复杂难以维护
  
  类组件中到处都是对状态的访问和处理，导致组件难以拆分成更小的组件

- this 指向问题
  
  父组件给子组件传递函数时，必须绑定 this：
    1. 在构造函数中绑定 this：每次父组件刷新的时候，如果传递给子组件其他的 props 值不变，那么子组件就不会刷新
    2. 在 render() 函数里面绑定 this：因为 bind 函数会返回一个新函数，所以父组件刷新时，即使父组件传递给子组件其他的 props 值不变，子组件每次都会刷新
    3. 使用箭头函数：即使两个箭头函数的函数体是一样的，都会生成一个新函数，所以父组件刷新的时候，子组件每次都会刷新
    4. 使用类的静态属性：原理和第一种方法差不多，比第一种更简洁

## 组件的状态逻辑复用

之前说到类组件的状态逻辑难复用，其实是组件设计演进历程里由来已久的问题，主要经过了 Mixin、 HOC、Hooks 的更迭。

### Mixin

Mixin（混入）是一种通过扩展收集功能的方式，它本质上是将一个对象的属性拷贝到另一个对象上，而且可以拷贝在**任意多个对象的**任意个方法到一个新对象上去，这是**继承**所不能实现的。

Mixin 的出现主要就是为了解决代码复用问题。

#### Mixin 的实现方式

React也提供了 Mixin 的实现，如果完全不同的组件有相似的功能，可以引入来实现代码复用，当然只有在使用 createClass 来创建 React组件时才可以使用，因为在 React 组件的 es6 写法中它已经被废弃掉了。

```js
var logMixin = {
  log: function {
    console.log('log')
  }
  componentDidMount: function() {
    console.log('in')
  }
  componentWillUnmount: function() {
    console.logLogging 'out')
  }
}

var User = React.createClass({
  minxins: [logMixin],
  render: function() {
    return (<div>...</div>)
  }
})

var Good = React.createClass({
  minxins: [logMixin],
  render: function() {
    return (<div>...</div>)
  }
})
```

#### Mixin 的危害

- Mixin 可能会相互依赖、耦合，不利于代码维护

- 不同的 Mixin 中的方法可能会相互冲突

- 当 Mixin 非常多时，组件还要为其做相关处理，这样会给代码造成滚雪球式的复杂性

React现在已经不再推荐使用 Mixin 来解决代码复用问题，因为 Mixin 带来的危害比他产生的价值还要巨大，并且 React 全面推荐使用高阶组件（High Order Component, HOC）来替代它。

### HOC

HOC 并不是 一种API，HOC 可以看作 React 对装饰模式的一种实现，HOC 就是一个函数，该函数接受一个组件作为参数，并返回一个新的组件（典型的函数式编程思想）。

#### HOC 的实现方式

- 属性代理
  
  函数返回一个我们自己定义的组件，然后在 render 中返回要包裹的组件，这样我们就可以代理所有传入的 props，并且决定如何渲染。
  
  ```js
  function proxyHOC (WrappedComponent) {
    return class extends Component {
      render () {
        return <WrappedComponent {...this.props} />
      }
    }
  }
  ```

  实际上 ，这种方式生成的高阶组件就是原组件的父组件，但是对比原生组件在以下方面有增强：
  - 可操作所有传入的 props
  - 可操作组件的生命周期
  - 可操作组件的 static 方法
  - 获取 refs

- 反向继承
  
  函数返回一个组件，继承原组件，在 render 中调用原组件的 render。

  ```js
  function inheritComponent (WrappedComponent) {
    return class extends WrappedComponent {
      render () {
        return super.render()
      }
    }
  }
  ```

  由于继承了原组件，能通过this访问到原组件的 生命周期、props、state、render 等，相比属性代理它能操作更多的属性，对比原生组件有以下增强：
  - 可操作所有传入的 props
  - 可操作组件的生命周期
  - 可操作组件的 static 方法
  - 获取 refs
  - 可操作 state
  - 可以渲染劫持

#### HOC 的使用

HOC实际上是一个函数，所以我们将要增强的组件作为参数调用 HOC函数，得到增强后的组件。在实际应用中，一个组件可能会被多个 HOC 增强，像下面这样：

```js
export logger(visible(style(Input)))
```

这样的代码可读性差，可以通过 compose 函数封装

```js
const compose = (...fns) =>
  fns.reduce((f, g) =>
    (...args) => g(f(...args)
  )
)
```

还可以借助 ES7为提供的 Decorators 来让我们的写法变的更加优雅：

```js
@logger
@visible
@style
export Input extends COmponent {}
```

> Decorators 是 ES7的一个提案，还没有被标准化，不过 Babel 转码器已经支持，需要提前配置 babel-plugin-transform-decorators-legacy

#### HOC 的应用

- 双向绑定
  
- 表单校验
  
- Redux 的 connect
  
  connect 函数其实就做了一件事，将 mapStateToProps 和 mapDispatchToProps 分别解构后传给原组件，这样我们在原组件内就可以直接用 props 获取 state 以及 dispatch 函数了。

#### HOC 的注意事项

- 静态属性拷贝
  
  当我们应用 HOC去增强另一个组件时，我们实际使用的组件已经不是原组件了，所以我们拿不到原组件的任何静态属性，我们可以在 HOC 的结尾手动拷贝。
  
- 传递 Refs
  
  使用高阶组件后，获取到的 ref实际上是最外层的容器组件，而非原组件，但是很多情况下我们需要用到原组件的 ref。React16.3版本提供了一个 forwardRef API来帮助我们进行 refs传递，这样我们在高阶组件上获取的 ref就是原组件的 ref了，而不需要再手动传递。

- 不要在 render 方法内使用 HOC
  
  每次调用高阶组件生成的都是是一个全新的组件，组件的唯一标识响应的也会改变，如果在 render 方法调用了高阶组件，这会导致组件每次都会被卸载后重新挂载。

- 不要改变原组件（纯函数）

- displayName（方便调试）

### Hooks

Hooks 是 Reactv16.7.0-alpha 中加入的新特性。Hooks 的设计目的，就是加强版函数组件，完全不使用"类"，就能写出一个全功能的组件。

#### 官方提供的Hooks

React 提供的最常用的几个钩子：

- useState() 状态钩子
  函数接受 State 变量的初始值作为参数，返回值是一个数组，数组的第一个成员是指向当前状态的变量，第二个成员是用来更新状态的函数。

  每次渲染都是独立的闭包。

- useEffect()
  函数接受两个参数，第一个参数是包含异步操作的函数，第二个参数是一个数组，数组内是 Effect 的依赖项，只要这个数组发生变化，回调函数就会执行。如果第二个参数为空，在组件第一次 render 和之后每次 update 后运行， React保证在 DOM 已经更新完成之后才会运行回调。
  useEffect() 用来引入具有副作用的操作（即没有发生在视图转换过程中的逻辑），useEffect() 在全部渲染完成之后执行，最常见的就是向服务器请求数据。以前，放在 componentDidMount 里面的代码，现在可以放在 useEffect()。

- useLayoutEffect()
  useLayoutEffect() 在布局完成之后、绘制之前执行。
  尽可能使用标准的 useEffect 以避免阻塞视图更新

- useContext() 共享状态钩子
  利用 React Context API 创建 AppContext 包裹需要通信的子组件，通过 Provider 注入对象。

- useReducer()
  函数接受 Reducer 函数和 State 初始值作为参数，返回值是一个数组，数组的第一个成员是指向当前状态，第二个成员是发送 action 的dispatch函数。

  ```js
  const [state, dispatch] = useReducer(reducer, initialState)
  ```

  由于 Hooks 可以提供共享状态和 Reducer 函数，所以它在这些方面可以取代 Redux。但是，它没法提供中间件（middleware）和时间旅行（time travel）。


#### 自定义 hook

双向绑定

```js
const useBind = (init) => {
  let [value, setValue] = useState(init)
  let onChange = useCallback((event) => {
    setValue(event.currentTarget.value)
  }, [])
  return { value, onChange}
}

const PageA = (props) => {
  let value = useBind('')
  return <Input {...value} />
}
```

#### hook 的使用动机

使用 hook 的优势：

- 减少状态逻辑复用的冲突风险
- 避免 HOC 的地狱式嵌套
- 使用函数组件代替类组件
- 能将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）
- 副作用的关注点分离
  
  副作用指那些没有发生在数据向视图转换过程中的逻辑，如 ajax 请求、访问原生dom 元素、本地持久化缓存、绑定/解绑事件、添加订阅、设置定时器、记录日志等。以往这些副作用都是写在类组件生命周期函数中的，而 useEffect 在全部渲染完毕后才会执行，useLayoutEffect 会在浏览器 layout 之后、painting 之前执行。

需要注意的是：

- 只能在函数内部的最外层调用 Hook，不要在循环、条件判断或者子函数中调用
- 只能在 React 函数式组件或自定义 Hook 中使用 Hook，不要在其他 JavaScript 函数中调用
