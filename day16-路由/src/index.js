import React from 'react'
import ReactDOM from 'react-dom'
// 安装 yarn add react-router-dom
// 导入路由的三个核心 Router/Route/Link
// 使用Router组件包裹整个应用,在v6版本需要用Routes包裹Route,component需要用element

// HashRouter:使用url哈希值实现
// BrowserRouter
// import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'

//默认路由 path:/ 如 <Route path='/' element={<First/>}>
import {HashRouter as Router,Route,Link,Routes} from 'react-router-dom'

const First =()=><p>页面一的内容</p>
 
const App =()=>(
    <Router>
        <div className='App'>
            <Link to='/first'>页面一</Link>
          <Routes>
            <Route path='/first' element={<First/>}></Route>
          </Routes>         
        </div>
    </Router>
)
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
