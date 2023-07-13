export const validateRequiredField = (value, label = "Field") => {
    let error;
    if (!value) {
        error = `The ${label} Field is Required.`;
    }
    return error;
}

export const validateEmail = (value, label="Email") => {
    let error;
    let emailValidRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value && !emailValidRegex.test(value)) {
        error = `The ${label} is Invalid.`;
    }
    return error;
}