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