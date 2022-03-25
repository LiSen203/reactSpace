1、children属性：表示组件标签的子节点。当组件标签有子节点时，props就会有该属性
2、children属性与普通的props一样，值可以是任意值(文本、React元素、组件、甚至是函数)
    `
        function Hello(props){
            return (
                <div>
                    组件的字节点：{props.children}
                </div>
            )
        }
    `