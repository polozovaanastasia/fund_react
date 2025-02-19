import React from "react";

type ClassCounterStateType = { count: number };

class ClassCounter extends React.Component<
    Record<string, never>,
    ClassCounterStateType
> {
    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            count: 0,
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    decrement() {
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        return (
            <div className="counter">
                <div className="counter__count">{this.state.count}</div>
                <div className="counter__buttons">
                    <button onClick={() => this.increment()}>Increment</button>
                    <button onClick={() => this.decrement()}>Decrement</button>
                </div>
            </div>
        );
    }
}

export default ClassCounter;
