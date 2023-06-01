import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { path } from '../constants'
import { deleteTask, updateTask } from '../store/actions/user.actions'

const useListing = () => {
    const dispatch = useDispatch()

    const confirmationAlert = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'you want to remove this task',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes..!!',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteTask({ url: `${path.api.deleteTask}/${id}` }))
                Swal.fire('Deleted!', 'Your task has been deleted.', 'success')
            }
        })
    }

    const changeStatus = (e, id) => {
        console.log(e.target.value, id);
        dispatch(updateTask({ url: path.api.updateTask, data: {value :e.target.value , id : id} }))
    }

    return { confirmationAlert, changeStatus }
}

export default useListing
