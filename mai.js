function loadDoc(filename) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("qw").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET",filename,true);
    xhttp.send();
    
  }

  function push(filename) {
    history.pushState(null,null,filename)
    
  }

    function asdf(filename) {
    if(filename == window.location.pathname.split("/").pop()){

    }
    else {
    push("./"+filename);
    loadDoc("./"+filename);
    }
  }

  




  window.onpopstate = function(e) {
  
    var path = window.location.pathname;
    var page = path.split("/").pop();
   

      if (page == 'index.html') {
        document.getElementById("qw").innerHTML = "";
      } else {
        loadDoc(page);
      }
    }

