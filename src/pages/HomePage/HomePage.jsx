import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from '../../components/Loader/Loader';
import api from '../../services/api.js';
import { toast, Toaster } from "react-hot-toast";
import styles from "../../components/Navigation/Navigation.module.css";

const HomePage = () => {
    const [trends, setTrends] = useState([]);
    const [isLoading, setLoading] = useState(false);
 

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
            <h2 className={styles.title}>Trending movies</h2>
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
