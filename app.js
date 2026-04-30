// *Oops topic
// ^ classes extend super

class User{
    constructor(name,address,email,color){
        this.name = name
        this.address = address
        this.email = email
        this.color = color
        this.role = "user"
    }

    write(text){
        let h1 = document.createElement("h1")
        h1.textContent = `${this.role}: ${text}`
        h1.style.color = this.color

        document.body.appendChild(h1)
    }
}


class Admin extends User{
    constructor(name,address,email,color){
        super(name,address,email,color)
        this.role = "Admin"
    }

    remove(){
        document.querySelectorAll("h1").forEach((elem)=>{
            elem.remove()
        })
    }
}
let u1 = new User("mishkat","kamptee","email1@.com","black")
let u2 = new User("jamal","nagpur","emaisfdl1@.com","red")
let a1 = new Admin("keepr","nagpur","emaisfdl1@.com","green")
