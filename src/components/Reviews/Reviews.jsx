import { useParams } from "react-router";
import { useState, useEffect } from "react";
import api from '../../services/api.js';
import styles from './Reviews.module.css';
import onError from '../Error';
import {Toaster} from 'react-hot-toast'

export default function Reviews() {
    const { movieId } = useParams();
    const [review, setReviews] = useState([]);

    useEffect(() => {
        async function onFetchMovies(movieId) {
            try {
                const reviews = await api.fetchReviews(movieId)
                console.log(reviews)
                if (reviews.length === 0) {
                    throw new Error()
                }
                setReviews(reviews)
            } catch (error) {
                onError()
            }
        }
        onFetchMovies(movieId)
    }, [movieId])

    return (
        <div>
            {review.length > 0 ? (
                <>
                    <ul className={styles.list}>
                        {review && 
                            review.map(({ id, author, content }) => (
                                <li key={id} className={styles.item}>
                                    <p className={styles.authorName}>{author}</p>
                                    <p className={styles.content}>{content}</p>
                                </li>
                        ))}
                    </ul>
                </>
            ) : (
                    <p>No Reviews</p>
            )}
            <Toaster autoClose={4000} position="top-right" />
        </div>
    )

}
// import { useState, useEffect } from "react";
// import { useRouteMatch } from 'react-router-dom';

// import Loader from '../Loader/Loader';
// import api from '../../services/api.js';
// import styles from './Reviews.module.css';

// import { toast } from "react-hot-toast";

// export default function Reviews() {
//     const [review, SetReview] = useState([]);
//     const [isLoading, setLoading] = useState(false);
    
//     const match = useRouteMatch();

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         const { movieId } = match.params;
//         setLoading(true);

//         try {
//             const { results } = await api.fetchReviews(movieId);
//             if (review.length === 0) {
//                 toast.error('Sorry, nothing was found!')
//             }
//             SetReview(results);
//         } catch (error) {
//             toast.error('Smth wrong with fetch reviews on movie page');
         
//         } finally {
//             setLoading(false);
//         }
//     };
//     return (
//         <div>
//             {isLoading && <Loader />}
//             {review.length > 0 ? (
//                 <>
//                     <ul className={styles.list}>
//                         {review && review.map(({ id, author, content }) => (
//                             <li key={id} className={styles.item}>
//                                 <p className={styles.authorName}>{author}</p>
//                                 <p className={styles.content}>{content}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </>
//             ) : (
//                     <p>No Reviews</p>
//             )}
//         </div>
//     )
// }


