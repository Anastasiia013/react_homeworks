import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz } from '../../redux/questionnaire/questionnaireSlice';

const Result = () => {
    const dispatch = useDispatch();
    const result = useSelector(state => state.questionnaire.result);
    const total = useSelector(state => state.questionnaire.questions.length);

    const handleReset = () => {
        dispatch(resetQuiz());
    };

    const getFeedback = () => {
        if (result === total) return "Идеально! Ты знаешь Redux Toolkit, как свои пять пальцев";
        if (result >= total / 2) return "Неплохо! Но можно и лучше";
        return "Надо бы пересмотреть теорию";
    };

    return (
        <div className='resultBox'>
            <h2>Результат</h2>
            <p>Ты набрал {result} из {total} баллов.</p>
            <p>{getFeedback()}</p>
            <button className='submitAnswers' onClick={handleReset}>Пройти ещё раз</button>
        </div>
    );
};

export default Result;