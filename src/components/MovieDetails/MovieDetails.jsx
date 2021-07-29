import defaultImage from '../../images/defaulte.png';
import { NavLink } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';

export default function MovieDetails({ movie, url }) {
    return (
        <>
            <div className={styles.wrapper}>
                <img
                    src={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                            : defaultImage
                    }
                    alt={movie.title && movie.original_name}
                    width="450px"
                    className={styles.poster}
                />
                <div className={styles.description}>
                    <h2 className={styles.title}>
                        {MoviesPage.title && movie.original_name}
                        {movie.title}
                        {movie.release_date && (
                             <span> ({movie.release_date.slice(0, 4)})</span>
                        )}
                    </h2>
                    <h3 className={styles.title}>
                        Rating:
                        <span className={(styles.rating)}>{movie.vote_average}</span>
                    </h3>
                    <h3 className={styles.title}>Overview</h3>
                    <p className={styles.info}>{movie.overview}</p>
                    <h2 className={styles.title}>
                        Genres:
                        <ul className={styles.genreList}>
                            {movie.genres && movie.genres.map((genre) => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </ul>
                    </h2>

                </div>

            </div>
            <ul className={styles.navigation}>
                <li className={styles.link}>
                    <NavLink to={`${url}/cast`}>
                        <button type="button" className={styles.Button}>
                            Cast
                        </button>
                    </NavLink>

                </li>
                <li className={styles.link}>
                    <NavLink to={`${url}/reviews`}>
                        <button type="button" className={styles.Button}>
                            Reviews
                        </button>
                    </NavLink>
                </li>

            </ul>
        </>
    )
}