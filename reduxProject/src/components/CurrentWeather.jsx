import React from 'react'
import { useSelector } from 'react-redux'

const CurrentWeather = () => {

    const {current, loading, error} = useSelector(state=>state.weatherDetails);

    if(loading) return <p className='p-10'>Loading.......</p>
    if(error) return <p>{error}</p>
    if(!current) return null;

    return (
        <div className="card bg-neutral text-neutral-content w-96">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{current.name}</h2>
                <p>Temperature : {(current.main.temp - 273).toFixed(1)} °C</p>
                <p>Humidity: {current.main.humidity}%</p>
                <p>Weather: {current.weather[0].description}</p>
            </div>
        </div>
    )
}

export default CurrentWeather