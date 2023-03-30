
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
        window.location.href="http://localhost:4000/unfhshdhbmsdfdsh";
    }
    else{
        x.style.backgroundColor = 'red';
        x.style.color = 'white';
    }
}