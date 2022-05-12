// 根组件
import React from "react";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import AddStudent  from './pages/Context/AddStudent'
import AllStudent  from './pages/Context/AllStudent'
// Switch可以提高路由匹配效率(单一匹配)
function App(){
    return (
        <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<AllStudent/>}></Route>
                <Route path="/home" element={<AddStudent/>}></Route>
                <Route path="/mine" element={<AllStudent/>}></Route>
            </Routes>
        </Router>
    </div>
    )
}
export default App