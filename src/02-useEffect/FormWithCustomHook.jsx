
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const { onInputChange, username, password, email, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });
    // const { username, email, password } = formState;

    return (
        <>
            <h2>Formulario Con Custom Hook</h2>
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
            <input
                className='form-control mt-2'
                placeholder='contraseña'
                type='password'
                name='password'
                value={password}
                onChange={onInputChange}
            />
            <button
                className='btn btn-primary mt-2'
                onClick={onResetForm}
            >
                Limpiar Formulario
            </button>

        </>
    )
}
