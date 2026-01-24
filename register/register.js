const form = document.querySelector('form');


function saveUser () {

    const newUser = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        user: document.getElementById("user").value,
        gender: document.getElementById("gender").value,
        password: document.getElementById("password").value
    }
    let usersList = JSON.parse(localStorage.getItem('registred_users') || '[]');

    usersList.push(newUser);

    localStorage.setItem('registred_users', JSON.stringify(usersList));

}

function confirm_pswd () {
    let password = document.getElementById("password").value;
    let conf_password = document.getElementById("confirm_password").value;
    let alert = document.getElementById("alert");

    if (password !== conf_password) {
        alert.style.display="block";
        return false;
    } else {
        alert.style.display="none";
        return true;
    }
}

form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    let validation = confirm_pswd();
    if (validation) {
        saveUser()
        alert("Cadastrado com sucesso!");
        window.location.href = "../login/index.html";
    }

});