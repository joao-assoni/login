const form = document.querySelector('form');

class User {
    constructor(name,email,user,gender,password) {
        this.name=name;
        this.email=email;
        this.user=user;
        this.gender=gender;
        this.password=password;
    }
}

class UserManeger {
    constructor() {
        this.storageKey = 'registred_users';
    }

    getUsers() {
        return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    }

    save(userObj) {
        const usersList = this.getUsers();
        usersList.push(userObj);
        localStorage.setItem(this.storageKey, JSON.stringify(usersList));
    }
}

function saveUser() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const user = document.getElementById("user").value;
    const gender = document.getElementById("gender").value;
    const password = document.getElementById("password").value;

    const newUser = new User(name, email, user, gender, password);

    const maneger = new UserManeger();
    maneger.save(newUser);

}

function confirm_pswd () {
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    let alert = document.getElementById("alert");

    if (password !== confirm_password) {
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
        window.location.href = "../index.html";
    }

});