import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { path } from '../constants'

import { authToken } from '../store/actions/user.actions'

const useProtected = () => {
    const { login } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const nav = useNavigate()
    const authenticateToken = async() => {
        console.log('in dispathch of authenticateTOken')
        dispatch(authToken({ url: path.api.authenticate }))
    }

    const navigateToHome = () => {
        nav('/login')
    }

    const navigateToTodos = () => {
        nav('/todos')
    }

    return { login, authenticateToken, navigateToHome, navigateToTodos }
}

export default useProtected
