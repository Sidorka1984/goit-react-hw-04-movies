import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import api from '../../services/api.js';
import defaultImage from '../../images/defaulte.png';
import styles from './Cast.module.css';
import onError from '../Error';

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    
    useEffect(() => {
        async function onFetchMovies(movieId) {
            try {
                const casts = await api.fetchCast(movieId)
                console.log(casts)

                if (casts.length === 0) {
                    throw new Error()
                }
                setCast(casts)
            } catch (error) {
                onError()
            }
           
        }
         onFetchMovies(movieId)
    }, [movieId])

    return (
        <ul className={styles.list}>
            {cast.map(({ id, profile_path, name, character }) => (
                <li key={id} className={styles.item}>
                    <img
                        className={styles.photo}
                        src={profile_path
                            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                            : defaultImage}
                        alt="actor"
                    />
                    <p className={styles.name}>{name}</p>
                    <p className={styles.character}>{character || 'unknown'}</p>

                </li>
            ))}

        </ul>
    )
}
// import { useState, useEffect } from 'react';
// import { useRouteMatch } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import api from "../../services/api.js";
// import Actor from '../Actor/Actor';
// import Loader from '../Loader/Loader';
// import styles from "./Cast.module.css";
// import { onError } from '../Error.js';
// import { toast } from 'react-hot-toast';

// const Cast = () => {
//     const [actors, setActors] = useState([]);
//     const [isLoading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const match = useRouteMatch();

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         const { movieId } = match.params;
//         setLoading(true);

//         try {
//             const { cast } = await api.FetchCast(movieId);
//             setActors(cast);
//         } catch (error) {
//             toast('Smth wrong with fetch cast on movie page');
//             setError(error);
//         } finally {
//             setLoading(false);
//         }

//     };
//     return (
//         <div>
//             {isLoading && <Loader />}
//             {actors.length > 0 ? (
//                 <ul className={styles.list}>
//                     {actors.map(({ id, profile_path, name, character }) => {
//                         return (
//                             <li key={id} className={styles.item}>
//                                 <Actor photo={profile_path} name={name} character={character} />
//                             </li>
//                         );
//                     })}
//                 </ul>
//             ) : (
//                 <p>There is no information about actors for this movie.</p>
//             )}
//             {error && (
//                 toast.error("The service is temporarily unavailable. Please try again later!")
//             )}
//         </div>
//     )

// };
// Cast.propTypes = {
//   match: PropTypes.object.isRequired,
// };

// export default Cast;

