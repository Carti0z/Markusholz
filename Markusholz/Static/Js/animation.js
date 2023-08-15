// Background animation start
var slideImg = document.getElementById("slideImg");

      var images = new Array(
          "Static/Image/Background/Features/home-performance.jpg",
          "Static/Image/Background/Features/home-people.jpg",
          "Static/Image/Background/Features/Harsh.jpg",
          "Static/Image/Background/Features/bg1.png"
      );

      var len = images.length;
      var i = 0;
       function slider(){
          if(i > len-1){
              i = 0;
          }
          slideImg.src = images[i];
          i++;
          setTimeout('slider()',3000);
       }
       // Background animation end
       