import React, { Component } from 'react';
import { Provider } from './context';

import CounterCard from './CounterCard';


class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: {
                value: 0,
                inc: this.inc,
                dec: this.dec
            }
        }
    }

    inc = () => {
        this.setState(({counter}) => ({
            counter: {
                ...counter,
                value: counter.value+1
            }
        }))
    }

    dec = () => {
        this.setState(({counter}) => ({
            counter: {
                ...counter,
                value: counter.value-1
            }
        }))
    }

    render() {
        // 不過與redux不同的點在context api並沒有dispatch這樣的概念﹐
        // 所以我得將methods透過value一併傳給Consumer﹐
        // 這樣子元件才有辦法呼叫遞增/遞減更新狀態。
        return (
          <Provider value={this.state.counter}>
            <CounterCard />
          </Provider>
        )
    }
}

export default Counter;