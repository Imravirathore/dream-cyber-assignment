const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

// Error

const email_err = document.getElementById("email-err");
const pass_err = document.getElementById("pass-err");


btn.addEventListener('click', validated)



function validated()
{
    // If both are empty

    if (email.value.length == ' ' && password.value.length == ' ') {
        email_err.style.display = "block"
        pass_err.style.display = "block"
    }

    if (email.value.length == ' ' && password.value.length == ' ') {
        email_err.style.display = "block"
        pass_err.style.display = "block"
    }



    // If email is empty

    if (email.value.length == ' ')
    {
        email_err.style.display = "block"
    }
// If password is empty


    if (password.value.length == ' ')
    {
        pass_err.style.display = "block"
    }

    

}






