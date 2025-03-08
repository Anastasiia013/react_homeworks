import { useState } from "react";
import Answer from "../Answer/Answer";
import "./MathQuiz.css"; // Подключаем стили

const MathQuiz = () => {
    const [score, setScore] = useState(0);
    const [a, setA] = useState(Math.floor(Math.random() * 10));
    const [b, setB] = useState(Math.floor(Math.random() * 10));

    const updatePoints = (userAnswer) => {
        const correctAnswer = a + b;
        if (parseInt(userAnswer) === correctAnswer) {
            setScore(score + 1);
        } else {
            setScore(score - 1);
        }
        setA(Math.floor(Math.random() * 10));
        setB(Math.floor(Math.random() * 10));
    };

    return (
        <div className="math-quiz-container">
            <h2>Ваши очки: {score}</h2>
            <p>{a} + {b} = ?</p>
            <Answer updatePoints={updatePoints} />
        </div>
    );
};

export default MathQuiz;
