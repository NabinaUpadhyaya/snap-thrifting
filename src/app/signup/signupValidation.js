function Validation(values) {
    let errors = {};
    //for username
    if (values.Name === "") {
      errors.Name = "(Empty Field)";
    } else if (values.Name && values.Name.trim().length === 0) {
      errors.Name = "(Empty Field)";
    }
  
    // //for username
    // if (values.lastName === "") {
    //   errors.lastName = "(Empty Field)";
    // } else if (values.lastName && values.lastName.trim().length === 0) {
    //   errors.lastName = "(Empty Field)";

    let phone_pattern = /^9\d{9}$/;
    if (values.phoneNumber === "") {
      errors.phoneNumber = "(Empty Field)";
    } else if (values.phoneNumber && values.phoneNumber.trim().length === 0) {
      errors.phoneNumber = "(Empty Field)";
    } else if (!phone_pattern.test(values.phoneNumber)) {
      errors.phoneNumber = "(Invalid Phone Number)";
    }
  
    //for email
    let email_pattern =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (values.email === "") {
      errors.email = "(Empty Field)";
    } else if (values.email && values.email.trim().length === 0) {
      errors.email = "(Empty Field)";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "(Invalid Email)";
    }
  
    return errors;
  }
  
  export default Validation;