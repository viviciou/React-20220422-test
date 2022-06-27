import React from 'react';
import CounterDisplay from './CounterDisplay';
import CounterIncBtn from './CounterIncBtn';
import CounterDecBtn from './CounterDecBtn';

// CounterCard
const CounterCard = () => (
	<div style={{display:'inline-flex',alignItems:'center'}}>
        <CounterDecBtn />
        <div style={{margin:'0 2rem'}}><CounterDisplay/></div>
        <CounterIncBtn />
    </div>
)

export default CounterCard;