import { useState } from "react";
import peopleList from "./peopleList";

import styles from './List.module.css'

const People = () => {
    const [people, setPeople] = useState(peopleList);

    const deletePerson = (id) => {
        setPeople(prevPeople => prevPeople.filter(person => person.id !== id));
    };

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