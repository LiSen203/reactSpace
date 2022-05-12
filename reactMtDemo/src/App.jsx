import './App.css';
import Index from './views/index'
import React,{Component} from "react";
import 'antd/dist/antd.css';
// import axios from 'axios';
export default class App extends Component{
  state={}
  changeValue =(event,value)=>{
    this.setState({
      [value]:event.target.value
    })
    console.log(this.state.changetest)
  }
  render(){
    return (
      <div className="App">
        <Index></Index>
      </div>
    );
  }
}

