import React from 'react';
import { withCounter } from './context';

const IncBtn = ({ counter }) => {
    return (
        <button type="button" className="btn btn-primary btn-block" onClick={counter.inc}>+</button>
    )
}

const CounterIncBtn = withCounter(IncBtn)

export default CounterIncBtn;