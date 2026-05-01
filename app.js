// *iffe

let Bank = (function (){
    let balance = 1000

    function checkBalance(){
        console.log(`yor current balance is ${balance}`);
        
    }

    function setBalance(val){
        balance+= val
        console.log(`yor current balance is ${balance}`);
        
    }

    function withdrawl(val){
        if (val <= balance) {
            balance-= val
            console.log(`yor current balance is ${balance}`);
            
        }
    }

    return{
        checkBalance,
        setBalance,
        withdrawl
    }
   
})();

Bank.checkBalance();
Bank.setBalance(200)
Bank.withdrawl(100)
