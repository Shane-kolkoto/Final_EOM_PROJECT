let user = [];


fetch("http://127.0.0.1:5000/show-users/")
    .then((response) =>response.json())
    .then((data) => {
    console.log(data);
    user = data;
});

function login(){
    let inputs = document.getElementsByTagName("input");
    
    let id_no = inputs[1].value;
    let name = inputs[2].value;
    let pswd = inputs[3].value;

    let log = user.filter(user => {
        return user.id == id_no && user.name == name && user.password == pswd ?true : false;
    })

    console.log(log);

    if (log.length > 0) {
        alert("You have successfully logged in");
        window.location.href = "loggedIn.html";
    }else{
        alert("Please enter a valid username and password");
    }
}