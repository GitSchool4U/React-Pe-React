import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './Layout'
import { Navigate } from 'react-router-dom'

function App() {

  const rou = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />,
          loader: () =>{
            return fetch('https://jsonplaceholder.typicode.com/users')
          }
        },
        {
          path: '/contact',
          element: <Navigate to={'/'} replace/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={rou} />
    </>
  )
}

export default App
