function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (username === "" || password === "") {
    error.textContent = "Please enter both username and password.";
    return;
  }

  // You can set your own name and password for secret login
  if (username === "halesh" && password === "LVU") {
    window.location.href = "cake.html"; // ✅ Redirects after successful login
  } else {
    error.textContent = "Invalid login. Try again!";
  }
}
