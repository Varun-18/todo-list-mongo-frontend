import React from 'react'
import { useDispatch } from 'react-redux'
import { path } from '../constants'
import { logout } from '../store/actions/user.actions'

const useLogout = () => {
    const dispatch = useDispatch()
    
    const userLogout = async () => {
        dispatch(logout({url : path.api.logout}))
    }
    return {userLogout}
}

export default useLogout