import { useEffect } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from './store/actions/weatherAction';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import ForecastDetails from './components/ForecastDetails';

function App() {

  const city = useSelector(state => state.weatherDetails.city)
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchWeather(city))
  }, [])

  return (
    <div className='flex flex-col items-center gap-10 py-10'>
      <div className='sticky top-0 p-10 z-10 bg-base-100 w-full flex flex-col items-center'>
        <h1 className='text-3xl mb-6'>Weather Dashboard</h1>
        <Search />
      </div>
      <CurrentWeather />
      <ForecastDetails />
    </div>
  )
}

export default App
