import { toast } from "react-toastify";

const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const validateEmail = (value) => {
    return value && value.match(isValidEmail)
}

export const showInfoToast = (message) => {
    toast.info(message, {
        position:"top-right",
        autoClose: 2000,
        hideProgressBar: true
    })
}