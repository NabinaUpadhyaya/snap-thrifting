function Validation(values) {
    let errors = {};
   
  
    let email_pattern =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
  const email = values.email || ""; 
  
  if (email === "") {
    errors.email = "(Empty Field)";
  } else if (email.trim().length === 0) {
    errors.email = "(Empty Field)";  
  } else if (!email_pattern.test(email)) {
    errors.email = "(Invalid Email)";
  }
  
    let password_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/;
  
    if (!values.password || values.password.trim() === "") {
      errors.password = "(Empty Field)";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "(Invalid Password)";
    }
    
  
    return errors;
  }
  
  export default Validation;