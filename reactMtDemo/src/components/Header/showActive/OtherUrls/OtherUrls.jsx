import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './OtherUrls.css'

export default class OtherUrls extends Component {
    state={
        holtels:['国际机票','国内机票','民宿','经济型酒店','主题酒店','商务酒店','公寓'],
        foods:['烤鱼','特色小吃','火锅','烧烤','自助餐','代金券'],
        movies:['热映电影','热映影院','热映电影口碑榜','最受期待电影','国内票房榜','北美票房榜','电影排行榜'],
        applications:[
            {
                url:'https://i.meituan.com/mobile/down/meituan',
                img:'https://s0.meituan.net/bs/fe-web-meituan/464c015/img/appicons/meituan.png'
            },
            {
                url:'https://waimai.meituan.com/mobile/download/default',
                img:'https://s1.meituan.net/bs/fe-web-meituan/464c015/img/appicons/waimai.png'
            },
            {
                url:'https://minsu.meituan.com/app/',
                img:'https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png'
            },
            {
                url:'https://www.dianping.com/events/m/index.html',
                img:'	https://s1.meituan.net/bs/fe-web-meituan/464c015/img/appicons/dianping.png'
            },
            {
                url:'https://maoyan.com/app',
                img:'https://s1.meituan.net/bs/fe-web-meituan/464c015/img/appicons/maoyan.png'
            }
        ]
    }
    cancleActive=()=>{
        PubSub.publish('changeActice',5)
        
    }
    render() {
        return (
            <div id='OtherUrls' onMouseLeave={()=>this.cancleActive()}>
                <div className='holtel'>
                    <p className='title'>酒店旅游</p>
                    <div className='types'>
                        {
                            this.state.holtels.map((item,index)=>{
                                return <div className='item'>{item}</div>
                            })
                        }
                    </div>
                </div>
                <div className='foods'>
                    <p className='title'>吃美食</p>
                    <div className='types'>
                        {
                            this.state.foods.map((item,index)=>{
                                return <div className='item'>{item}</div>
                            })
                        }
                    </div>
                </div>
                <div className='movies'>
                    <p className='title'>看电影</p>
                    <div className='types'>
                        {
                            this.state.movies.map((item,index)=>{
                                return <div className='item'>{item}</div>
                            })
                        }
                    </div>
                </div>
                <div className='application'>
                    <p className='title'>手机应用</p>
                    <div className='types'>
                        {
                            this.state.applications.map((item,index)=>{
                                return (
                                    <a href={item.url} target='_blank'>
                                        <img style={{width:'60px',height:'73px'}} src={item.img} alt="" srcset="" />
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
