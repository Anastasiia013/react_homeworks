import React, { useContext } from 'react';
import { languageContext } from '../../context/LanguageContext';
import styles from './TextComponent.module.css'

const TextComponent = () => {
    const { language } = useContext(languageContext);

    const paragraphs = {
        English: 'English language was chosen', 
        Deutsch: 'Deutsche Sprache ist gewählt', 
        Russian: 'Выбран русский язык'
    };

    return (
        <h2 className={styles.textBox}>
            {paragraphs[language]}
        </h2>
    )
}
export default TextComponent;