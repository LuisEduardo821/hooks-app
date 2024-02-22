import { useEffect, useState } from "react"


export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y });
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])


    return (
        <>
            <h5 className="text-danger ">Usuario ya existe</h5>
            <h6>{JSON.stringify(coords)}</h6>
        </>
    )
}
