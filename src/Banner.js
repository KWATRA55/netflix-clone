import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests'
import './banner.css'

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOrignal)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            )
            return request
        }   
        fetchData()
    }, [])

    console.log(movie)
  return (
    <header>
        <div className="banner" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize : "cover",
            backgroundPosition: "center center"
        }}>
            <div className="banner_content">
                {/* title */}
                <h1 className='title'>{movie?.title || movie?.name || movie?.orignal_name}</h1>
                {/* button */}
                <div className="buttons">
                    <button className="button">
                        Play
                    </button>
                    <button className="button">
                        My List
                    </button>
                </div>
                {/* description */}
                <h2 className='description'>
                    {movie?.overview}
                </h2>
            </div>
            <div className="banner-fade" />
        </div>
    </header>
  )
}

export default Banner