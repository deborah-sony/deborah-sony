var nav = document.getElementById("nav");
var toggle = document.querySelector(".nav-toggle");
var links = document.querySelector(".links");



window.addEventListener("scroll",function(){
  if(window.pageYOffset >80){
    nav.style="background-color:white";
  }
  else{
    nav.style="background-color:#fff7e6";
  }

})

toggle.addEventListener("click",function(){
  //links.classList.toggle("show-links")
  if(links.classList.contains("show-links")){
    links.classList.remove("show-links");
  }
  else{
    links.classList.add("show-links");
  }
})
