import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    onClickHandler: ()=>void
    buttonName: string
    disabled?: boolean
}

const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        {props.onClickHandler()}
    }

    return (
        <div>
            <button disabled={props.disabled} className={s.buttonStyle} onClick={onClickHandler}> {props.buttonName} </button>
        </div>
    );
};

export default Button;
