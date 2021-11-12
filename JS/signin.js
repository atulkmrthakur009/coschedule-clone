var email1;
var password1;
window.onload = function () {
  var form = document.getElementById("form1");
  form.addEventListener("click", submit);
  var users = localStorage.getItem("Users");
  users = JSON.parse(users);
  email1 = users[0].email;
  password1 = users[0].password;
  console.log(email1, password1);
};

function submit(e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var errormsg = document.getElementById("errormsg");
  errormsg.innerHTML = "";
  if (email == email1 && password == password1) {
    window.location.href = "schedule.html";
  } else {
    errormsg.innerHTML = "Incorrect email or password";
  }
}
