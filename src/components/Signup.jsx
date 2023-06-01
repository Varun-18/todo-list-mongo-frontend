import React, { useEffect } from 'react'
import useSignup from '../talons/useSignup'

// material UI imports

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import css from '../assets/css/signup.module.css'
import { Typography } from '@mui/material'

export const Signup = () => {
    const {
        login,
        show,
        setShow,
        register,
        handleSubmit,
        onSubmit,
        loading,
        message,
        navigateToLogin,
        navigateToTodos,
        authenticateUser,
        errors,
    } = useSignup()

    useEffect(() => {
        if (login) {
            navigateToTodos()
        } else {
            authenticateUser()
        }
    }, [login])

    return (
        <div className={css.signupWrapper}>
            <div className={css.signupForm}>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Signup</h1>
                    <TextField
                        className={css.inputs}
                        type="text"
                        label="Name"
                        {...register('name')}
                    />
                    <br />
                    <Typography sx={{ color: 'red', m: 1 }}>
                        {errors.name?.message}
                    </Typography>
                    <br />
                    <TextField
                        className={css.inputs}
                        type="text"
                        label="Username"
                        {...register('username')}
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
                            Signup
                        </Button>
                        <Button onClick={() => navigateToLogin()}>
                            already hav an account ? Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
