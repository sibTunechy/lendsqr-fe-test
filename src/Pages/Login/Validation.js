const Validation = (values) => {
    let errors = {} 

    if(!values.email) {
        errors.email = "Email Required"
    }
    else if(values.name.length < 6 ) {
        errors.email = "Check your Email "
    }

    if(!values.password) {
        errors.password = "Password Required"
    } else if (values.password.length < 7 ) {
        errors.password = "Password must be more than 7"
    }

    return errors;
}

export default Validation;