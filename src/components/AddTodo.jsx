import useTask from '../talons/useTask'
import { Listing } from './Listing'

// MUI imports

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { TextField } from '@mui/material'

import css from '../assets/css/todolist.module.css'
import { CompletedTask } from './CompletedTask'

export const AddTodo = () => {
    const {
        register,
        handleSubmit,
        onSubmit,
        userData,
        message,
        open,
        handleOpen,
        handleClose,
        completedList,
    } = useTask()
    console.log(userData)
    return (
        <>
            <Button variant="outlined" onClick={handleOpen}>
                Add task
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {'Add a task..!!'}
                </DialogTitle>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                        <TextField
                            type="text"
                            label="Title"
                            {...register('title')}
                            placeholder="title"
                        />
                        <br />
                        <br />
                        <TextField
                            type="text"
                            label="description"
                            {...register('task')}
                            placeholder="task"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                        <Button type="submit" variant="contained">
                            Add
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>

            <div className={css.taskContainer}>
                <div className={css.taskContainerdiv}>
                    <h2 style={{ textAlign: 'center' }}>Completed tasks</h2>
                    {completedList.length > 0 ? (
                        <div className={css.taskHolder}>
                            {completedList.map((item) => (
                                <CompletedTask item={item} key={item._id} />
                            ))}
                        </div>
                    ) : (
                        <div>no task completed yet</div>
                    )}
                </div>
                <div className={css.taskContainerdiv}>
                    <h2 style={{ textAlign: 'center' }}>Pending tasks</h2>
                    {userData.length > 0 ? (
                        <div className={css.taskHolder}>
                            {userData[0].todos.map((item) => (
                                <Listing item={item} key={item._id} />
                            ))}
                        </div>
                    ) : (
                        <div>no task added yet</div>
                    )}
                </div>
            </div>
        </>
    )
}

// working form

{
    /* <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('title')} placeholder="title" />
                <br />
                <input type="text" {...register('task')} placeholder="task" />
                <br />
                <input type="submit" />
            </form> */
}
