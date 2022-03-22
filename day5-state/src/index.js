import React from 'react'
import ReactDOM from 'react-dom'
// state和setState  状态和修改状态
//
// 1、state的基本使用 state是组件内部的私有数据，只能在组件内部中使用
// state的值是对象，表示一个组件中有多个数据
// 2、语法 this.setState({要修改的值}) 千万不要直接修改state中的值
class Hellow extends React.Component {
  // 完整写法
  // constructor(){
  //   super()
  //   // 初始化state
  //   this.state = {cd
  //     count:0
  //   }
  // }
  // 简化写法
  // 获取状态 this.state
  state = {
    count: 0,
    test: 'a',
  }
  // 3、把事件程序从jsx中抽离  直接this会存在指向有问题 需要解决(三种方法)
  // 3-1 解决事件绑定this指向问题
  // 1、箭头函数

  // <button onClick={() => this.oncrement()}>+1</button>

  // 2、Function.prototype.bind()
  // 在construstor中this.oncrement =  this.oncrement.bind(this)

  // 3、class的实列方法 试验性语法 可以在babel下直接使用
  //把oncrement方法写成箭头函数(推荐这种,存在babel下可以使用)
  //  {/* <button onClick={this.oncrement}>+1</button> */}
  oncrement() {
    this.setState({
      count: (this.state.count += 1),
    })
  }
  render() {
    return (
      <div>
        有状态组件(类组件)
        <h1>计数器：{this.state.count}</h1>
        {/* <button onClick={()=>{
          this.setState({
            count:this.state.count+=1
            // 把事件可以抽离出去oncrement
          })
        }}>+1</button> */}
        {/* <button onClick={this.oncrement}>+1</button> */}
        <button onClick={() => this.oncrement()}>+1</button>
      </div>
    )
  }
}
// setState()的作用就是1、修改状态 2、更新UI
// 思想：数据驱动视图

const rootElement = document.getElementById('root')
ReactDOM.render(<Hellow />, rootElement)
