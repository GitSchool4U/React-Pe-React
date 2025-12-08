import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyContextProvider } from './MyContext.jsx'

createRoot(document.getElementById('root')).render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
)
