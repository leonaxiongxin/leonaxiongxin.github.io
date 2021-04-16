---
title: Modularization of CSS 
date: "2020-05-17"
template: "post"
tags:
  - "FE"
  - "CSS"
---


<!--truncate-->

## BEM

在前端工程框架普及之前，在 CSS 代码编写中常使用BEM命名规范：

- block 开发中的组件或模块
- element 元素
- modifier 修饰符

随着 React、Vue 等框架的普及使用，前端开发人员编写原生 CSS 的场景越来越少。在项目中，我们常常将页面拆分成许多个小组件，然后像搭积木一样将多个小组件组成最终呈现的页面，有利于组件复用与维护。

但是，CSS 是根据类名去匹配元素的，如果有两个组件使用了相同的类名，后者就会覆盖前者的样式，因此解决样式命名冲突是个大问题。为了解决这个问题，提出了 CSS 模块化的概念。

## Modularization

像引入 JS 一样去引入 CSS 代码，代码中的每一个类名都是引入对象的一个属性，如 SCSS。

### scoped

通过 style 标签的 scoped 属性，在使用时明确 CSS 模块的作用域，在 Webpack 里进行相应的 CSS-loader 配置后，在打包时的时候会自动给 CSS 模块的类名添加 hash 值，杜绝 CSS 命名冲突的问题， 避免样式穿透。

scoped 三条渲染规则：

1. 给 HTML 的 DOM 节点加一个不重复 data 属性(形如：`data-v-19fca230`)来表示唯一性。
2. 在 CSS 选择器的末尾（编译后的生成的 CSS 语句）加一个当前组件的 data 属性选择器（如`[data-v-19fca230]`）来私有化样式。
3. 如果组件内部包含有其他组件，只会给其他组件的最外层标签加上当前组件的data属性。

### Style in JSX

React 的作法，把 style 代码嵌套在 JSX 代码里，避免样式污染。