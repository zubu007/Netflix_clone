import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_URL = 'https://image.tmdb.org/t/p/original/'


function Row(props) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    axios.defaults.baseURL = "https://api.themoviedb.org/3"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchURL)
            // console.log(request)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [props.fetchURL])
    
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        }else {
            movieTrailer(movie?.name || "").then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            }).catch(error => console.log(error))
        }
    }

    return (
        <div className='row_container'>
            <h1 className='category'>{props.title}</h1>
            <div className='row_posters'>
                {movies.map(movie => (
                    <img 
                    onClick = {() => handleClick(movie)}
                    className= {`row_poster ${props.isLargeRow && "row_posterLarge"}`}
                    src={`${base_URL}${ props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.title}/>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

        </div>
    )
}

export default Row
