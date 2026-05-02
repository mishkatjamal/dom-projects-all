// * debouncing

let inp = document.querySelector("input")

function debouncing(fnc,delay){
    let timer;
    return function(...arg){
        clearTimeout(timer)
        timer = setTimeout(() => {
            fnc(...arg)
        }, delay);
    }
}

inp.addEventListener("input",debouncing(function(){
    console.log("hello");
    
},1000))