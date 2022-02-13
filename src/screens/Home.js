import React, {useEffect, useState} from 'react';
import {moviesApi} from "../Api";

const Home = () => {
    const [movies, setMovie] = useState({
        nowPlaying: [],
        popular: [],
        upcoming: [],
    })

    const getMovies = async() => {
        try{
            const nowPlaying = await moviesApi.nowPlaying();
            const popular = await moviesApi.popular();
            const upcoming = await moviesApi.upcoming();

            setMovie({
                nowPlaying: nowPlaying.data.results,
                popular: popular.data.results,
                upcoming:upcoming.data.results,
            })

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);


    return (
        <div>
            <h1>Home</h1>
            {movies.nowPlaying.length}
        </div>
    );
};

export default Home;
