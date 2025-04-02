import { useEffect, useRef } from 'react'

const ValueDisplay = ({ value }) => {
    const prevValueRef = useRef("");

    useEffect(() => {
        prevValueRef.current = value;
    }, [value]);

    return (
        <div>
            <p>Текущее значение: {value}</p>
            <p>Предыдущее значение: {prevValueRef.current}</p>
        </div>
    )
}

export default ValueDisplay;