import { useRef } from "react"


export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }
    return (
        <>
            <h3>Focus Screen</h3>
            <hr />
            <input
                ref={inputRef}
                className='form-control'
                type="text"
                placeholder='Ingresa su nombre'
            />
            <button
                className="btn btn-primary mt-2"
                onClick={onClick}>
                Set Focus
            </button>
        </>
    )
}
