import React from 'react'
import ReactDOM from 'react-dom'
// 组件
// 组件特点:可复用、独立、可组合
// react 组件的二种创建方式
// 一:函数创建组件
// 1-使用函数创建组件:使用js函数或者箭头函数创建的组件
//   1-1:函数名称必须以大写字母开头
//   2-1:函数组件必须要有返回值,表示该组件的结构,如果不想返回任何内容就返回null即可

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const spanStyle = {
  padding: '10px 20px',
  background: '#f00',
  border: 'none',
  borderRadius: 5,
}
const title = <div style={spanStyle}>我是组件啊</div>
// //  components Footer
const Footer = () => <div>{title}</div>

// 二使用类创建组件
// 1-类组件使用es6的class创建组件
// 2-类名称也必须以大写字母开头
// 3-类组件应该继承React.Component父类,从而可以使用父类中提供的方法或属性
// 4-类组件必须提供render()方法
// 5-render()方法必须要有返回值,不返回为空返回null

class Hello extends React.Component {
  render() {
    return <div>Hello class Component</div>
  }
}

// 渲染组件
ReactDOM.render(
  <div>
    <HexaColor />
    <Footer />
    <Hello />
  </div>,
  document.getElementById('root')
)
