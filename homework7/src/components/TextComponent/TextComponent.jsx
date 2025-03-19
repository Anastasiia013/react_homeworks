import React, { useContext } from 'react';
import { languageContext } from '../../context/LanguageContext';
import styles from './TextComponent.module.css'

const TextComponent = () => {
    const { language } = useContext(languageContext);

    const paragraphs = {
        English: 'This is English', 
        Deutsch: 'Das ist Deutsch', 
        Russian: 'Это русский'
    };

    return (
        <div className={styles.textBox}>
            {paragraphs[language]}
        </div>
    )
}
export default TextComponent;