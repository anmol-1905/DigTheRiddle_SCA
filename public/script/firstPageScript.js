function funcq1() {
    let str = "";
    str+= document.getElementById("q1b1").value.toLowerCase();
    str+= document.getElementById("q1b2").value.toLowerCase();
    str+=  document.getElementById("q1b3").value.toLowerCase();
    str+=  document.getElementById("q1b4").value.toLowerCase();
    str+=  document.getElementById("q1b5").value.toLowerCase();
    str+=  document.getElementById("q1b6").value.toLowerCase();
    str+=  document.getElementById("q1b7").value.toLowerCase();
    str+=  document.getElementById("q1b8").value.toLowerCase();
    str+=  document.getElementById("q1b9").value.toLowerCase();
    if(str==="sunflower") {
      document.querySelectorAll('.first').forEach(ele=>{
        ele.style.backgroundColor='blue';
        ele.style.color='white';
        ele.style.border='none';
      });
      document.getElementById("a4b1").value = 'S';
      document.getElementById("q1b1").setAttribute('disabled', 'true');
      document.getElementById("q1b2").setAttribute('disabled', 'true');
      document.getElementById("q1b3").setAttribute('disabled', 'true');
      document.getElementById("q1b4").setAttribute('disabled', 'true');
      document.getElementById("q1b5").setAttribute('disabled', 'true');
      document.getElementById("q1b6").setAttribute('disabled', 'true');
      document.getElementById("q1b7").setAttribute('disabled', 'true');
      document.getElementById("q1b8").setAttribute('disabled', 'true');
      document.getElementById("q1b9").setAttribute('disabled', 'true');
      document.getElementById("a4b1").style.backgroundColor="#663dff";
      document.getElementById("a4b1").style.backgroundImage= "linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%)";
      document.getElementById("a4b1").style.color="white";
      document.getElementById("a4b1").style.border="none";
      
      func4();
//         background-color: #663dff;
// background-image: linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%);

      window.scrollTo(0, 0);  
    }
  } 
  function funcq2() {
    let str = "";
    str+= document.getElementById("q2b1").value.toLowerCase();
    str+= document.getElementById("q2b2").value.toLowerCase();
    str+= document.getElementById("q2b3").value.toLowerCase();
    str+= document.getElementById("q2b4").value.toLowerCase();
    str+= document.getElementById("q2b5").value.toLowerCase();
    str+= document.getElementById("q2b6").value.toLowerCase();
    str+= document.getElementById("q2b7").value.toLowerCase();
    str+= document.getElementById("q2b8").value.toLowerCase();
    str+= document.getElementById("q2b9").value.toLowerCase();
    str+= document.getElementById("q2b10").value.toLowerCase();
    if(str==="cinderella") {
      document.querySelectorAll('.second').forEach(ele=>{
        ele.style.backgroundColor='blue';
        ele.style.color='white';
        ele.style.border='none';
      });
      document.getElementById("a4b2").value = 'C';
      document.getElementById("q2b1").setAttribute('disabled', 'true');
      document.getElementById("q2b2").setAttribute('disabled', 'true');
      document.getElementById("q2b3").setAttribute('disabled', 'true');
      document.getElementById("q2b4").setAttribute('disabled', 'true');
      document.getElementById("q2b5").setAttribute('disabled', 'true');
      document.getElementById("q2b6").setAttribute('disabled', 'true');
      document.getElementById("q2b7").setAttribute('disabled', 'true');
      document.getElementById("q2b8").setAttribute('disabled', 'true');
      document.getElementById("q2b9").setAttribute('disabled', 'true');
      document.getElementById("q2b10").setAttribute('disabled', 'true');
      document.getElementById("a4b2").style.backgroundColor="#663dff";
      document.getElementById("a4b2").style.backgroundImage= "linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%)";
      document.getElementById("a4b2").style.color="white";
      document.getElementById("a4b2").style.border="none";
      window.scrollTo(0, 0);
      func4();
    }
  }
  function funcq3() {
    let str = "";
    str+= document.getElementById("q3b1").value.toLowerCase();
    str+= document.getElementById("q3b2").value.toLowerCase();
    str+=  document.getElementById("q3b3").value.toLowerCase();
    str+=  document.getElementById("q3b4").value.toLowerCase();
    str+=  document.getElementById("q3b5").value.toLowerCase();
    str+=  document.getElementById("q3b6").value.toLowerCase();
    str+=  document.getElementById("q3b7").value.toLowerCase();
    str+=  document.getElementById("q3b8").value.toLowerCase();
    str+=  document.getElementById("q3b9").value.toLowerCase();
    if(str==="australia") {
      document.querySelectorAll('.third').forEach(ele=>{
        ele.style.backgroundColor='blue';
        ele.style.color='white';
        ele.style.border='none';
      });
      document.getElementById("a4b3").value = 'A';
      document.getElementById("q3b1").setAttribute('disabled', 'true');
      document.getElementById("q3b2").setAttribute('disabled', 'true');
      document.getElementById("q3b3").setAttribute('disabled', 'true');
      document.getElementById("q3b4").setAttribute('disabled', 'true');
      document.getElementById("q3b5").setAttribute('disabled', 'true');
      document.getElementById("q3b6").setAttribute('disabled', 'true');
      document.getElementById("q3b7").setAttribute('disabled', 'true');
      document.getElementById("q3b8").setAttribute('disabled', 'true');
      document.getElementById("q3b9").setAttribute('disabled', 'true');
      // document.getElementById("a4b3").style.backgroundColor="#0f0ade";
      document.getElementById("a4b3").style.backgroundColor="#663dff";
      document.getElementById("a4b3").style.backgroundImage= "linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%)";
      document.getElementById("a4b3").style.color="white";
      document.getElementById("a4b3").style.border="none";
      document.getElementById("a4b3").focus();
      window.scrollTo(0, 0);
      func4();
    }
  }

  function func4() {
    let str = "";
    str+=(document.getElementById("a4b1").value.toLowerCase());
    str+=(document.getElementById("a4b2").value.toLowerCase());
    str+=(document.getElementById("a4b3").value.toLowerCase());
    console.log(str);
    if(str==='sca') {
      document.getElementById("clap").style.cssText = "visibility: visible;transition: 2s;font-size:50px";
      setTimeout(()=>{
        // fetch('http://localhost:4000/secondPage');
        window.location.href=`http://localhost:4000/uhhdfnskhd6632`;
      }, 2000);
    }
  }


