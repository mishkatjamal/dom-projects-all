// * intersection observer

let imgs = document.querySelectorAll("img")
const observer = new IntersectionObserver(
    function(entires,observer){
        entires.forEach((entry)=>{
            if (entry.isIntersecting) {
                const img = entry.target
                img.src = img.dataset.src
                img.classList.add("loaded")
                observer.unobserve(entry)
            }
        })
    },{
        root:null,
        threshold:0.1
    }
)


imgs.forEach((img)=>{
    observer.observe(img)
})