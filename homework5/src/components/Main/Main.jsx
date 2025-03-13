import Apps from '../AppsComponent/Apps';

import styles from './Main.module.css';

const Main = () => {
    return (
        <main className={styles.main}>
            <h1>LIFE IS WASTED ON THE LIVING</h1>
            <p className={styles.mainText}>Sign in with</p>
            <Apps />
        </main>
    )
}

export default Main;