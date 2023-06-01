import { useEffect } from 'react'
import useLogin from '../talons/useLogin'

// material UI imports

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// CSS

import css from '../assets/css/login.module.css'
import { Typography } from '@mui/material'

export const Login = () => {
    const {
        login,
        register,
        handleSubmit,
        show,
        setShow,
        onSubmit,
        navigateToSignup,
        navigateToTodos,
        authenticateUser,
        errors,
    } = useLogin()

    useEffect(() => {
        if (login) {
            navigateToTodos()
        } else {
            authenticateUser()
        }
    }, [login])
    console.log(login)

    return (
        <div className={css.loginWrapper}>
            <div>
                <form
                    className={css.loginForm}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1>Login</h1>
                    <TextField
                        type="text"
                        className={css.inputs}
                        label="username"
                        {...register('username')}
                        placeholder="username"
                    />
                    <br />
                    <Typography sx={{ color: 'red', m: 1 }}>
                        {errors.username?.message}
                    </Typography>
                    <br />
                    <TextField
                        className={css.inputs}
                        type={show ? 'text' : 'password'}
                        label="password"
                        {...register('password')}
                        placeholder="password"
                    />

                    <br />
                    <br />
                    <div className={css.showPassword}>
                        <input
                            type="checkbox"
                            onChange={() => setShow(!show)}
                        />
                        <span>Show Password</span>
                    </div>
                    <Typography sx={{ color: 'red', m: 1 }}>
                        {errors.password?.message}
                    </Typography>
                    <br />
                    <div className={css.buttonDiv}>
                        <Button type="submit" variant="contained">
                            Login
                        </Button>
                        <Button onClick={() => navigateToSignup()}>
                            create an account ? sign-up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
