import UserItem from "../UserItem/UserItem";

import styles from './UserList.module.css'

const UserList = ({ filteredUsers }) => {

    const elements = filteredUsers.map(({ id, name, age, email }) => (
        <UserItem key={id} userId={id} name={name} age={age} email={email} />
    ));


    return (
        <div className={styles.listBox}>
            {elements}
        </div>
    );
};

export default UserList;
