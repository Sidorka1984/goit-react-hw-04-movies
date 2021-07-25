import PropTypes from 'prop-types';

import styles from './Actor.module.scss';
import defaultImage from '../../images/defaulte.png';

const Actor = ({ profile_path, name, character }) => {
    const photoUrl = profile_path
        ? `https://image.tmdb.org/t/p/w300${profile_path}`
        : defaultImage;
    return (
        <div>
            <div className={styles.thumb}>
                <img src={photoUrl} className={styles.photo} alt={name} />
            </div>
            <p className={styles.name}>{name}</p>
            <p>
                <span>Character: </span>
                <b>{character}</b>
            </p>
        </div>
    )
};

Actor.dedaultProps = {
  photo: defaultImage,
};

Actor.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default Actor;