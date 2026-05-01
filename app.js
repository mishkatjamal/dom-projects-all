// *factory function pattern

function factory(name,price){

    let stock = 10
    return{
        name,
        price,
        checkStock(){
            console.log(`${stock} is avalaible`);
            
        },
        buy(qty){
            if (qty<=stock) {
                stock -= qty
                console.log(`${qty} you booked now we have ${stock} left`);
                
            } else {
                console.error(`we have only ${stock} stock right now`);
                
            }
        },
        refill(qyt){
            stock+= qyt
            console.log(`now we have total ${stock} stock`);
            
        }
    }
}


let iphone = factory("iphone17",40000)
let fenta = factory("fenta",20)