import PropTypes from 'prop-types';
import styles from './MovieItem.module.css';
import defaultImages from '../../images/defaulte.png';

const MovieItem = ({ title, poster }) => {
    const posterUrl = poster
        ? `https://image.tmdb.org/t/p/w500${poster}`
        : defaultImages;
    return (
        <div className={styles.card}>
            <div className={styles.thumb}>
                <img
                    src={posterUrl}
                    alt={title}
                    title={title}
                    className={styles.poster}                    
                />
            </div>
            <p className={styles.text}>
                <span>{title}</span>
            </p>
        </div>
    )
}
MovieItem.defaultProps = {
  poster: '',
  vote: null,
};

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  vote: PropTypes.number,
};

export default MovieItem;