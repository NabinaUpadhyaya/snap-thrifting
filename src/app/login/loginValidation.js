function Validation(values) {
    let errors = {};
   
  
    let email_pattern =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
  const email = values.email || ""; // Ensure email is a string
  
  if (email === "") {
    errors.email = "(Empty Field)";
  } else if (email.trim().length === 0) {
    errors.email = "(Empty Field)";  // This will now trigger only for empty or space-only fields
  } else if (!email_pattern.test(email)) {
    errors.email = "(Invalid Email)";
  }
  
    //for password
    let password_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/;
  
    // Validate the password
    if (!values.password || values.password.trim() === "") {
      errors.password = "(Empty Field)";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "(Invalid Password)";
    }
    
  
    return errors;
  }
  
  export default Validation;