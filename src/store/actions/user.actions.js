import { createAsyncThunk } from '@reduxjs/toolkit'
import API from "../../api's"

export const addUser = createAsyncThunk(
    'userSlice/adduser',
    async (details, { rejectWithValue }) => {
        try {
            const { data } = await API.post(details)
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response.data)
        }
    }
)

export const userLogin = createAsyncThunk(
    'userSlice/login',
    async (details, { rejectWithValue }) => {
        try {
            const { data } = await API.post(details)
            return data
        } catch (error) {
            return rejectWithValue(error.response.message)
        }
    }
)

export const authToken = createAsyncThunk(
    'userSLice/authenticate',
    async (details, { rejectWithValue }) => {
        try {
            const { data } = await API.get(details)
            return data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(`${error.response.data}`)
        }
    }
)

export const addTask = createAsyncThunk(
    'userSlice/addTask',
    async (details, { rejectWithValue }) => {
        try {
            const { data } = await API.post(details)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const updateTask = createAsyncThunk(
    'userSlice/updateTask',
    async (details, { rejectWithValue }) => {
        try {
            const { data } = await API.put(details)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const deleteTask = createAsyncThunk(
    'userSlice/deleteTask',
    async (details, { rejectWithValue }) => {
        try {
            const { data } = await API.delete(details)
            return data
        } catch (error) {
            return rejectWithValue(error.resposne.data)
        }
    }
)

export const logout = createAsyncThunk('userSlice/logout', async (details) => {
    try {
        const { data } = await API.post(details)
        return data
    } catch (error) {
        console.log(error)
    }
})
