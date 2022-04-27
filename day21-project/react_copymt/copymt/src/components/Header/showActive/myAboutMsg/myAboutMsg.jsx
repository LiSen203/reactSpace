import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './myAboutMsg.css'

export default class myAboutMsg extends Component {
    state={
        tabbar:['我的美团','我的订单','我的收藏','抵用券','我的设置'],
        // active:0
    }
    cancleActive=()=>{
        PubSub.publish('changeActice',5)
        
    }
    render() {
        return (
            <div id='myAboutMsg' onMouseLeave={()=>this.cancleActive()}>
                {
                    this.state.tabbar.map((item,index)=>{
                        return <div className='item'>{item}</div>
                    })
                }
            </div>
        )
    }
}
