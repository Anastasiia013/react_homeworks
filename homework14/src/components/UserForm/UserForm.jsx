import { useState } from "react";
import { useDispatch } from "react-redux";

import { setUserInfo } from "../../redux/actions";

import styles from './UserForm.module.css'

const UserForm = () => {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const dispatch = useDispatch();

    const [errors, setErrors] = useState({ name: "", status: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        dispatch(setUserInfo(name, status));
        setName("");
        setStatus("");
        setErrors({ name: "", status: "" });
    };

    const validate = () => {
        let valid = true;
        let errors = { name: "", status: "" };

        if (name.trim().length < 2) {
            errors.name = "Имя должно содержать минимум 2 символа";
            valid = false;
        }
        if (!status.trim()) {
            errors.status = "Статус не может быть пустым";
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    return (
        <div className={styles.userFormBox}>
            <h2>Edit User Information</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.userFormField}>
                    <p>Name:</p>
                    <input type="text" name="editUserName" id="editUserName" placeholder="User Name" onChange={(e) => setName(e.target.value)} value={name} required />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>
                <div className={styles.userFormField}>
                    <p>Status:</p>
                    <input type="text" name="editUserStatus" id="editUserStatus" placeholder="User Status" onChange={(e) => setStatus(e.target.value)} value={status} required />
                    {errors.status && <span className={styles.error}>{errors.status}</span>}
                </div>
                <button className={styles.btn} type="submit">Обновить</button>
            </form>
        </div>
    )
}

export default UserForm;