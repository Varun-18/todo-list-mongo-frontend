import { createSlice } from '@reduxjs/toolkit'
import {
    addTask,
    addUser,
    authToken,
    deleteTask,
    logout,
    updateTask,
    userLogin,
} from '../actions/user.actions'

const state = {
    userData: [],
    message: null,
    loading: false,
    login: false,
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState: state,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addUser.pending, (state, action) => {
                return { ...state, loading: true }
            })
            .addCase(addUser.fulfilled, (state, action) => {
                return { ...state, message: action.payload, loading: false }
            })
            .addCase(addUser.rejected, (state, action) => {
                return { ...state, message: action.payload, loading: false }
            })
            .addCase(userLogin.pending, (state, action) => {
                return { ...state, loading: true }
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                console.log(action.payload)
                return {
                    ...state,
                    loading: false,
                    message: 'user login successfull',
                    login: true,
                    userData: action.payload,
                }
            })
            .addCase(userLogin.rejected, (state, action) => {
                return {
                    ...state,
                    loading: false,
                    message: 'userlogin failure',
                }
            })
            .addCase(authToken.pending, (state, action) => {
                console.log(
                    action.payload,
                    'in the pending stage of auth token'
                )
            })
            .addCase(authToken.fulfilled, (state, action) => {
                return { ...state, login: true, userData: action.payload }
            })
            .addCase(authToken.rejected, (state, action) => {
                console.log(
                    action.payload,
                    'this is from the auth user rejected state'
                )
            })
            .addCase(addTask.pending, (state, action) => {})
            .addCase(addTask.fulfilled, (state, action) => {
                return { ...state, userData: action.payload }
            })
            .addCase(addTask.rejected, (state, action) => {
                return { ...state, message: action.payload }
            })
            .addCase(updateTask.pending, (state, action) => {
                console.log('in the pending state of update task')
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                return { ...state, userData: action.payload }
            })
            .addCase(updateTask.rejected, (state, action) => {
                console.log(
                    action.payload,
                    'from the updateTask rejected phase'
                )
            })
            .addCase(deleteTask.pending, (state, action) => {
                console.log('delete task is in the pending state')
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                return { ...state, userData: action.payload }
            })
            .addCase(deleteTask.rejected, (state, action) => {
                return { ...state, message: action.payload } // check for re renders
            })
            .addCase(logout.fulfilled, (state, action) => {
                return { ...state, login: action.payload }
            })
    },
})

export default userSlice.reducer
