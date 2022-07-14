//close button (the X) doesnt work. fix or delete it.
var closePopup = document.getElementsByClassName("popupclose");
var background = document.getElementById("background");
var popup1 = document.getElementById("popup1");
var popup2 = document.getElementById("popup2");
var popup3 = document.getElementById("popup3");
var popup4 = document.getElementById("popup4");
var popup5 = document.getElementById("popup5");
var button1 = document.getElementById("box-1");
var button2 = document.getElementById("box-2");
var button3 = document.getElementById("box-3");
var button4 = document.getElementById("box-4");
var button5 = document.getElementById("box-5");

background.onclick = function(event) { 
      if (event.target == background) {
          background.style.display = "none"; 
          popup1.style.display = "none";
          popup2.style.display = "none";
          popup3.style.display = "none";
          popup4.style.display = "none";
          popup5.style.display = "none";
      }
}

closePopup.onclick = function(event) {
  if(event.target == closePopup){
      background.style.display = 'none';
      popup5.style.display = "none";
  }

};

button1.onclick = function() {
  background.style.display = 'block';
  popup1.style.display = 'block';
}
button2.onclick = function() {
  background.style.display = 'block';
  popup2.style.display = 'block';
}
button3.onclick = function() {
  background.style.display = 'block';
  popup3.style.display = 'block';
}
button4.onclick = function() {
  background.style.display = 'block';
  popup4.style.display = 'block';
}
button5.onclick = function() {
  background.style.display = 'block';
  popup5.style.display = 'block';
}
