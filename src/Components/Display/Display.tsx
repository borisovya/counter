import React from 'react';
import s from './Display.module.css'

type DisplayType = {
    value: number | string
    maxValue: number
}

const Display = (props: DisplayType) => {


    return (
        <div className={props.value===props.maxValue ? s.error : ''}>
            {props.value}
        </div>
    );
};

export default Display;