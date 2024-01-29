const menuNavbar = document.querySelector(".menuRightcollaps");
const btnNavbar = document.querySelector(".CollapseBtn button");
const blackBox = document.querySelector(".overlay")
const CloseTAB = document.querySelector(".CloseBox ")
const CloseTABShop = document.querySelector(".CloseBoxshop ")
const btnShopBacket= document.querySelectorAll(".btnCollapseLeft")
const BasketShop = document.querySelector(".CollapseLeft"||"[data-CollapesLeft]")
const FilterCav  = document.querySelectorAll(".FilterMenu")
const btnFilter =  document.querySelectorAll(".btnFilter")
const closeFilter = document.querySelector(".closefilter")
/*for (i = 0; i < btnShopBacket.length; i++) {
  
    btnShopBacket[i].addEventListener("click",function(){
       
         ShopCollapse()
    })
};*/
   /*CloseTAB.forEach(Close => {
    Close.addEventListener("click",()=>{
        RemoveCollapes(SubMenu)
    })
    console.log(Close)
});*/

btnFilter.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        myfilter(btn)
    })
});




 btnShopBacket.forEach(btnShop => {
    btnShop.addEventListener("click",() =>{
        ShopCollapse()
    })
  
  });
 
 btnNavbar.addEventListener("click",  function(){
    boxCollapse()
});


function boxCollapse(){
 let SubMenu =   menuNavbar.classList.toggle("active")
         BasketShop.classList.remove("active")
         RemoveCollapes(SubMenu)
}
function  ShopCollapse(){
    let SubMenu= BasketShop.classList.toggle("active")
   menuNavbar.classList.remove('active')
   
    RemoveCollapes(SubMenu)
   
}

CloseTABShop.addEventListener("click",function (){
    SubMenu = BasketShop.classList.remove('active')
    RemoveCollapes(SubMenu)
});



CloseTAB.addEventListener("click",  function(){
    RemoveCollapes()
});

function  myfilter (){
    FilterCav.forEach((filter)=>{
        filter.classList.toggle("active");
     
        closeFilter.addEventListener("click",function(){
            filter.classList.remove("active");
        });
        
   
    });

  console.log()
    
   
}




function RemoveCollapes(SubMenu){
  console.log(SubMenu);
    if (SubMenu==true) {
        ShowClose = CloseTAB.classList.add('show')
        setTimeout(()=>{
            ShowBlackBox = blackBox.style.transform = "scale(1)"
            
        },200) 
        
    } else {
        Close = CloseTAB.classList.remove('show')
        CloseMENO = menuNavbar.classList.remove('active')
        setTimeout(()=>{
            ShowBlackBox = blackBox.style.transform = "scale(0)"
            
        },200)
    }
 
    
  

}

