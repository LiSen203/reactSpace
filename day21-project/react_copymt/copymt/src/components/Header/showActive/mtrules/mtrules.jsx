import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './mtrules.css'

export default class myAboutMsg extends Component {
    state={
        tabbar:['美团规则','规则中心','规则目录','规则评议院'],
        // active:0
    }
    cancleActive=()=>{
        PubSub.publish('changeActice',5)
        
    }
    render() {
        return (
            <div id='mtrules' onMouseLeave={()=>this.cancleActive()}>
                {
                    this.state.tabbar.map((item,index)=>{
                        return <div className='item'>{item}</div>
                    })
                }
            </div>
        )
    }
}
