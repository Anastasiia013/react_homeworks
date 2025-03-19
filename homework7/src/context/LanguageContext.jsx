import { createContext } from "react";
import { useState } from "react";

export const languageContext = createContext();

const LanguageSettingProvider = ({ children }) => {
    const [language, setLanguage] = useState('English');

    function changeLanguage(newLanguage){
        setLanguage(newLanguage)
    }
    return (
        <languageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </languageContext.Provider>
    )
}

export default LanguageSettingProvider;

