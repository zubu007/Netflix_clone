import axios from 'axios'
import React, {useState, useEffect} from 'react'
import requests from './Request'
import './Banner.css'

const base_URL = 'https://image.tmdb.org/t/p/original/'

function Banner() {
    const [movie, setMovie] = useState([])

    axios.defaults.baseURL = "https://api.themoviedb.org/3"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
            return request
        }
        fetchData()
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + '...': str;
    }

    return (
        <div className='banner_container'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${base_URL}${movie?.backdrop_path})`,
                backgroundPosition: 'center center'
            }}
        >
            <header>
                <div className='banner_contents'>
                    <h1 className='banner_title'>
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className='banner_buttons'>
                        <button className='banner_button'>Play</button>
                        <button className='banner_button'>My List</button>
                    </div>
                    <h1 className='banner_description'>
                        {truncate(movie?.overview, 150)}
                    </h1>
                </div>

                <div className='banner_fadebottom'></div>
            </header>
        </div>
    )
}

export default Banner
