
function fun2(){
    document.getElementById('box').style.color = "black";
    document.getElementById('box').style.backgroundColor = "white";
}

function fun1(){
    let x = document.querySelector('#box');
    let ans = x.value.toLowerCase().trim();

    if(ans === 'raftar' || ans === 'raftaar'){
        x.style.backgroundColor = 'green';
        x.style.color = 'white';

        document.querySelector('#box').disabled = true;
        document.querySelector('#butn').disabled = true;

        let permissionValue = 'd';
        for(let i=0;i<9;i++){
            permissionValue += String.fromCharCode(97+Math.floor(Math.random() * 26));
        }
        
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (2 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + expirationDate.toUTCString();

        const cookiesString = document.cookie;
        const cookiesArray = cookiesString.split(";");
      
        const cookiesObject = {};
        for (const cookie of cookiesArray) {
          const [name, value] = cookie.trim().split("=");
          cookiesObject[name] = value;
        }
        
        document.cookie = "permission=" + permissionValue + "; codewalkerztokenhere=" + cookiesObject['codewalkerztokenhere'] + "; "+ expires + "; path=/";

        window.location.href="http://localhost:3000/unfhshdhbmsdfdsh";
    }
    else{
        x.style.backgroundColor = 'red';
        x.style.color = 'white';
    }
}