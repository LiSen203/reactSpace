import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './SealerCenter.css'

export default class myAboutMsg extends Component {
    state={
        tabbar:['商家中心','美团餐饮商户中心','登录商家中心','美团智能收银','我想合作','免费开店'],
        // active:0
    }
    cancleActive=()=>{
        PubSub.publish('changeActice',5)
        
    }
    render() {
        return (
            <div id='SealerCenter' onMouseLeave={()=>this.cancleActive()}>
                {
                    this.state.tabbar.map((item,index)=>{
                        return <div className='item'>{item}</div>
                    })
                }
            </div>
        )
    }
}
