function createUsers(){
  const inputs = document.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/add-user/",{
      method: 'POST',
      body: JSON.stringify({
          id: inputs[4].value,
          name: inputs[5].value,
          surname: inputs[6].value,
          email: inputs[7].value,
          password: inputs[8].value,
          confirm: inputs[9].value,
      }),
      headers: {
          "Content-Type": "application/json; charset=UTF-8",
      },
  })
  .then((response) => response.json())
  .then((json) => {
    alert("User has been created");
    document.getElementById("reg-form").reset();
    window.location.href="./index.html";
  });
}

// SignUp or SignIn Forms
// Login Signup
// accounts login form
function Logins() {
    document.getElementById("Login").style.display = "block";
  }
  
  function closeForms() {
    document.getElementById("Login").style.display = "none";
  }
  
  // accountsRegistration form
  function Register() {
    document.getElementById("Register").style.display = "block";
    document.getElementById("Login").style.display = "none";
  }
  
  function closeForm() {
    document.getElementById("Register").style.display = "none";
  }

