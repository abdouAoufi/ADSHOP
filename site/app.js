 /*
     Zen mode for full screen
     ctrl + b hile project bar 
     ctrl + b  close file
     ctrl + d select word
     ctrl + shift + tab switch between files
     <!-- TODO:this should be a to do comment -->
     <!-- **:this should be a to do comment -->
     <!--!this is danger-->
     */

 const bars = document.querySelector(".bars");
 const list = document.querySelector(".list");
 const nav = document.querySelector("#nav");

 bars.addEventListener("click", function() {
     list.classList.toggle("normal");

 });