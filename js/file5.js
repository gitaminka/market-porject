const BtnOffcanvas= document.querySelectorAll(".BtnOffcanvas")
const CloseOffcanvas= document.querySelectorAll(".closeoffcanvas")
const MenuOffcanvas = document.querySelectorAll(".menuoffcanvas")
let Menu;
BtnOffcanvas.forEach(btnfun);
// CloseOffcanvas.forEach(CloseOff);

function btnfun(btn){
  
  btn.addEventListener("click",function(event){
    MenuOff(event)
  })
 
}
 function MenuOff (event){
  
  if(true) {
    MenuOffcanvas.forEach((Menu)=>{
       Menu.classList.toggle("active");
      console.log(Menu)
    });
  
  } else {
    Menu.classList.remove("active");
  }
  

  

 }
 console.log(Menu)