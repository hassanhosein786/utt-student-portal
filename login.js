const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        window.location.href = "file:///C:/Users/hassa/OneDrive/Desktop/UTT/Year%201/Semester%202/User%20Interface%20Design/HTML/Project/homepage.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})