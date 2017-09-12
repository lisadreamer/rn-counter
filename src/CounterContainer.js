/**
 * Created by elizavetaliquidblox on 30/08/17.
 */
import React, { Component } from 'react';
import Counter from './Counter'

class CounterContainer extends Component{
    state = { numCounters: 3 };

    increment = () => {
        this.setState({numCounters: this.state.numCounters + 1})
    }
    decrement = () => {
        this.setState({numCounters: this.state.numCounters - 1})
    }

    renderCounter = (_, index) =>
        <Counter key={index} />;

    renderCounters = () =>
        [...Array(this.state.numCounters)]
            .map(this.renderCounter);

    render(){
        return (
            <div>
                <div style={styles.container}>
                { this.renderCounters() }
                </div>
                <button style={styles.container} onClick={this.increment}>add counter</button>
                <button style={styles.container} onClick={this.decrement}>remove counter</button>
            </div>
        )
    }
}

const styles= {container:  {backgroundColor: 'lightcoral',
                            height: 128,
                            width: 128,
                            textAlign: 'center'}
                            };

export default CounterContainer