import React from 'react'
import useListing from '../talons/useListing'

// MUI imports

import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import css from '../assets/css/todolist.module.css'

export const CompletedTask = ({ item }) => {
    const { confirmationAlert, changeStatus } = useListing()
    return (
        <div className={css.task}>
            <ul className={css.taskList}>
                <li>
                    <h4>Title : {item.title}</h4>
                    {/* <span>{item.title}</span> */}
                </li>
                <li>
                    <h4>Task description</h4>
                    <p>{item.description}</p>
                </li>
            </ul>
            <div className={css.taskAction}>
                <Select
                    name="status"
                    id="status"
                    defaultValue={item.status}
                    sx={{
                        height: '40px',
                        border: item.status
                            ? '1px solid green'
                            : '1px solid red',
                    }}
                    onChange={(event) => changeStatus(event, item._id)}
                >
                    <MenuItem value={true}>completed</MenuItem>
                    <MenuItem value={false}>pending</MenuItem>
                </Select>
                <Button
                    sx={{ height: '40px' }}
                    variant="contained"
                    onClick={() => confirmationAlert(item._id)}
                >
                    delete task
                </Button>
            </div>
        </div>
    )
}