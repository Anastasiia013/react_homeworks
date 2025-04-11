import { useSelector } from "react-redux";
import styles from './User.module.css'

const User = () => {
    const name = useSelector((state) => state.name);
    const status = useSelector((state) => state.status);

    return (
        <div className={styles.userBox}>
            <h2>User Information</h2>
            <p>Name: {name}</p>
            <p>Status: {status} </p>
        </div>
    )
}

export default User;