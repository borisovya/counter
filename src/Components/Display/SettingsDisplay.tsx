import React, { ChangeEventHandler, useEffect, useState} from 'react';
import s from './SetDisplay.module.css'
import Button from "../Button/Button";


type HandlerArgType = { minValue: number, maxValue: number }


type SettingsDisplayType = {
    minValue: number
    maxValue: number
    onSetButtonClickHandler: ({minValue, maxValue}: HandlerArgType) => void

}


const SettingsDisplay = (props: SettingsDisplayType) => {

    const [minValue, setMinValue] = useState(props.minValue)
    const [maxValue, setMaxValue] = useState(props.maxValue)

    const handleSetButtonClick = () => {
        props.onSetButtonClickHandler({minValue, maxValue})
    }

    const handleMinValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        localStorage.setItem('minValue', JSON.stringify(e.currentTarget.valueAsNumber))
        setMinValue(e.currentTarget.valueAsNumber)
    }

    const handleMaxValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        localStorage.setItem('maxValue', JSON.stringify(e.currentTarget.valueAsNumber))
        setMaxValue(e.currentTarget.valueAsNumber)
    }

    useEffect(()=>{
        let minValue = localStorage.getItem('minValue')
        let maxValue = localStorage.getItem('maxValue')
        if (minValue && maxValue) {
            let newMinValue = JSON.parse(minValue)
            let newMaxValue = JSON.parse(maxValue)
            setMinValue(+newMinValue)
            setMaxValue(+newMaxValue)
        }
    }, [])

    const minError = minValue < 0 || minValue === maxValue || minValue > maxValue
    const maxError = minValue === maxValue || maxValue <= 0

    return (
        <div className={s.displayStyle}>
            <div className={s.display}>
                <div className={s.inputBlock}>
                    <div>Set MIN value: </div>
                    <input type='number' value={minValue} onChange={handleMinValueChange} className={minError ? s.error : ''}/>
                    {minError && <div className={s.errorText}>Please set correct MIN value</div>}
                </div>
                <div className={s.inputBlock}>
                    <div>Set MAX value: </div>
                    <input type='number' value={maxValue} onChange={handleMaxValueChange} className={maxError ? s.error : ''}/>
                    {maxError && <div className={s.errorText}>Please set correct MAX value</div>}
                </div>
            </div>
            <div className={s.buttonsBlock}>
                <Button onClickHandler={handleSetButtonClick} buttonName={'SET'} disabled={minError || maxError}/>
            </div>
        </div>
    );
};

export default SettingsDisplay;