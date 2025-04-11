import { useState } from "react";
import { useDispatch } from "react-redux";

import { setUserInfo } from "../../redux/actions";

import styles from './UserForm.module.css'

const UserForm = () => {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUserInfo(name, status));
        setName("");
        setStatus("");
    };

    return (
        <div className={styles.userFormBox}>
            <h2>Edit User Information</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.userFormField}>
                    <p>Name:</p>
                    <input type="text" name="editUserName" id="editUserName" placeholder="User Name" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className={styles.userFormField}>
                    <p>Status:</p>
                    <input type="text" name="editUserStatus" id="editUserStatus" placeholder="User Status" onChange={(e) => setStatus(e.target.value)} value={status} />
                </div>
                <button className={styles.btn} type="submit">Обновить</button>
            </form>
        </div>
    )
}

export default UserForm;