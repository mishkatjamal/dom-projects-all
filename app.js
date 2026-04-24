let arr = [
    {
    dp:"https://images.unsplash.com/photo-1776846320499-ca654ebe2659?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1776849099406-9de094e64ae2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
},
 {
    dp:"https://images.unsplash.com/photo-1776849099406-9de094e64ae2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1775315791610-f6ceaa2f3a6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
},
 {
    dp:"https://images.unsplash.com/photo-1775315791610-f6ceaa2f3a6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1776846320499-ca654ebe2659?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
},
 {
    dp:"https://images.unsplash.com/photo-1776665506150-8894f5de2de4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1776846320499-ca654ebe2659?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
},
 {
    dp:"https://images.unsplash.com/photo-1776846320499-ca654ebe2659?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1776846320499-ca654ebe2659?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
},
 {
    dp:"https://images.unsplash.com/photo-1776665506150-8894f5de2de4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1776846320499-ca654ebe2659?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
},

]


let stroriyan = document.querySelector(".stroriyan")
let clutter = ''
arr.forEach((val,idx)=>{
    
    clutter+= ` <div class="story">
              <img id='${idx}'
                src="${val.dp}"
                alt=""
              />
            </div>`
    
})
stroriyan.innerHTML = clutter


stroriyan.addEventListener("click",(dets)=>{
    document.querySelector(".full-page").style.display = "block"
    document.querySelector(".full-page").style.backgroundImage = `url(${arr[dets.target.id].story})`


    setTimeout(() => {
        document.querySelector(".full-page").style.display = "none"
    }, 3000);
})
