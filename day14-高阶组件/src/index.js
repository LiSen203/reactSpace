import React from 'react'
import ReactDOM from 'react-dom'
//高阶组件是一个函数，接受要包装的组件，返回增强后的组件
//高阶组件内部创建一个类组件，在这个类组件中提供复用的状态逻辑代码，通过prop将复用的状态传递给被包装组件的WrapperdComponent

// 一、使用步骤

// 1、创建一个函数，名称约定以with开头
// 2、指定函数参数，参数以大字母开头（作为要渲染的组件）
// 3、在函数内部创建一个类组件，提供复用的状态逻辑代码，并返回
// 4、在该组件中，渲染参数组件，同时将状态通过prop传递给参数组件
//5、displayName 使用高阶组件存在问题 得到二个组件名称相同
// 为高阶组件设置displayName 便于调试区分二个不同的组件，解决调试工具中的调试信息
// 6、传递props  问题是props丢失 高阶组件米有向下传递
// 高阶组件
// 创建高阶组件
function withMouse(WrappedComponent){
  // 该组件提供复用的状态逻辑
  class Mouse extends React.Component{
      // 鼠标状态
      state={
        x:0,
        y:0
      }
      handleMouseMove = e =>{
        this.setState({
          x:e.clientX,
          y:e.clientY
        })
      }
      // 控制鼠标逻辑
      componentDidMount(){
        window.addEventListener('mousemove',this.handleMouseMove)
      }
      componentWillUnmount(){
        window.removeEventListener('mousemove',this.handleMouseMove)
      }
      render(){
        console.log('Mouse'  ,this.props);
        return <WrappedComponent {...this.state}{...this.props}></WrappedComponent>
      }
  }
  return Mouse
}

// 用来测试高阶组件
const Position =props=>(
  <p>
    鼠标当前位置：（x:{props.x},y:{props.y}）
  </p>
)
// 获取增强后的组件
const MousePosition = withMouse(Position)

class App extends React.Component{
  render(){
    return(
        <div>
          <h1>高阶组件</h1>
          {/* 渲染增强后的组件 */}
          <MousePosition a="2"></MousePosition>
        </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
