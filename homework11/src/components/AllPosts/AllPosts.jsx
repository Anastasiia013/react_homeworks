import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getPosts } from '../../api/posts'

import styles from '../../pages/AllPostsPage/AllPostsPage.module.css'

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const data = await getPosts();
                setPosts(data);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        };
        fetchPosts()
    }, []);

    const elements = posts.map(({ id, title }) => <li key={id}><Link className={styles.postLink} to={`/posts/${id}`}>{title}</Link></li>);

    return (
        <div className={styles.postsList}>
            {loading && <p>Loading...</p>}
            {error && <p className={styles.error}>{error}</p>}
            {elements}
        </div>
    );
}

export default AllPosts;