console.log('react');
// 
const title=<h1 className='title'>在react中class用className代替，了解react，JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。</h1>


// input
const divElement = (
  <div>
    <label htmlFor='firstName'>FirstName</label>
    <input type='text' id='firstname' placeholder='First Name' />
  </div>
)
//style
const elmentStyle = {
  backgroundColor: '#61dbfb',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}

// element+style
const welcome = '欢迎学习react jSX语法';
const header = (
  <header style={{
    border: '2px solid orange',
    color: 'black',
    fontSize: '18px',}}>
      <h1>{welcome}</h1>
  </header>
)

// main
const main = (
  <main>
    <p>learn react.js</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
)
// 引入style
const footer = (
  <footer style={elmentStyle}>
    <p>Copyright 2020</p>
  </footer>
)
// 表达式及计算
const num1 = 3;
const num2 = 2;
const yearbriday = 1995;
const currentYear = new Date().getFullYear();
const result =(
  <div>
     {num1} + {num2} = {num1 + num2}<br></br>
     <span>年龄:{currentYear-yearbriday}</span>
  </div>
)
// 循环
const techs = ['html', 'css', 'javascript'];
const techsForm=techs.map((item)=>{
  <li key={item}>{{item}}</li>
})

// 渲染
ReactDOM.render(
  <div>
    {title}{content}{divElement}{header}{main}{footer}{result}
    <ul>
      {techsForm}
    </ul>
  </div>,
  document.getElementById('root')
)