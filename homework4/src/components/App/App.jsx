import { useState } from "react";
import CitySelector from "../CitySelector/CitySelector";
import CityCard from "../CityCard/CityCard";

import styles from './App.module.css'

function App() {
  const [selectedCity, setSelectedCity] = useState(0);

  function updateCity(newCity) {
    setSelectedCity(newCity);
  }

  return (
    <div className={styles.selectionBox}>
      <h1>Выберите город:</h1>
      <CitySelector onChange={updateCity} />
      <CityCard cityName={selectedCity} />
    </div>
  );
}

export default App;
