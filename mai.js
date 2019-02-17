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
    push("./"+filename);
    loadDoc("./"+filename);
    
  }


  window.onpopstate = function(event) {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    loadDoc(page);
    if(e.target != e.currentTarget){
      e.preventDefault();
      loadDoc(filename)
		}
      e.stopPropagation();
	  }