import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import MyActiveAbout from './showActive/myAboutMsg/myAboutMsg'
import Mtrules from './showActive/mtrules/mtrules'
import SealerCenter from './showActive/SealerCenter/SealerCenter'
import OtherUrls from './showActive/OtherUrls/OtherUrls'
import './index.css'

export default class index extends Component {
    state={
        tabbar:['我的美团','手机APP','商家中心','美团规则','网站导航'],
        locals:['彭州','锦江区','崇州'],
        active:5,
        local:'成都'
    }
    componentWillUpdate(){
        PubSub.subscribe('changeActice',(_,item)=>{
            console.log(item)
            this.setState({
                active:item
            })
        })
    }
    changeActive = (index)=>{
        this.setState({
            active:index
        })
        console.log(index)
    }
    changeLocal = (index)=>{
        this.setState({
            local:this.state.locals[index]
            // local:index
        })
    }
    test=(index)=>{
        console.log(index)
    }
    render() {
        return (
            <div>
                <div className='header'>
                    <div className='left'>
                        <p>{this.state.local}</p>
                        <p style={{margin:'0px 6px',cursor:'pointer'}}>切换城市</p>
                        <p> [{
                                this.state.locals.map((item,index)=>{
                                    return <span style={{cursor:'pointer'}} >&nbsp;{item}&nbsp;</span>
                                    // onClick={this.changeLocal(index)}
                                })
                            }]
                        </p>
                        <p style={{marginLeft:'25px',color:'#FE8C00',cursor:'pointer'}} onClick={()=>this.test(111)}>立即登录</p>
                        <p style={{marginLeft:'10px',cursor:'pointer'}}>注册</p>
                    </div>
                    <div className='right'>
                        {
                            this.state.tabbar.map((item,index)=>{
                                return <div className='tabbarItem' onMouseEnter={()=>this.changeActive(index)}>{item}</div>
                            })
                        }
                    </div>
                </div>
                {
                    this.state.active===0?<MyActiveAbout></MyActiveAbout>:''
                }
                {
                    this.state.active===2?<SealerCenter></SealerCenter>:''
                }
                {
                    this.state.active===3?<Mtrules></Mtrules>:''
                }
                {
                    this.state.active===4?<OtherUrls></OtherUrls>:''
                }
            </div>
        )
    }
}
