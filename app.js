// *Oops topic 

function CreatePencil(name,price,color){
    this.name = name;
    this.price = price;
    this.color =color
    
}

CreatePencil.prototype.write = function(text){
        let h1 = document.createElement("h1")
        h1.textContent = text
        h1.style.color = this.color
        document.querySelector("body").appendChild(h1)
    }

let pencil1 = new CreatePencil("apsara",10,"red")
let pencil2 = new CreatePencil("nutraj",10,"black")
pencil1.write("kya hua bhaiyya ")
pencil2.write("hn meri jaaan ")