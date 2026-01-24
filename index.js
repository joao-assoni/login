const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const userInput = document.getElementById('user').value; 
    const passwordInput = document.getElementById('password').value;

    const usersList = JSON.parse(localStorage.getItem('registred_users') || '[]');


    const findUser = usersList.find(function(userFunction) {

        const loginOK = (userFunction.user === userInput || userFunction.email === userInput);

        const senhaOK = (userFunction.password === passwordInput);

        return loginOK && senhaOK;
    });


    if (findUser) {
        window.location.href = "../home/home.html";

    } else {
        alert("User or password are incorect!");
        document.getElementById('password').value = "";
    }
});