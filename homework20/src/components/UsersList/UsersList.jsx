import { useDispatch, useSelector } from 'react-redux';

import { selectAllUsers } from '../../redux/users/usersSelectors';

import styles from './UsersList.module.css'

const UsersList = () => {
    const items = useSelector(selectAllUsers);

    const elements = items.map((item) => <li key={item.id}>{item.name} ({item.email})</li>)

    return (
        <>
            <h1>Users List</h1>
            <ul className={styles.list}>
                {elements}
            </ul>
        </>

    )
}

export default UsersList;