import { Button ,Stack} from '@mui/material'
import React from 'react'
import useLogout from '../talons/useLogout'
import { AddTodo } from './AddTodo'

export const TodoList = () => {

  const { userLogout} = useLogout()
  return (
    <div>
    <Stack
                display="flex"
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: '0 10px' }}
            >
                <h1>Todo list App</h1>
                <Button variant="contained" onClick={() => userLogout()}>
                    logout
                </Button>
            </Stack>
      <AddTodo />
    </div>
  )
}
