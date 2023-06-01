import { useEffect } from 'react'
import useProtected from '../talons/useProtected'

export const Protected = ({ children }) => {
    const { login, authenticateToken, navigateToHome, navigateToTodos } =
        useProtected()

    console.log('reached protected here login is', login)

    useEffect(() => {
        if (!login) {
            authenticateToken()
            console.log('here the login is false in the rpotected component')
            if (!login) {
                console.log('the login still false ***************')
                navigateToHome()
            } else {
                navigateToTodos()
            }
        }
    }, [login])

    if (login) {
        return children
    }
}
