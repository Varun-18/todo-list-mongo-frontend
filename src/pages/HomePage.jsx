import React from 'react'
import { Login } from '../components/Login'
import { Signup } from '../components/Signup'
import { Protected } from '../components/Protected'

import { Routes, Route, Navigate } from 'react-router-dom'
import { TodoList } from '../components/TodoList'

export const HomePage = () => {
    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/todos"
                element={
                    <Protected>
                        <TodoList />
                    </Protected>
                }
            />
            <Route path="/" element={<Navigate replace to={'/login'} />} />
        </Routes>
    )
}
