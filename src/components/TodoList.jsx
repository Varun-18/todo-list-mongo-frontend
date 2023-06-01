import { Button } from '@mui/material'
import React from 'react'
import useLogout from '../talons/useLogout'
import { AddTodo } from './AddTodo'

export const TodoList = () => {

  const { userLogout} = useLogout()
  return (
    <div>
      <div>

      <h1>Todo list App</h1>
        <Button onClick={()=>userLogout()}>
          logout
      </Button>
      </div>
      <AddTodo />
    </div>
  )
}
