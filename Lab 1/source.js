class User {
    constructor(uname, email, passwd) {
        this.uname = uname;
        this.email = email;
        this.passwd = passwd;
    }
}

var users = [];

function signup() {
    let form = document.getElementById("signupform");

    let uname = form.elements['txt'].value.toLowerCase();
    var unamere = /^[A-Za-z0-9]+$/;
    if (! unamere.test(uname)) {
        alert("Username should contain only letters and numbers");
        return;
    }

    let email = form.elements['email'].value.toLowerCase();
    var emailre = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (! emailre.test(email)) {
        alert("Invalid Email");
        return;
    }

    let passwd = form.elements['pswd'].value;

    for (let i = 0; i < users.length; i++) {
        if (users[i].uname === uname) {
            alert("Username already registered");
            return;
        } else if (users[i].email === email) {
            alert("Email already in use");
            return;
        } else if (passwd.length < 6) {
            alert("Password should be minimum 6 characters long");
            return;
        }
    }

    users.push(new User(uname, email, passwd));

    document.getElementById("signupform").elements['txt'].value = "";
    document.getElementById("signupform").elements['email'].value = "";
    document.getElementById("signupform").elements['pswd'].value = "";

    alert("User registered successfully");
}


function login() {
    let form = document.getElementById("loginform");
    let email = form.elements['email'].value.toLowerCase();

    let user = new User("", "", "");
    let emailfound = 0;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            user = users[i];
            emailfound = 1;
            break;
        }
    }

    if (emailfound == 0) {
        alert("Email not registered");
        return;
    }

    let passwd = form.elements['pswd'].value;

    window.location = "welcome.html";

    if (user.passwd === passwd) {
        alert("Welcome " + user.uname);
    } else {
        alert("Incorrect password");
    }
}

