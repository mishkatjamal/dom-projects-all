// * observer pattern

class YoutubeChannel{
    constructor(){
        this.subscribers = []
    }

    subscribe(user){
        this.subscribers.push(user)
        user.update(`${user.name} you subscribe the channel`)
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((sub)=>{
            return sub !== user
        })
        user.update(`${user.name} you unsubscribe the channel`)
    }
    notify(message){
        this.subscribers.forEach((sub)=>{
            sub.update(message)
        })
    }
}

class User{
    constructor(name){
        this.name = name
    }
    update(data){
        console.log(`${this.name} ${data}`);
        
    }
}



let gk = new YoutubeChannel()
let user1 = new User("mishkat")
let user2 = new User("jamal")

gk.subscribe(user1)
gk.subscribe(user2)


gk.notify("new video dala hu main")
gk.unsubscribe(user2)

gk.notify("post hai ek dekho")

