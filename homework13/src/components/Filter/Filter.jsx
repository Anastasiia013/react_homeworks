import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions";

import UserList from "../UserList/UserList";

import styles from './Filter.module.css'


const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    const users = useSelector(state => state.users) || []; 

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className={styles.filterBox}>
            <input className={styles.input}
                type="text"
                value={filter}
                onChange={(e) => dispatch(setFilter(e.target.value))}
                placeholder="Filter users"
            />
            <UserList filteredUsers={filteredUsers} />
        </div>
    )
}

export default Filter;