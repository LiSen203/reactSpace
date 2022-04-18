import React from "react";
import {BrowserRouter as Router ,Routes,Route ,Link} from 'react-router-dom'
import Home from './pages/Home'
import Shopcar from './pages/Shopcar'
function App(){
   
    return (
            <Router>
                <Link to='/home'>首页</Link>
                <Link to='/shopcar'>购物车</Link>
                <div className="App">
              
                    <Routes>
                        <Route path="/shopcar" element={<Shopcar></Shopcar>}></Route>
                        <Route path="/home" element={<Home></Home>}></Route>
                    </Routes>          
                </div>
            </Router> 
    )
}
export default App
