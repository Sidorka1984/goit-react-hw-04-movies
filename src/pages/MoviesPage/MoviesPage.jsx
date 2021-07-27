import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Searchbar from "../../components/Searchbar/Searchbar";
import api from '../../services/api.js';
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import onError from '../../components/Error.js';
import MovieList from "../../components/MovieList/MovieList";
import { toast } from 'react-hot-toast';
import Loader from '../../components/Loader/Loader';

export default function MoviesPage() {
    const [searchName, setSearchName] = useState(null);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const location = useLocation();

    function handleFormSubmit(searchName) {
        if (searchName.trim() === '') {
            onError();
            return;
        }
        resetState()
        setSearchName(searchName)
    }
    function resetState() {
        setSearchName(null)
        setPage(1)
        setMovies([])
    }
    useEffect(() => {
        if (!searchName)
            return;
        getMovies();
    }, [searchName])

    const getMovies = async () => {
        setLoading(true);
        try {
            const results = await api.fetchMoviesBySearch(searchName, page);
            if (results.length === 0) {
                toast.error('Nothing found 🙄!');
            }
            setMovies(prev => [...prev, ...results]);
            setPage(prev => prev + 1);
            setLoading(true);
        } catch (error) {
            toast.error('Smth wrong with search fetch');
        } finally {
            setLoading(false);
        }

    };
    useEffect(() => {
        function scrollPageToEnd() {
            setTimeout(() => {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                });
            }, 1000);
        }
        if (page > 1) {
            scrollPageToEnd();
        }
    }, [page])  
   
   
    const showImageList = movies.length > 0;

    return (
        <div>
            <Searchbar onSearch={handleFormSubmit} />
            <MovieList movies={movies} location={location} />
            {showImageList && (
                <LoadMoreButton onClick={getMovies} aria-label="add films" />
            )}
            {isLoading && <Loader />}
        </div>
    )


}