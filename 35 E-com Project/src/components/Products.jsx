import { useEffect, useState } from "react"
import axios from 'axios'
import Loader from './Loader'
import { useNavigate } from "react-router-dom";

const Products = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios('https://fakestoreapi.com/products')
    setProducts(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  if(loading) return <Loader className={'p-30'}/>

  return (
    <div className="grid grid-cols-5 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[300px]:grid-cols-1 gap-4 p-6 max-[600px]:p-2">
      {products.map((item) => {
        return (
          <ProductCard key={item.id} item={item}/>
        )
      })}
    </div>
  )
}


const ProductCard = ({item}) => {

  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/products/${item.id}`)} className="group bg-gray-700 rounded-lg">

      <img className="aspect-square object-contain p-4 group-hover:scale-90 transition-all duration-400" src={item.image} alt="" />

      <div className="p-5">
        <h1 className="text-2xl line-clamp-2 group-hover:text-blue-400">{item.title}</h1>

        {/* rating and count */}
        <div className="flex gap-3 my-3">
          <p className="bg-green-600 w-fit py-1 px-4 rounded-lg flex items-center text-xs">
            <span>⭐</span>
            <span>{item.rating.rate}</span>
          </p>
          <p>{item.rating.count}</p>
        </div>

        <p className="text-xl font-medium text-white/70">{item.price} Rs</p>
      </div>

    </div>
  )
}

export default Products