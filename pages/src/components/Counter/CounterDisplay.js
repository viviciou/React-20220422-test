import React from 'react';
import { withCounter } from './context';

const Display = ({counter}) => <h5 className="card-title text-center">{counter.value}</h5>

const CounterDisplay = withCounter(Display);

export default CounterDisplay;