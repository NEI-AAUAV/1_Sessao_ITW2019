function testFormValid() {
    var retVal=true;

    //Validar first name
    var fn = document.getElementById("firstname");
    var fn_error = document.getElementById("firstname_error");

    if (fn.value.trim().length < 3) {
        if (fn_error.classList.contains("no-error")) {
            fn_error.classList.remove("no-error");
        } else if (!(fn_error.classList.contains("error"))) {
            fn_error.classList.add("error");
        }
        return false;
    } else {
        if (fn_error.classList.contains("error")) {
            fn_error.classList.remove("error");
        } else if (!(fn_error.classList.contains("no-error"))) {
            fn_error.classList.add("noerror");
        }
    }
    return retVal;
}