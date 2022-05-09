import React, { Component } from 'react'
import { createElement } from 'react'
import './index.css'
export default class index extends Component {
    state = {
        // types:['正在热映','即将上映'],
        // moiveMsg:[],
        // title:'猫眼电影',
        // type:'films'
    }
    gobuy = (link) => {
        let url = link;
        let a = document.createElement("a");
        a.href = url;
        a.click();
        window.URL.revokeObjectURL(url);
    }
    render() {
        return (
            <div id='recommend'>
                <div className='reHeader'
                    style={{ background: this.props.filmObject.bgc }}>
                    <p className='title'>{this.props.filmObject.title}</p>
                    {
                        this.props.filmObject.filmType.map((item, index) => {
                            return (
                                <p className='typeItem' key={index}>{item}</p>
                            )
                        })
                    }
                </div>
                {/* <div className='content'> */}
                {
                    this.props.filmObject.type === 'films' ?
                        (<div className='content'>
                            {this.props.filmObject.moiveMsg.map((item, index) => {
                                return (
                                    <div className='imgItem' key={index}>
                                        <img className='img' src={item.img} alt="" />
                                        <div className='want'><span className='num'>{item.wantnum}</span>人想看</div>
                                        <div className='name'>{item.name}</div>
                                        <div className='gobuy' onClick={() => this.gobuy(item.link)}>购票</div>
                                    </div>
                                )
                            })}
                        </div>) : this.props.filmObject.type === 'hotal' ?
                            (<div className='hotalCon'>
                                {this.props.filmObject.hotalMsg.map((item) => {
                                    return (
                                        <div className='hotalItem' key={index}>
                                            <img className='img' src={item.img} alt="" />
                                            <p className='describe'>{item.describe}</p>
                                            <p className='canset'>{item.canset}</p>
                                            <p className='charge'>{item.charge}</p>
                                        </div>
                                    )
                                })}
                            </div>)
                            : this.props.filmObject.type === 'markets' ?
                                (<div className='hotalCon'>
                                    {
                                        this.props.filmObject.hotalMsg.map((item) => {
                                            return (
                                                <div className='imgItem' key={index}>
                                                    <img className='img' src={item.img} alt="" />
                                                    <div className='want'><span className='num'>{item.wantnum}</span>人想看</div>
                                                    <div className='name'>{item.name}</div>
                                                    <div className='gobuy' onClick={() => this.gobuy()}>购票</div>
                                                </div>
                                            )
                                        })
                                    }</div>) : ''

                }

                {/* // </div> */}


            </div>
        )
    }
}
