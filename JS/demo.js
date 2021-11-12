const users = [];
window.onload = function () {
  var form = document.getElementById("form1");
  form.addEventListener("click", submit);
};

function submit(e) {
  e.preventDefault();
  var fullName = document.getElementById("fullName");
  var companyName = document.getElementById("companyName");
  var emailAddress = document.getElementById("emailAddress");
  var url = document.getElementById("url");

  fullName.innerHTML = "";
  companyName.innerHTML = "";
  emailAddress.innerHTML = "";
  url.innerHTML = "";

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var company = document.getElementById("company").value;
  var weburl = document.getElementById("weburl").value;

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var urlformat =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

  if (name == "") {
    fullName.innerHTML = `Please enter your full name`;
    fullName.style.color = "red";
  } else {
    var namecheck = true;
  }
  if (email == "" || email.match(mailformat) == null) {
    emailAddress.innerHTML = `Please enter valid email address`;
    emailAddress.style.color = "red";
  } else {
    var emailcheck = true;
  }

  if (company == "") {
    companyName.innerHTML = `Please enter your company name`;
    companyName.style.color = "red";
  } else {
    var companycheck = true;
  }

  if (weburl == "" || weburl.match(urlformat) == null) {
    url.innerHTML = `Please enter a valid web url`;
    url.style.color = "red";
  } else {
    var weburlcheck = true;
  }
  if (
    emailcheck == true &&
    weburlcheck == true &&
    namecheck == true &&
    companycheck == true
  ) {
    save(name, email, company, weburl);
  }
}

function save(name, email, company, weburl, password) {
  var obj = {
    name: name,
    email: email,
    company: company,
    weburl: weburl,
  };
  users.push(obj);
  var users_json = JSON.stringify(users);
  localStorage.setItem("Users", users_json);
  window.location.href = "schedule.html";
}
