import { useEffect } from "react";
import MovieList from "../components/movies/MovieList";
import NoMoviesFound from '../components/movies/NoMoviesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import {getLatestMovies} from '../lib/api';

const Home = () => {

    const {sendRequest, status, data: loadedMovies, error} = useHttp(
        getLatestMovies, 
        true
    );
    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        );
    }
    if (error) {
        return <p className='centered focused'>{error}</p>;
    }
    if (status === 'completed' && (!loadedMovies || loadedMovies.length === 0)) {
        return <NoMoviesFound />;
    }
    return (
        <MovieList movies={loadedMovies}/>
    );
};

export default Home;