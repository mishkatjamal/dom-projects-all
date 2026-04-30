// *promises

let pr = new Promise((res,rej)=>{

    setTimeout(() => {
        let rn = Math.floor(Math.random()*10)
        if (rn>5) {
            return res("resolved "+ rn)
        } else {
            return rej("reject "+ rn)
        }
    }, 3000);
})

pr.then((val)=>{
    console.log(val);
    
})
.catch((val)=>{
console.log(val);

})