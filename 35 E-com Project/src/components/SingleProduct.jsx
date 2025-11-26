import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from './Loader';

const SingleProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    console.log(product)

    const fetchData = async () => {
        setLoading(true);
        const response = await axios(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (loading) return <Loader className={'p-30'} />

    return (
        <div className="group rounded-lg flex flex-col items-center justify-center py-10">

            <img className="aspect-square object-contain p-4 group-hover:scale-90 transition-all duration-400" src={product?.image} alt="" />

            <div className="p-5 flex flex-col items-center max-w-240">
                <h1 className="text-4xl group-hover:text-blue-400">{product?.title}</h1>

                {/* rating and count */}
                <div className="flex gap-3 mt-7                 ">
                    <p className="bg-green-600 w-fit py-1 px-4 rounded-lg flex items-center text-xs">
                        <span>⭐</span>
                        <span>{product?.rating?.rate}</span>
                    </p>
                    <p>{product?.rating?.count}</p>
                </div>

                <p className="text-xl font-medium text-white/70 mt-3 mb-7">{product?.price} Rs</p>

                <p>{product?.description}</p>
            </div>

        </div>
    )
}

export default SingleProduct