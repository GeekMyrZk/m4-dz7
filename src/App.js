import React, { useMemo, useState, useCallback } from 'react';

const ExampleMemo = () => {
    const [inputValue, setInputValue] = useState('');

    const squaredValue = useMemo(() => {
        console.log('Calculating squared value...');
        return inputValue * inputValue;
    }, [inputValue]);

    return (
        <div>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
            />
            <p>Squared Value: {squaredValue}</p>
        </div>
    );
};

const ExampleCallback = () => {
    const [count, setCount] = useState(0)

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1)
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default function App(){
    return <>
        <ExampleMemo />
        <hr/>
        <ExampleCallback />
    </>
}