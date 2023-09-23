      //contact
      function contact(){
        var name = document.getElementById("username7").value;
        var email = document.getElementById("email7").value;
        var close = document.getElementById("reset7");
        
      if(
      name === ""||
      email === ""
      ){
      return false;
      }  if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      alert("check your email")
      return false;
      }else{
      alert(" successfully received");
      close.reset()
      }
      };