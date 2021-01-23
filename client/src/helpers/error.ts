import swal from 'sweetalert2';

export const triggerError = (message: string) => {
    swal.fire('Ups... algo salió mal', message, 'error');
}