import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from '../../components/Loader/Loader';
import api from '../../services/api.js';
import {toast, Toaster } from "react-hot-toast";
const HomePage = () => {
    const [trends, setTrends] = useState([]);
    const [isLoading, setLoading] = useState(false);
    // const [error, setError] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const movies = await api.fetchTrends();
            setTrends(movies);
        } catch (error) {
            toast.error('Smth wrong with homepage trends fetch');
            
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
            <Toaster autoClose={4000} position="top-right" />
        </main>
    );
};
export default HomePage;
