import React, { useContext } from 'react';
import { languageContext } from '../../context/LanguageContext';
import styles from './LanguageSwitch.module.css'

const LanguageSwitch = ({ data }) => {
    const { language, changeLanguage } = useContext(languageContext);

    function handleLanguage(e) {
        changeLanguage(e.target.value);
    }

    const elements = data.map(lang => <option key={lang} value={lang}>{lang}</option>)
    
    return (
        <select className={styles.select} value={language} onChange={handleLanguage}>
            {elements}
        </select>
    )
}

export default LanguageSwitch;