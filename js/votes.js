function getvots() {
    fetch("http://127.0.0.1:5000/list-poll/")
    .then((response) => response.json())
    .then((data) => {
        console.table(data);
        let list = document.getElementById('polls');
        console.log(list);
        data.forEach((voting) => {
            let item =`<form method="post">           
            <table class="table">
                <tr>
                    <th style="width: 10%;">Logo</th>
                    <th style="width: 10%;">Name</th>
                    <th style="width: 10%;">Acronym</th>
                    <th style="width: 10%;">Leader</th>
                    <th style="width: 10%;">Selection</th>
                </tr>
              
                    <td class="logo"><img src=${voting.logo}/></td>
                    <td class="name"><h4>${voting.name}</h4></td>
                    <td class="acro" name="short"><h4>${voting.acronym}</h4></td>
                    <td class="leader"><img src=${voting.Leaders}/></td>
                    <td><input type="radio" name="field" value=${voting.acronym}></td>
              
                
            </table>
            </form>
            `;
            list.innerHTML += item;
            });
        });
}
getvots();


let voting = [];


fetch("http://127.0.0.1:5000/list-poll/")
    .then((response) =>response.json())
    .then((data) => {
    console.log(data);
    user = data;
});

function votes(){
    let inputs = document.getElementsByTagName("input");
    
    let vote = inputs[1].value;

    let cast = voting.filter(user => {
        return user.name = vote ?true : false;
    })

    console.log(cast);

    if (log.length > 0) {
        alert("You have successfully Voted");
        window.location.href = "states.html";
    }else{
        alert("Please enter a valid username and password");
    }
}




