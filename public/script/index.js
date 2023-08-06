const myForm = document.getElementById('form');

myForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    let teamId = document.getElementById('teamId').value;
    let teamName = document.getElementById('teamName').value;

    const dataToSend = {
        teamName: teamName,
        teamId:teamId
    };

    const url = '/yrtbsdf6529m7hdsfjh'

    const other_params = {
        headers : { "content-type" : "application/json; charset=UTF-8" },
        body : JSON.stringify(dataToSend),
        method : "POST",
    };
    async function apiCall(){
        let res = await fetch(url,other_params);
        console.log(res);
        
        if(res.status === 200)
            window.location.href='http://localhost:3000/ufhsnvrjroxm934';
        else if(res.status === 401)
            alert("Invalid Team Id, Please enter valid Team Id.");
        else if(res.status === 403)
            alert("You are already loggedIn in other device.")
        else
            alert("An error occurred. Please try again later.");

        return;
 
    }
    apiCall();
   
  });

let i = 0;
let txt = `Have you got any Team IDs 😕? No need to worry. Play the game using this demo ID and rock it! 🤘`;
let txt2 = `RIDDLES`;
let speed = 50;
let b = 0;

function typeWriter() {
    if(b === 0){
        document.getElementById("demoIdBox").style.padding = "7px";
        b = 1;
    }
    if(b === 2)
        return;

    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else{
        i = 0;
        demoId();
    }
}

function demoId() {
    if (i < txt2.length) {
        document.getElementById("demoId").innerHTML += txt2.charAt(i);
        i++;
        setTimeout(demoId, speed);
    }
    else
        b = 2;
}