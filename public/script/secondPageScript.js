function fun() {
    var a = document.getElementById('answer').value;
    var a2 = a.toUpperCase().trim();
    if (a2 === 'PSYCHOLOGY') {
      
      document.getElementById('answer').style.backgroundColor = "#54B435";
      document.getElementById('answer').style.color = "black";
      document.getElementById('parent').append("Go To This Address : https://www.instagram.com/p/CqYeZC4yBtS/");
      document.getElementById('answer').setAttribute("disabled", "true");
      document.getElementById('button').setAttribute("disabled", "true");
      document.getElementById("parent").scrollIntoView({behavior: 'smooth'});

      let x = 'c';
        for(let i=0;i<9;i++){
          x += String.fromCharCode(97+Math.floor(Math.random() * 26));
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
        
        document.cookie = "permission=" + x + "; codewalkerztokenhere=" + cookiesObject['codewalkerztokenhere'] + "; "+ expires + "; path=/";      
    }
    else {
      document.getElementById('answer').style.backgroundColor = "#FF0303";
      document.getElementById('answer').style.color = "white";
    }
  }
  function func1() {
    document.getElementById("answer").style.backgroundColor = "white";
    document.getElementById("answer").style.color = "black";
  }