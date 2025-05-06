import { useSelector, useDispatch } from 'react-redux'
import { submitAnswers } from '../../redux/questionnaire/questionnaireSlice';
import { selectAllQuestions } from '../../redux/questionnaire/questionnaireSelectors';

import Question from './Question';
import Result from './Result';

const Quiz = () => {
    const dispatch = useDispatch();
    const questions = useSelector(selectAllQuestions);
    const result = useSelector(state => state.questionnaire.result);

    const handleSubmit = () => {
        dispatch(submitAnswers());
    };

    return (
        <main>
            <h1>Проверь свои знания!</h1>
            {result === null ? (
                <>
                    {questions.map((question) => (
                        <Question key={question.id} question={question} />
                    ))}
                    <button className='submitAnswers' onClick={handleSubmit}>Показать результат</button>
                </>
            ) : (
                <Result />
            )}
        </main>
    );
};

export default Quiz;