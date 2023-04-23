function check() {
    var id = document.getElementById("userid").value;
    var pwd = document.getElementById("userpwd").value;
    if (id == "admin" && pwd == "admin123") {
        alert('Login Successfull...');
        window.location = 'admin-home.html';
    }
    else {
        alert('Login Failed...');
    }
}
