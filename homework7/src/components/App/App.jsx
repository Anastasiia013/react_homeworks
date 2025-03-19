import LanguageSettingProvider from '../../context/LanguageContext'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import TextComponent from '../TextComponent/TextComponent';
import '../../styles/reset.css'
import '../../styles/styles.css'

function App() {
  const languageData = ['English', 'Deutsch', 'Russian'];

  return (
    <LanguageSettingProvider>
      <TextComponent />
      <LanguageSwitch data={languageData} />
    </LanguageSettingProvider>
  )
}

export default App
