import citiesData from "./citiesData";
import styles from './CitySelector.module.css'

const CitySelector = ({ onChange }) => {

    return (
        <select className={styles.selectBox} onChange={(event) => onChange(event.target.value)}>
            <option className={styles.optionList} value="">Выберите город</option>

            {citiesData.map((city, index) => (
                <option key={index} value={city.name}>
                    {city.name}
                </option>
            ))}
        </select>
    );
}

export default CitySelector;