const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    let validation = confirm_pswd();
    if (validation) {
        alert("Cadastrado com sucesso!");
    }

});

function confirm_pswd () {
    var password = document.getElementById("password").value;
    var conf_password = document.getElementById("confirm_password").value;
    var alert = document.getElementById("alert");

    if (password !== conf_password) {
        alert.style.display="block";
        return false;
    } else {
        alert.style.display="none";
        return true;
    }
}