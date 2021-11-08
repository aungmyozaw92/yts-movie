
import { useLocation } from 'react-router-dom';
import HighlightedMovie from '../components/movies/HighlightedMovie';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { getMovie } from '../lib/api';
import useHttp from '../hooks/use-http';
import { useEffect } from 'react';

const MovieDetail = (props) => {
    const location = useLocation();

    const movieId  = location.state.movieId;

    const { sendRequest, status, data: loadedMovie, error } = useHttp(
        getMovie,
        true
    );

    useEffect(() => {
        sendRequest(movieId);
    }, [sendRequest, movieId]);

    if (status === 'pending') {
        return (
        <div className='centered'>
            <LoadingSpinner />
        </div>
        );
    }

    if (error) {
        return <p className='centered'>{error}</p>;
    }

    if (!loadedMovie) {
        return <p>No movie found!</p>;
    }

    return (
        <HighlightedMovie movie={loadedMovie}/>
    );
};

export default MovieDetail;