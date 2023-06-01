import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../store/actions/user.actions'
import { path } from '../constants'
import { useState } from 'react'

const useTask = () => {
    const { userData, message } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    let completedList = []
    let [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (todoTask) => {
        console.log(todoTask)
        dispatch(addTask({ url: path.api.addTask, data: todoTask }))
        handleClose()
        reset()
    }

    if (userData.length > 0) {
        console.log(userData);
        completedList = userData[0].todos.filter(item => (item.status === true))
        console.log(completedList, "*************************");
    }

    return { register, handleSubmit, onSubmit, userData, message, open, handleOpen, handleClose, completedList }
}

export default useTask
