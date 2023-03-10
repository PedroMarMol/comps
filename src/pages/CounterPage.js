import { useState, useEffect } from "react";
import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

function CounterPage({ initialCount }) {
    const { count, increment } = useCounter();

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={handleClick}>Increment</Button>
        </div>
    );
}

export default CounterPage;