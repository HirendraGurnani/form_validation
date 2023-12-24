var flag = 0;
var age = 0;
document.getElementById("fname").addEventListener("blur", function (event) {
  event.preventDefault();
  if (
    (!event.target.validity.valid && event.target.value.length === 0) ||
    !/^[A-Za-z]+$/.test(event.target.value)
  ) {
    document.getElementById("fname_error").style.display = "block";
  } else {
    document.getElementById("fname_error").style.display = "none";
  }
});

document.getElementById("lname").addEventListener("blur", function (event) {
  event.preventDefault();
  if (
    (!event.target.validity.valid && event.target.value.length === 0) ||
    !/^[A-Za-z]+$/.test(event.target.value)
  ) {
    document.getElementById("lname_error").style.display = "block";
  } else {
    document.getElementById("lname_error").style.display = "none";
  }
});

function age_cal() {
  var dobValue = document.getElementById("dob").value;
  var dobYear = new Date(dobValue).getFullYear();
  var presentYear = new Date().getFullYear();
  var age = presentYear - dobYear;
  document.getElementById("age").innerHTML = "Age:" + age;
  if (age < 18) {
    document.getElementById("dob_error").style.display = "block";
  } else {
    document.getElementById("dob_error").style.display = "none";
  }
}

document.getElementById("dob").addEventListener("blur", function (event) {
  event.preventDefault();
  if (!event.target.validity.valid || event.target.value.length === 0) {
    document.getElementById("no_dob").style.display = "block";
  } else {
    document.getElementById("no_dob").style.display = "none";
  }
});

document.getElementById("contact").addEventListener("blur", function (event) {
  event.preventDefault();
  if (!event.target.validity.valid || event.target.value.length !== 10) {
    document.getElementById("contact_error").style.display = "block";
  } else {
    document.getElementById("contact_error").style.display = "none";
  }
});

document.getElementById("email").addEventListener("blur", function (event) {
  event.preventDefault();
  if (!event.target.validity.valid || event.target.value.length === 0) {
    document.getElementById("email_error").style.display = "block";
  } else {
    document.getElementById("email_error").style.display = "none";
  }
});

document.getElementById("cpass").addEventListener("blur", function (event) {
  event.preventDefault();
  if (
    document.getElementById("pass").value !==
      document.getElementById("cpass").value ||
    document.getElementById("cpass").value.length === 0
  ) {
    document.getElementById("unmatched").style.display = "block";
  } else {
    document.getElementById("unmatched").style.display = "none";
    flag = 1;
  }
});

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  age = document.getElementById("age").innerHTML;
  var userAge = age.split(":")[1];
  console.log(userAge);
  if (flag === 1 && userAge > 18) {
    document.getElementById("form").submit();
  } else {
    document.getElementById("submit_error").style.display = "block";
  }
});
