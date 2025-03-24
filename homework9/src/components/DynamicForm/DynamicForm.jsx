import styles from './DynamicForm.module.css';
import { useForm } from "react-hook-form";
import { useId } from 'react';

const DynamicForm = () => {
    const { register, watch, handleSubmit, reset, formState: { errors } } = useForm();
    const firstFieldId = useId();
    const secondFieldId = useId();

    const onSubmit = (values) => {
        console.log(values);
        reset();
    };

    const first = watch('first');

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.field}>
                <label className={styles.label} htmlFor={firstFieldId}>First Field</label>
                <input {...register('first', { required: "First Field is required", minLength: { value: 5, message: "Minimum 5 characters required" } })} type="text" id={firstFieldId} placeholder='First' className={styles.input} />

                {errors.first && <p style={{ color: 'red' }}>{errors.first.message}</p>}
            </div>

            {(first && first.length >= 5) && (
                <div className={styles.field}>
                    <label className={styles.label} htmlFor={secondFieldId}>Second Field</label>
                    <input {...register('second', { required: "Second Field is required" })} type="text" id={secondFieldId} placeholder='Second' className={styles.input} />

                    {errors.second && <p style={{ color: 'red' }}>{errors.second.message}</p>}
                </div>
            )}
            <button className={styles.btn} type='submit'>Submit</button>
        </form>
    )
}

export default DynamicForm;