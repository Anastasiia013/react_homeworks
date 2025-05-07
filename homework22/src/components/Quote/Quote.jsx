import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectSingleQuote } from '../../redux/quote/quoteSelectors';
import { getRandomQuote } from '../../redux/quote/quoteThunx';

import styles from './Quote.module.css'

const Quote = () => {
    const dispatch = useDispatch();

    const { quote, author, error, loading } = useSelector(selectSingleQuote);

    useEffect(() => {
        dispatch(getRandomQuote())
    }, [dispatch]);

    const getNewQuote = () => {
        dispatch(getRandomQuote())
    }

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p className={styles.error}>Error: {error}</p>}
            {!loading && !error && quote && (
                <>
                    <p className={styles.quote}>"{quote}"</p>
                    <p className={styles.author}>– {author}</p>
                </>
            )}
            <button onClick={getNewQuote}>New Quote</button>
        </div>
    )
}

export default Quote;