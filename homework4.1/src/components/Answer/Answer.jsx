import { useState } from "react";
import "./Answer.css"; // Подключаем стили

const Answer = ({ updatePoints }) => {
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePoints(userInput);
        setUserInput("");
    };

    return (
        <form className="answer-form" onSubmit={handleSubmit}>
            <input
                type="number"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Введите ответ"
            />
            <button type="submit">Проверить</button>
        </form>
    );
};

export default Answer;
