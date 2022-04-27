import React, { Component } from 'react'
import './index.css'
import Header from '../../components/Header'
import Recommends from '../../components/Recommends'
import {  Carousel  } from 'antd';

import QRCode  from 'qrcode.react';


export default class index extends Component {
    state={
        // img:`${require('../../static/imgs/logo.png')}`
        CarouselImg:[
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg"
        ],
        filmObject:{
            filmType:['正在热映','即将上映'],
            moiveMsg:[
                {
                    name:'不老奇事',
                    wantnum:'648732',
                    link:'https://maoyan.com/films/1204092',
                    img:'https://p0.meituan.net/movie/69d5cb67e5e457a87a3d6405bd33a6011190745.jpg'
                },
                {
                    name:'长津湖',
                    wantnum:'6487325435',
                    link:'https://maoyan.com/films/1204092',
                    img:'https://p0.meituan.net/movie/0e81560dc9910a6a658a82ec7a054ceb5075992.jpg@214w_297h_1e_1c'
                },
                {
                    name:'无限赴死',
                    wantnum:'68732',
                    link:'https://maoyan.com/films/1204092',
                    img:'https://p0.meituan.net/movie/f84bef670a5534d9249409f921e2f33d4421909.jpg@214w_297h_1e_1c'
                },
                {
                    name:'入殓师',
                    wantnum:'6432',
                    link:'https://maoyan.com/films/1204092',
                    img:'https://p1.meituan.net/movie/e78f26918fd0aec91db5d50dc1729f01680242.png@214w_297h_1e_1c'
                },
                {
                    name:'沙丘',
                    wantnum:'48732',
                    link:'https://maoyan.com/films/1204092',
                    img:'https://p0.meituan.net/movie/10069d33c6c95ccb38665c76644fe63e5055632.jpg@214w_297h_1e_1c'
                }
            ],
            title:'猫眼电影',
            type:'films',
            bgc:'linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104)'
        },
        hotalObject:{
            filmType:['重庆','绵阳','乐山','凉山彝族自治州','遵义','自贡','雅安','内江'],
            hotalMsg:[
                {
                    describe:'【米露～～】  万象汇//佳乐金街，超大落地窗，百寸投影一居室',
                    canset:'整套1居室·可住2人 | 泸州教科城',
                    charge:'￥168',
                    link:'https://minsu.meituan.com/housing/13710052/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend',
                    img:'https://img.meituan.net/phoenix/7674c0b00a5fe3d1f457c91282f8cae73070957.jpg'
                },
                {
                    describe:'【米露～～】  万象汇//佳乐金街，超大落地窗，百寸投影一居室',
                    canset:'整套1居室·可住2人 | 泸州教科城',
                    charge:'￥168',
                    link:'https://minsu.meituan.com/housing/13710052/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend',
                    img:'https://img.meituan.net/phoenix/7674c0b00a5fe3d1f457c91282f8cae73070957.jpg'
                },
                {
                    describe:'【米露～～】  万象汇//佳乐金街，超大落地窗，百寸投影一居室',
                    canset:'整套1居室·可住2人 | 泸州教科城',
                    charge:'￥168',
                    link:'https://minsu.meituan.com/housing/13710052/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend',
                    img:'https://img.meituan.net/phoenix/7674c0b00a5fe3d1f457c91282f8cae73070957.jpg'
                },
                {
                    describe:'【米露～～】  万象汇//佳乐金街，超大落地窗，百寸投影一居室',
                    canset:'整套1居室·可住2人 | 泸州教科城',
                    charge:'￥168',
                    link:'https://minsu.meituan.com/housing/13710052/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend',
                    img:'https://img.meituan.net/phoenix/7674c0b00a5fe3d1f457c91282f8cae73070957.jpg'
                },
                {
                    describe:'【米露～～】  万象汇//佳乐金街，超大落地窗，百寸投影一居室',
                    canset:'整套1居室·可住2人 | 泸州教科城',
                    charge:'￥168',
                    link:'https://minsu.meituan.com/housing/13710052/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend',
                    img:'https://img.meituan.net/phoenix/7674c0b00a5fe3d1f457c91282f8cae73070957.jpg'
                },
                {
                    describe:'【米露～～】  万象汇//佳乐金街，超大落地窗，百寸投影一居室',
                    canset:'整套1居室·可住2人 | 泸州教科城',
                    charge:'￥168',
                    link:'https://minsu.meituan.com/housing/13710052/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend',
                    img:'https://img.meituan.net/phoenix/7674c0b00a5fe3d1f457c91282f8cae73070957.jpg'
                },
                {
                    describe:'【米露～～】  万象汇//佳乐金街，超大落地窗，百寸投影一居室',
                    canset:'整套1居室·可住2人 | 泸州教科城',
                    charge:'￥168',
                    link:'https://minsu.meituan.com/housing/13710052/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend',
                    img:'https://img.meituan.net/phoenix/7674c0b00a5fe3d1f457c91282f8cae73070957.jpg'
                },
                {
                    describe:'【米露～～】  万象汇//佳乐金街，超大落地窗，百寸投影一居室',
                    canset:'整套1居室·可住2人 | 泸州教科城',
                    charge:'￥168',
                    link:'https://minsu.meituan.com/housing/13710052/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend',
                    img:'https://img.meituan.net/phoenix/7674c0b00a5fe3d1f457c91282f8cae73070957.jpg'
                },
            ],
            title:'推荐民宿',
            type:'hotal',
            bgc:'linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%) rgb(243, 182, 74)'
        }
    }
    render() {
        return (
            <div id="index">
                <Header></Header>
                <div className='searchCon'>
                    <div className='logoCon'>
                        <img className='logo' src="https://s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png" alt="" srcset="" />
                    </div>
                    <div className='search'>
                        <input className='searchInput' type="text" placeholder='搜索商家或地点'/>
                        <div className='searchButton'>搜索</div>
                    </div>
                </div>
                <div className='clearFix'></div>
                <div className='main'>
                    <div className='leftNav'>
                        <div className='title'>全部分类</div>
                        <div className='serviceList'>
                            <ul>
                                <li><i className='iconfontNew hc-icon-foodNew'></i>美食</li>
                                <li>外卖</li>
                                <li>酒店</li>
                                <li>民宿</li>
                                <li>猫眼电影</li>
                            </ul>
                        </div>
                    </div>
                    <div className='titles'>
                        <div className='item1'>美团外卖</div>
                        <div className='item2'>猫眼电影</div>
                        <div className='item3'>美团酒店</div>
                        <div className='item4'>民宿/公寓</div>
                        <div className='item5'>商家入驻</div>
                        <div className='item6'>美团公益</div>
                    </div>
                    <div className='adImgs'>
                        <Carousel autoplay>
                            {
                                this.state.CarouselImg.map((item,index)=>{
                                    return (
                                        <div className='item' key={index}>
                                            <img src={item} alt="" srcset="" />
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                        <img className='songImg' src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="" />
                        <div className='loginCon'>
                            <div className='logoCon'>
                                <img className='logo' src="https://s0.meituan.net/bs/fe-web-meituan/464c015/img/avatar.jpg" alt="" />
                            </div>
                            <p className='welcome'>Hi！你好</p>
                            <div className='button'>注册</div>
                            <div className='button'>立即登录</div>
                        </div>
                        <img style={{width:'270px',height:'165px',margin:'10px 10px 0 24px'}} src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt=""/>
                        <img style={{width:'270px',height:'165px',margin:'10px 10px 0 0'}} src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt=""/>
                        <img style={{width:'150px',height:'165px',margin:'10px 10px 0 0'}} src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt=""/>
                        <div className='shareCon'>
                            <QRCode
                                id="bill_qr_code_url"
                                value='xxx' //value参数为生成二维码的链接 我这里是由后端返回
                                size={95} //二维码的宽高尺寸
                                fgColor="#000000"></QRCode>
                            <p className='AppText'>美团APP手机版</p>
                            <p className='Ads'><span style={{color:'#EC5300'}}>1元起</span>吃喝玩乐</p>
                        </div>
                    </div>
                </div>
                <Recommends filmObject={this.state.filmObject}></Recommends>
                <Recommends filmObject={this.state.hotalObject}></Recommends>
            </div>
        )
    }
}
