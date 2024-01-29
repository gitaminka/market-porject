const card = document.querySelectorAll("[data-target]")
const contaner = document.querySelectorAll("[data-cont]")




for (let index = 0; index < card.length; index++) {
     element = card[index].children;
 
    checkvariable(element);
    
}


function checkvariable(element){
 
for (let index = 0; index < element.length; index++) {
   
  setTimeout(()=>{
    element[index].addEventListener("click",function(e){
        get = e.target;
         value = get.getAttribute("value")
         for (let index = 0; index< contaner.length; index++) {
     
             cont = contaner[index].getAttribute("data-cont");
             
            
 
                 if (cont==value) {
                    setTimeout(()=>{
                       get.classList.add("show");
                       get.c
                        contaner[index].classList.add("active");
                        console.log(border)
                    },400)
                    
                     
                 } else  {
                    setTimeout(()=>{
                       // if(border)
                        
                        contaner[index].classList.remove("active");
                    },400)
                     
                 }
 
 
 
          
            
         
            
                 
 
 
      }
            
     
          
     });
  },40);
   
    
}
}