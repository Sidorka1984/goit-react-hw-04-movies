import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import styles from './MovieList.module.css';
import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({ movies, location }) => {
    return (
        <ul className={styles.list}>
            {movies.map(({ id, title, poster_path, vote_average }) => (
                <li key={id} className={styles.item}>
                    <Link className={styles.link} to={{
                        pathname: `/movies/${id}`,
                        state: {
                            from: location,
                        },
                    }}
                    >
                        <MovieItem
                            title={title}                            
                            poster={poster_path}
                            vote={vote_average}
                        />

                    </Link>
                </li>
            ))}
        </ul>
    )
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }),
  ),
 
};

export default MovieList;