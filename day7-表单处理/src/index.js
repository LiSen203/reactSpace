import React from 'react'
import ReactDOM from 'react-dom'
// 表单处理
// 1、受控组件
// ​ 在React中我们可以通过将 state 与表单元素的 value 绑定的方式，来控制表单元素的值，被控制的表单元素也被称为受控组件。但是表单元素是可输入的，也就是说值是会变化的，而在React中数据存放在state中，并且只能通过 setState() 方法来修改。

// ​ 此时可变的表单元素的值和不可直接改变的 state 发生了冲突，所以我们需要给表单元素绑定 change 事件，在对应的事件处理程序中，通过this.setState() 来修改表单元素绑定的state的值，这样就解决了冲突。
class Hello extends React.Component {
  state = {
    txt: '',
  }
  handleChange = (e) => {
    this.setState({
      txt: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.txt} onChange={this.handleChange}></input>
        <p>{this.state.txt}</p>
      </div>
    )
  }
}

// 2、非受控组件
// ​ 在React中，我们可以借助 ref ，使用原生DOM的方式来获取表单元素的值，此时仅仅是获取值，而不是修改值，所以被称为非受控组件。
const style = {
  width: '50px',
  height: '50px',
}
class Noform extends React.Component {
  txtRef = React.createRef()
  getTxt = () => {
    console.log('文本框的值为：', this.txtRef.current.value)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.txtRef} />
        <button style={style} onClick={this.getTxt}>
          点我
        </button>
      </div>
    )
  }
}
// 渲染组件
ReactDOM.render(
  <div>
    <Hello />
    <Noform />
  </div>,
  document.getElementById('root')
)
