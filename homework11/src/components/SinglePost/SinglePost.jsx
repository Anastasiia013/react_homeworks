import { getSinglePostById } from '../../api/posts';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import styles from '../../pages/SinglePostPage/SinglePostPage.module.css'

const SinglePost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const path = useLocation();

    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function goBack() {
        navigate(-1)
    }

    useEffect(() => {
        const fetchSinglePost = async () => {
            try {
                setLoading(true)
                const data = await getSinglePostById(id);
                setPost(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchSinglePost()
    }, []);

    return (
        <>
            <button onClick={goBack} className={styles.backBtn}>Go Back</button>
            {post ? (
                <div className={styles.postBox}>
                    <h1 className={styles.h1}>{post.title}</h1>
                    <p className={styles.postText}>{post.text}</p>
                    <p>Current path: {path.pathname}</p>
                </div>
            ) : (
                <p>Post not found</p>
            )}
        </>
    )
}

export default SinglePost;