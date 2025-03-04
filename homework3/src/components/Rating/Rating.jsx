import ratingList from "./ratingList";
import { useState } from "react";

import './Rating.css'

const Rating = () => {
    const [ratingValue, setRatingValue] = useState(0);
    return (
        <div className="rating-box">
            <h2>Ваша оценка:</h2>
            <div className="ratingImg">
                <img src={ratingList[ratingValue]} alt={`${ratingValue} Rating`} />
            </div>
            <div className="rating-box-buttons">
                <button onClick={() => setRatingValue(0)}>Без оценки</button>
                <button onClick={() => setRatingValue(1)}>Плохо</button>
                <button onClick={() => setRatingValue(2)}>Приемлемо</button>
                <button onClick={() => setRatingValue(3)}>Хорошо</button>
                <button onClick={() => setRatingValue(4)}>Отлично</button>
                <button onClick={() => setRatingValue(5)}>Супер</button>
            </div>
        </div>
    )
}

export default Rating;