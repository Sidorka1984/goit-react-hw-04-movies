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

