1、react复用组件
复用什么？
state 和操作state的方法 （组件状态逻辑）
两种方式
render props模式  高阶组件HOC
一、操作步骤
1、创建Mouse组件，在组件中提供复用的状态逻辑代码（1、状态 2、操作状态的方法）
2、将要复用的状态作为props.render(state)方法的参数，暴露到组件外部
3、使用props.render()的返回值作为要渲染的内容
4、使用children代替render
