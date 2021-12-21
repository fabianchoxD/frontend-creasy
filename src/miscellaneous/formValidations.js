import Swal from 'sweetalert2'

export function emptyForm() {
    Swal.fire({
        title: 'Warning!',
        text: "Please complete all fields",
        icon: 'warning'
    })
}

export function changeProfile() {
    Swal.fire({
        title: 'Warning!',
        text: "You must make changes to saves",
        icon: 'warning'
    })
}