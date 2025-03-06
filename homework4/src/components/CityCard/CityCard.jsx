import citiesData from "../CitySelector/citiesData";
import styles from './CityCard.module.css'

const CityCard = ({ cityName }) => {
    if (!cityName) return null;

    const city = citiesData.find((c) => c.name === cityName);

    return (
        <div className={styles.cityCard}>
            <h3 className={styles.cityName}>{city.name}</h3>
            <img src={city.imageUrl} alt={city.name} width='400' />
            <p className={styles.cityDesc}>{city.description}</p>
            <ul className={styles.cityFacts}>
                {city.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    );
};

export default CityCard;