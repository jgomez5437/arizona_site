function check_email() {
    let email_input = document.getElementById('email').value;
    let confirm_email_input = document.getElementById('confirmemail').value;
    let error_message = document.getElementById('error_msg');    

    if (email_input === confirm_email_input) {
        error_message.innerHTML = "Emails Match";
    }
    else if (email_input !== confirm_email_input) {
        alert("Emails Do Not Match")
    }
}