import Swal from "sweetalert2";

export const loginSuccessMessage = (name) => {
  Swal.fire({
    icon: "success",
    title: `Welcome ${name || ""}`,
    showConfirmButton: false,
    timer: 2000,
  });
};
