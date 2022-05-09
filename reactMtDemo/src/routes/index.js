import { Redirect } from 'react-router'

const routes = [
    {
        path: '/',
        exact: true,
        render: () => {
          return <Redirect to="/discover"/>
        }
    },
    {
        path: '/discover',
        component: ()=>import('../App')
      },
]

export default routes