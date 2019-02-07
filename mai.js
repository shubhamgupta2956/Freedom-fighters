function loadDoc(filename) {
    //();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("qw").innerHTML = this.responseText;
       history.pushState(null,null,"./"+filename)
      }
    };
    xhttp.open("GET",filename , true);
    xhttp.send();
  }



  


