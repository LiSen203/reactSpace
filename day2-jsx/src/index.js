import React from 'react'
import ReactDOM from 'react-dom'
import imgUrl from './111.jpg'
const title = <h3>这个是jsx语法</h3>

const jsxYUfa = <span>这个是jsx语法2</span>
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}

// JSX element, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>{title}</h1>
      <h2>{jsxYUfa}</h2>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <div>
        <img src={imgUrl} alt="lsImg" />
      </div>
    </div>
  </header>
)
// JSX element
const arrayList = ['html', 'css', 'js']
const List = () => arrayList.map((tec) => <li key={tec}>{tec}</li>)

const app = (
  <div className="app">
    {header}
    {List}
  </div>
)
// ReactDOM.render(
//   <div>
//     {header}
//     {List}
//   </div>,
//   document.getElementById('root')
// )
ReactDOM.render(app, document.getElementById('root'))
