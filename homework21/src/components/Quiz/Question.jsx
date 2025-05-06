import { useDispatch, useSelector } from 'react-redux';
import { answerToQuestion } from '../../redux/questionnaire/questionnaireSlice';

const Question = ({ question }) => {
    const dispatch = useDispatch();
    const answers = useSelector(state => state.questionnaire.answers);
    const selected = answers.find(a => a.questionId === question.id)?.selectedOptionIndex;

    const handleChange = (selectedIndex) => {
        dispatch(answerToQuestion({ questionId: question.id, selectedOptionIndex: selectedIndex }));
    };

    return (
        <div>
            <h2>{question.question}</h2>
            <form className='formBox'>
                {question.options.map((option, index) => (
                    <div className='questionBox' key={index}>
                        <input
                            type="radio"
                            name={`question-${question.id}`}
                            id={`option-${question.id}-${index}`}
                            checked={selected === index}
                            onChange={() => handleChange(index)}
                        />
                        <label htmlFor={`option-${question.id}-${index}`}>{option.text}</label>
                    </div>
                ))}
            </form>
        </div>
    );
};

export default Question;
