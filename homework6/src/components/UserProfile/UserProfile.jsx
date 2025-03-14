import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';

import style from './UserProfile.module.css';

const UserProfile = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    async function fetchUser() {
        setLoading(true);

        try {
            const { data } = await axios.get('https://randomuser.me/api')
            setUser(data.results[0]);
            // const [user] = randomUserData.results;
            // setUser(user);

        } catch (error) {
            console.error('Ошибка получения данных:', error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div>
            {loading ? (
                <div className={style.loading}>
                    <p>Loading...</p>
                    <img src="../../25.gif" alt="Loading" />
                </div>
            ) : (
                        <div className={style.userCard}>
                            <img className={style.userImg} src={user.picture.large} alt="User" />
                            <h3>{user.name.first} {user.name.last}</h3>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <button className={style.loadBtn} onClick={fetchUser}>Load New User</button>
                        </div>
            )}
        </div>
    );
}

export default UserProfile;