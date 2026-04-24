let imgbox = document.querySelectorAll(".image-wala");


imgbox.forEach((val)=>{
    let img = val.querySelector("img")
    
    val.addEventListener("mouseenter",()=>{
        img.style.display = "block"
        
        
    })
    val.addEventListener("mouseleave",()=>{
        img.style.display = "none"
    })
     val.addEventListener("mousemove",(e)=>{
        img.style.top = e.clientY+"px"
        img.style.left = e.clientX+"px"
       
    })
    
})