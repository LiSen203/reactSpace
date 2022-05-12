import React from 'react'
import { List, Switch } from 'antd-mobile'
import {
  UnorderedListOutline,
  PayCircleOutline,
  SetOutline,
} from 'antd-mobile-icons'

export default class AllStudent extends React.Component {
	render() {
		return (
            <>
                <List header='基础用法'>
                    <List.Item>1</List.Item>
                    <List.Item>2</List.Item>
                    <List.Item>3</List.Item>
                </List>
                <List header='可点击的功能列表'>
                    <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
                    账单
                    </List.Item>
                    <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
                    总资产
                    </List.Item>
                    <List.Item prefix={<SetOutline />} onClick={() => {}}>
                    设置
                    </List.Item>
                </List>
            </>
        )
	}
}