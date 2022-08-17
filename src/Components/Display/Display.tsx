import React, {useEffect, useState} from 'react';
import s from './Display.module.css'
import Button from "../Button/Button";

const Display = () => {
    const maxCount = 7;
    const minCount = 0;

    const [count, setCount] = useState<number>(minCount);

    useEffect(()=>{
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCount(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count))
    }, [count])

    const onClickHandler = () => {
        setCount(count + 1)
    }

    const onClickResetHandler = () => {
        setCount(minCount);
    }


    const error = count === maxCount

    return (
        <div>
            <div className={error ? s.error : s.displayStyle}>{count}</div>

            <div className={s.buttonsStyleBlock}>
                <Button
                    disabled={error}
                    buttonName={'Inc'}
                    onClickHandler={onClickHandler}/>

                <Button
                    disabled={count === minCount}
                    buttonName={'Reset'}
                    onClickHandler={onClickResetHandler}/>

            </div>
            {error && <span className={s.errorMessage}>Полегче, ковбой!</span>}
        </div>
    );
};

export default Display;