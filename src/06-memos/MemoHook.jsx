import { useState } from "react";
import { useCounter } from "../hooks/useCounter"


export const MemoHook = () => {

    const { counter, increment } = useCounter();
    const [show, setShow] = useState(true);

    return (
        <>
            <h2>Counter: <small>{counter}</small></h2>
            <hr />
            <button
                className='btn btn-primary'
                onClick={() => increment()}>
                +1
            </button>
            <button className="btn btn-outline-primary"
                onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
