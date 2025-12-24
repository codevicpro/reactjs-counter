import { useState } from 'react';
import './Counter.css';

function Counter() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter((prevState) => {
            return prevState + 1;
        });
    };

    const decrementCounter = () => {
        if (counter <= 0) return;

        setCounter((prevState) => {
            return prevState - 1;
        });
    };

    const resetCounter = () => {
        setCounter(0);
    };

    return (
        <div className='project-counter'>
            <div className=''>
                <h3 className='text-white uppercase text-center pb-4 font-bold text-3xl'>
                    Counter
                </h3>
                <div className='flex gap-3 bg-[#202020] text-[#717171] p-2 rounded-full'>
                    <button onClick={decrementCounter}>-</button>
                    <div className='counter'>{counter}</div>
                    <button onClick={incrementCounter}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
