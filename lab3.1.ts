interface Paymenthod{
    pay (amounut : number):void;
}
class Cash implements Paymenthod{
    pay (amounut : number) : void{
        console.log("cash ชำระเงิน 30 บาท")
    }
}
class Creditcard implements Paymenthod{
    pay (amounut : number) :void{
        console.log("creditcard ชำระเงิน 300 บาท หมายเลขบัตรเครดิต 12345678" );
    }
}

const cash = new Cash ();
const card = new Creditcard ();

cash.pay (30);
card.pay(300);