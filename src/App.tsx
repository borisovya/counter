import React, {useEffect, useState} from 'react';
import s from './App.module.css'
import Display from './Components/Display/Display';
import SettingsDisplay from "./Components/Display/SettingsDisplay";
import Button from "./Components/Button/Button";


function App() {

    const [maxValue, setMaxValue] = useState<number>(5)
    const [minValue, setMinValue] = useState<number>(0)

    const [value, setValue] = useState<number| string>(0)

    const [isDisabled, setIsDisabled] = useState<boolean>(false)

    useEffect(() => {

        if (minValue && maxValue) {
            setIsDisabled(false)
            setMinValue(+minValue)
            setMaxValue(+maxValue)
        } else {
            setValue('Enter MIN and MAX values and press Set')
            setIsDisabled(true)}
    }, [minValue, maxValue])

     const onClickInc = () => {
        setValue(+value + 1)
    }

    const onClickClear = () => {
        setValue(minValue)
    }


    const onSetButtonClickHandler = ({minValue, maxValue}: { minValue: number, maxValue: number }) => {
        setMaxValue(maxValue)
        setMinValue(minValue)
        setValue(minValue)
    }


    return (
        <div className={s.app}>
            <div className={s.display}>
                <div className={s.displayValue}>
                    <Display value={value} maxValue={maxValue}/>
                </div>
                <div className={s.buttonsBlock}>
                    <Button onClickHandler={onClickInc} buttonName={'Inc'} disabled={value === maxValue || isDisabled}/>
                    <Button onClickHandler={onClickClear} buttonName={'Clear'} disabled={value === minValue || isDisabled}/>
                </div>
            </div>

            <div className={s.display}>
                <div>
                    <SettingsDisplay
                        maxValue={maxValue}
                        minValue={minValue}
                        onSetButtonClickHandler={onSetButtonClickHandler}/>
                </div>


            </div>
        </div>
    );
}

export default App;
