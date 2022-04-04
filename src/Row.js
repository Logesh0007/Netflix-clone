import React, { useState, useEffect } from 'react'
import axios from './axios';
import './row.css'

function Row({ title, fetchUrl, isLarge }) {
    const [movies, setMovies] = useState([])
    const imageURL = 'http://image.tmdb.org/t/p/w342/'

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map(movie => movie?.poster_path && movie?.backdrop_path && <img key={movie.id} className={`row_poster ${isLarge && 'row_posterLarge'}`} src={`${imageURL}${isLarge ? movie.poster_path : movie.backdrop_path}`} />)}
            </div>
        </div>
    )
}

export default Row