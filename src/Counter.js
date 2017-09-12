/**
 * Created by elizavetaliquidblox on 29/08/17.
 */
import React, { Component } from 'react';

class Counter extends React.Component{
    state = {value:0};

    componentDidMount() {
        this.timer = setInterval(this.increment,1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    increment = () => {
        this.setState({value: this.state.value + 1})
    }

    decrement = () => {
        this.setState({value: this.state.value - 1})
    }

    render(){
        return (
            <div>
                <div>{this.state.value}</div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Counter;
/**
 * Created by elizavetaliquidblox on 29/08/17.
 */

