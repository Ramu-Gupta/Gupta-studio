const images=["/image/album (1).png","/image/album (2).png","/image/album (3).png"]
let index=0;


function changeimge(){
   if(images.length==index){
     index=0;
   }else{
    
    document.getElementById('image').src=images[index]
    index++
    console.log(index)
   }

}

setInterval(()=>{changeimge()},3000);

// menu show hide btn code 
 
const menu =document.getElementById("hide-menu")
const menuCloseButton=document.getElementById("colse-menu-btn")
const showMenuButton=document.getElementById("Menu-button")

 showMenuButton.addEventListener("click",()=>{
  menu.style.display="block"
 })

 menuCloseButton.addEventListener("click",()=>{
  menu.style.display="none"
 })