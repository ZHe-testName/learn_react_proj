import React from "react";

export default class ClassCounter extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            counter: 0,
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment (){
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    decrement (){
        this.setState({
            counter: this.state.counter - 1,
        });
    }

    render (){
        return (
            <div style={{
                            color: 'tomato', 
                            border: '1px solid tomato',
                            padding: '15px',}}>
                <h3>Class Component</h3>

                <h1>{this.state.counter}</h1>

                <button onClick={this.increment}>increment</button>

                <button onClick={this.decrement}>decrement</button>
            </div>
        );
    }
};