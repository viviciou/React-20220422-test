import React from 'react';
import { withCounter } from './context';

const IncBtn = ({ counter }) => {
    return (
        <button type="button" className="btn btn-primary btn-block" onClick={counter.dec}>-</button>
    )
}

const CounterDecBtn = withCounter(IncBtn)

export default CounterDecBtn;