import Swal from 'sweetalert2'

const baseurl = 'http://localhost:5000'

const api = {
    addUser: `${baseurl}/user/add`,
    userLogin: `${baseurl}/user/login`,
    authenticate: `${baseurl}/user/authenticate`,
    addTask: `${baseurl}/user/addTask`,
    updateTask: `${baseurl}/user/updateTask`,
    deleteTask: `${baseurl}/user/deleteTask`,
    logout: `${baseurl}/user/logout`,
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
})

// Toast.fire({
//     icon: 'success',
//     title: 'Signed in successfully',
// })

export const path = {
    api: api,
}

export { baseurl }
