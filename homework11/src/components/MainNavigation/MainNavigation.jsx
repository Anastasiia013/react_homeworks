import Homepage from '../../pages/Homepage/Homepage';
import AllPostsPage from '../../pages/AllPostsPage/AllPostsPage';

import { NavLink } from 'react-router-dom';

import styles from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navList}>
                <li><NavLink className={styles.navLink} to='/'>Home</NavLink></li>
                <li><NavLink className={styles.navLink} to='/posts'>All Posts</NavLink></li>
            </ul>
        </nav>
    )
}

export default MainNavigation;