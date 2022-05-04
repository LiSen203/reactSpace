import React ,{Component} from "react";
import './index.css'
export default class index extends Component {
    state = {
        tabbar:['我的美团','手机APP','商家中心','美团规则','网站导航'],
        locals:['龙华','南山','宝安'],
        active:5,
        local:'深圳'
    }

}