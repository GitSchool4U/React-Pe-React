import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather, setCity } from '../store/actions/weatherAction';

const Search = () => {

    const city = useSelector(state=>state.weatherDetails.city)
    const dispatch = useDispatch();

    const handleInput = (e) => {
        dispatch(setCity(e.target.value))
    }

    const handleSearchButton = () => {
        dispatch(fetchWeather(city))
    }

    return (
        <div className="join">

            <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input
                    type="search"
                    required
                    placeholder="Search"
                    value={city}
                    onChange={handleInput}
                />
            </label>

            <button onClick={handleSearchButton} className="btn btn-accent join-item">Search</button>
        </div>
    )
}

export default Search