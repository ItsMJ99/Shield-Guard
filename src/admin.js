function check() {
    var id = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
    if (id == "admin" && pwd == "admin123") {
        alert('Login Successfull...');
        window.location.href = "../dist/admin-home.html";
        location.reload();
    }
    else {
        alert('Login Failed...');
    }
}

