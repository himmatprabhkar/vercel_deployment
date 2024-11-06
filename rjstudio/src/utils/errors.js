import Swal from 'sweetalert2';

export function mandatoryValidationError(text) {
  return Swal.fire({
    title: 'Mandatory',
    text: text,
    icon: 'error',
    confirmButtonColor: '#470054',
  });
}
export function validationError(title, text) {
  return Swal.fire({
    title: title,
    text: text,
    icon: 'error',
    confirmButtonColor: '#470054',
  });
}
