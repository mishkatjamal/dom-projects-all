// * throttle

let inp = document.querySelector("input")

function throttle(fnc,delay){
    let timer = 0
return function(...arg){
    let now = Date.now()
    if (now - timer >= delay) {
        timer = now
        fnc(...arg)
    }
}
}

inp.addEventListener("input",throttle(function(){
    console.log("hello");
    
},1000))