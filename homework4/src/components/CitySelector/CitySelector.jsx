import citiesData from "./citiesData";
import styles from './CitySelector.module.css'

const CitySelector = ({ onChange }) => {

    return (
        <select id="citySelect" className={styles.selectBox} onChange={(event) => onChange(event.target.value)}>
            <option value="">Выберите город</option>

            {citiesData.length > 0 ? (
                citiesData.map((city, index) => (
                    city.name ? <option key={index} value={city.name}>{city.name}</option> : null
                ))
            ) : (
                <option disabled>Нет доступных городов</option>
            )}
        </select>
    );
}

export default CitySelector;