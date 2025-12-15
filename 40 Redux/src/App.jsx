import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToProduct, increment } from './redux/action/productAction'
import Products from './Products';

function App() {

  const dispatch = useDispatch();

  const handleAddToProduct = () => {
    dispatch(addToProduct({
      id: 1,
      name: 'samsung',
    }))
  }

  const handleIncrement = () => {
    dispatch(increment())
  }

  return (
    <>
      <h1>Hello</h1>
      <button onClick={handleAddToProduct}>Click</button>
      <button onClick={handleIncrement}>Count</button>

      <Products />
    </>
  )
}

export default App
