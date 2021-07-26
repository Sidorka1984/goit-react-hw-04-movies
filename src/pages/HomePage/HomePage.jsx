import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from '../../components/Loader/Loader';
import api from '../../services/api.js';
import { Toaster } from "react-hot-toast";
const HomePage = () => {
    const [trends, setTrends] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const movies = await api.fetchTrends();
            setTrends(movies);
        } catch (error) {
            console.error('Smth wrong with homepage trends fetch', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            {trends ? (
                <MovieList movies={trends} />
            ) : (
                    <Toaster autoClose={4000} position="top-right" />
            )}
            {isLoading && <Loader />}
        </main>
    );
};
export default HomePage;
