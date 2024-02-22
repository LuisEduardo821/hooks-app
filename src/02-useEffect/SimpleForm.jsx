import { useState, useEffect } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        })
    };

    useEffect(() => {
        // console.log('useEffect called');
    }, []);

    useEffect(() => {
        // console.log('formState changed');
    }, [formState]);

    useEffect(() => {
        // console.log('email changed');
    }, [email]);


    return (
        <>
            <h2>Formulario Simple</h2>
            <hr />
            <input
                className='form-control'
                placeholder='Username'
                type='text'
                name='username'
                value={username}
                onChange={onInputChange}
                autoComplete='off'
            />
            <input
                className='form-control mt-2'
                placeholder='email@mail.com'
                type='email'
                name='email'
                value={email}
                onChange={onInputChange}
            />
            {
                username === 'luis' && <Message />
            }
        </>
    )
}
