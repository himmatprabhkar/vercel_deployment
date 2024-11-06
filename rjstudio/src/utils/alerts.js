import Swal from 'sweetalert2';

export function showSpinner(title, text) {
  Swal.fire({
    title: title,
    html: text,

    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    },
  });
}

export function showMessage(title, text) {
  Swal.fire({
    title: title,
    html: text,
  });
}
