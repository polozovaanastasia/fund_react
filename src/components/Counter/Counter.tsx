import { useState } from "react";

function Counter() {
    const [count, setCount] = useState<number>(0);

    function increment() {
        setCount((count) => count + 1);
    }

    function decrement() {
        setCount((count) => count - 1);
    }
    return (
        <div className="counter">
            <div className="counter__count">{count}</div>
            <div className="counter__buttons">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
}

export default Counter;
