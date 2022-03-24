import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
class Hello extends React.Component {
// 一、组件的props
// 1、组件是封闭的，要接收外部数据应该通过props来实现
// 2、props的作用：接收传递给组件的数据
// 3、传递数据：给组件标签添加属性
// 4、接收数据：函数组件通过参数props接收数据，类组件通过this.props接收数据

}
// 二、组件通讯
// 父-子 
// 子-父 和vue传值差不多
// 兄弟传值 
// 兄弟组件需要将共享状态提升到最近的公共父组件中，由公共父组件管理这个状态，思路是状态提升
// 渲染组件
ReactDOM.render(
  <div>
    <Hello />
  </div>,
  document.getElementById('root')
)
