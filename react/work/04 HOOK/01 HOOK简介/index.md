# HOOK 简介

HOOK是react 16.8.0 之后出现的

 组件：无状态组件（函数组件 ）、类组件

 类组件的缺点:
  1. this指向问题 
  2. 繁琐的生命周期
  3. 其他问题

  HOOK专门用于增强函数组件的功能（HOOK在类组件当中无法使用），使之理论上可以成为类组件的替代品

官方强调：没有必要更改已经完成的类组件，官方目前没有计划取消类组件，只是鼓励使用函数组件

HOOK (钩子) 本质上是一个函数（命名上总是以use开头），该函数可以挂载任何功能

HOOK种类：


1. useState

2. useEffect

3. 其他...