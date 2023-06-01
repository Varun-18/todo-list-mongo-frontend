import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { path } from '../constants'
import { userLogin, authToken } from '../store/actions/user.actions'
import { Navigate, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../yupSchema'

const useLogin = () => {
    const { login } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors}, reset } = useForm({ resolver : yupResolver(loginSchema)})
    const nav = useNavigate()
    let loginMemo = useMemo(() => {
        return login
    }, [login])
    let [show, setShow] = useState(false)

    const onSubmit = (details) => {
        dispatch(userLogin({ url: path.api.userLogin, data: details }))
        reset()
    }

    const navigateToSignup = () => {
        nav('/signup')
    }

    const authenticateUser = async () => {
        dispatch(authToken({ url: path.api.authenticate }))
    }

    const navigateToTodos = () => {
        nav('/todos')
    }

    return {
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
    }
}

export default useLogin
