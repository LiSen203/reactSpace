import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
class Hello extends React.Component {
// 初始化状态
state={
  comments:[
    {
      id:1,
      name:'listen',
      content:'nice to meet you '
    },{
      id:2,
      name:'laity',
      content:'nice to meet you too'
    }
  ],
  userName:'',
  userContent:''
}
// 渲染评论
renderLsit(){
  return  this.state.comments.length===0?(<div className="no-content" >暂无评论，快去评论吧</div>)     
  :(
    <ul>
    {
      this.state.comments.map(item=>(
        <li key={item.id}>
          <h3>评论人：{item.name}</h3>
          <p>评论内容：{item.content}</p>
        </li>
      ))
    }
  </ul>
  )  
}
// 处理表单元素值
handleForm=(e)=>{
  const {name,value} = e.target
  this.setState({
    [name]:value
  })
}
// 发布评论
hangdleClick=()=>{
  const {comments, userName,userContent} = this.state
  if(userName.trim()===''||userContent.trim()===''){
    alert('请输入评论人和评论内容')
    return 
  }
  const newComents = [
    {
      id:Math.random(),
      name:userName,
      content:userContent
    },
    ...comments
  ]
  //清空文本框的值

  this.setState({
    comments:newComents,
    userName:'',
    userContent:''
  })
}
  render(){
    return(
      <div className="app">
        <div>
          <input className="user" type="text" placeholder="请输入评论人" value={this.state.userName} 
          name="userName" onChange={this.handleForm}/>
          <br/>
          <textarea className="content" cols="30" rows="10" placeholder="请输入评论内容" 
          name="userContent" value={this.state.userContent} onChange={this.handleForm}/>
          <br/>
          <button onClick={this.hangdleClick}>发表评论</button>
        </div>
        {
          this.renderLsit()
        }
        
    
        
      </div>
    
    )
  }
}

// 渲染组件
ReactDOM.render(
  <div>
    <Hello />
  </div>,
  document.getElementById('root')
)
