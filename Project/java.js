
        function validateForm(){
            let x = document.forms["loginform"]["username"].value;
            if (x==""){
                alert("please input your student id");
                return false;
            }
            let y = document.forms["loginform"]["password"].value;
            if (y==""){
                alert("please input your password");
                return false;
            }
            
            
        }
        function logform(){
            let x = document.forms["loginform"]["username"].value;
            if (x==""){
                alert("please input your student id");
                return false;
            }
            let y = document.forms["loginform"]["studname"].value;
            if (y==""){
                alert("please input your name");
                return false;
            }
            let a = document.forms["loginform"]["studic"].value;
            if (a==""){
                alert("please input your IC");
                return false;
            }
            var numbers=/^[0-9]/;
            if (!a.match(numbers)){
                alert("please input the correct IC.");
                return false;
        
        }
        let b = document.forms["loginform"]["password"].value;
            if (b==""){
                alert("please input your password");
                return false;
    }
    let c = document.forms["loginform"]["cpassword"].value;
            if (c==""){
                alert("please confirm your password");
                return false;
    }
    
        }
        function myFunction1() {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("myBtn");
          
            if (dots.style.display === "none") {
              dots.style.display = "inline";
              btnText.innerHTML = "Read more";
              moreText.style.display = "none";
            } else {
              dots.style.display = "none";
              btnText.innerHTML = "Read less";
              moreText.style.display = "inline";
            }
          }
          function myFunction2() {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("myBtn");
          
            if (dots.style.display === "none") {
              dots.style.display = "inline";
              btnText.innerHTML = "Read more";
              moreText.style.display = "none";
            } else {
              dots.style.display = "none";
              btnText.innerHTML = "Read less";
              moreText.style.display = "inline";
            }
          }
          
          function aboutus() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");
    
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
    }
    function myFunction3() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }
 function information1(){
    onclick(alert("Meadow College is a collage that is located on Johor Bahru Malaysia. We specialized in teaching mechanical Engineering, Chemical Engineering and Computer Science"))
 }