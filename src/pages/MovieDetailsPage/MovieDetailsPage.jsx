import { useLocation, useHistory, useParams } from 'react-router';
import { useState, useEffect, Suspense, lazy } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import api from '../../services/api.js';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import MovieDetails from '../../components/MovieDetails/MovieDetails.jsx';
import Loader from '../../components/Loader/Loader';
import onError from '../../components/Error';
import { Toaster } from 'react-hot-toast';
// import Cast from '../../components/Cast/Cast';
// import Reviews from '../../components/Reviews/Reviews';


const Cast = lazy(() =>
    import('../../components/Cast/Cast.jsx'),
)
const Reviews = lazy(() =>
    import('../../components/Reviews/Reviews'),
)

export default function MovieDetailsPage() {
    const history = useHistory();
    const location = useLocation();
    
    const [movie, setMovie] = useState([null]);
    const { movieId } = useParams();
    const { url } = useRouteMatch();

    useEffect(() => {
        async function onFetchMovies() {
            try {
                const movie = await api.fetchMovieById(movieId)
                if (movie.length === 0) {
                    throw new Error()
                }
                setMovie(movie)
            } catch (error) {
                onError()
           }
        }
        onFetchMovies()
    }, [movieId]);

    const handleGoBack  = () => {
        history.push(location?.state?.from ?? '/')
    }
    return (
        <>
            <GoBackButton onBack={handleGoBack} />
            {movie && <MovieDetails movie={movie} url={url} location={location} />}
            {movie && (
                <Suspense fallback={
                    <h1>
                    <Loader />
                    </h1>
                }
                >
                    <Route path="/movies/:movieId/cast" exact>
                        <Cast />
                    </Route>
                    <Route path="/movies/:movieId/reviews" exact>
                        <Reviews />
                    </Route>
                </Suspense>
            )}
         <Toaster autoClose={4000} position="top-right" />
        </>
    )
}
