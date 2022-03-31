一、跨组件传递数据(比如主题、语言等)可以使用context传递数据 如App组件传递到Child组件
二、使用步骤
   1、 调用React.creteContext()创建Provider(提供数据)和Consumer(消费数据)两个组件
        `const {Provider,Consumer} = React.createContext()`
   2、使用Provider组件作为父节点
        `
            <Provider>
                <div className ="App">
                    <Child>
                </div>
            </Provider>
            `
        3、设置value属性，表示要传递的数据
            `
            <Provider value="传递的值"></Provider> 
            `  
        4、调用consumer接收组件数据
        `
        class App extends React.Compontent{  
            render (){
                return (
                    <Provider value="pink">
                        <div className="app">
                            <Node />
                        </div>
                    </Provider>
                )
            }
        }
        const Node = props=>{
            return (
                <div className="node">
                    <SubNode />
                </div>
            )
        }
        const SubNode =props=>{
            return (
                <div className="subnode">
                    <Child />
                </div>
            )
        }
        
        `
        const Child = props=>{
            return  <div className="subnode">
            <Consumer>
            {
                data=><span>我是子节点--{data}</span>
            }
            </Consumer>
            </div>
        }
    `
