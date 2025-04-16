import { useCallback, useMemo, useState } from 'react';

import styles from './UserList.module.css'

const UserList = ({ users }) => {
    const [filter, setFilter] = useState('');

    const filterUsers = useCallback((filterText, users) => {
        const filteredUsers = users.filter(({ name }) => name.toLowerCase().includes(filterText.toLowerCase()))
        return filteredUsers;
    }, []);

    const memorizedResult = useMemo(() => filterUsers(filter, users), [filter, filterUsers])

    return (
        <div className={styles.userList}>
            <h2>User List</h2>
            <input
                type="text"
                placeholder="Filter by name"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul>
                {memorizedResult.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;