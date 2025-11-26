import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import SingleProduct from './components/SingleProduct.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/products',
        element:<Products/>
      },
      {
        path:'/products/:id',
        element:<SingleProduct/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
  </>,
)
