import { useState } from "react";

import styles from './List.module.css'

const People = () => {
    const [people, setPeople] = useState([

        { id: 1, name: 'Иван', age: 20 },

        { id: 2, name: 'Мария', age: 22 },

        { id: 3, name: 'Алексей', age: 21 },

        { id: 4, name: 'Марина', age: 19 },

        { id: 5, name: 'Даша', age: 23 },

        { id: 6, name: 'Глеб', age: 24 },

        { id: 7, name: 'Дима', age: 18 },

        { id: 8, name: 'Гриша', age: 20 },

        { id: 9, name: 'Серафим', age: 21 }

    ]);

    const deletePerson = (id) => {
        setPeople(people.filter(person => person.id !== id))
    }

    return (
        <div className={styles.listBox}>
            <h2>Список приглашенных:</h2>
            <ol className={styles.listPeople}>
                {people.map((person) => (
                    <li key={person.id}>
                        <div className={styles.liBox}>
                            <div className={styles.personInfo}>
                                {person.name} ({person.age} лет)
                            </div>
                            <button className={styles.buttonBox} onClick={() => deletePerson(person.id)}>Удалить</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );

}
export default People;