$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    e.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let confirmPassword = $("#confirmPassword").val();

    $(".error").text("");

    if (name === "") {
      $("#nameError").text("Please enter your name");
    }

    if (email === "") {
      $("#emailError").text("Please enter your email");
    }

    if (password === "") {
      $("#passwordError").text("Please enter password");
    }

    if (confirmPassword === "") {
      $("#confirmPasswordError").text("Please re-enter your password");
    } else if (password !== confirmPassword) {
      $("#confirmPasswordError").text("Password do not match");
    }

    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      $("#nameError").text("");
      $("#emailError").text("");
      $("#passwordError").text("");
      $("#confirmPasswordError").text("");
      alert("Form submitted successfully");
      $("#name").val("");
      $("#email").val("");
      $("#password").val("");
      $("#confirmPassword").val("");
    }
  });
});
