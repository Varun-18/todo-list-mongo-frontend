import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { addUser, authToken } from '../store/actions/user.actions'
import { path } from '../constants'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { signupSchema } from '../yupSchema'

const useSignup = () => {
    const { loading, message, login } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: yupResolver(signupSchema) })
    const nav = useNavigate()
    let [show, setShow] = useState(false)

    const onSubmit = (details) => {
        dispatch(addUser({ url: path.api.addUser, data: details }))
        reset()
    }

    const navigateToLogin = () => {
        nav('/login')
    }

    const navigateToTodos = () => {
        nav('/todos')
    }

    const authenticateUser = async () => {
        dispatch(authToken({ url: path.api.authenticate }))
    }

    return {
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
    }
}

export default useSignup
