function computeLoan(){

    var amount=document.getElementById("amount").value;
    var interest_rate=document.getElementById("interest_rate").value;
    if (interest_rate>50){
        alert("Rate is exceeded 50");
    }
    var months =document.getElementById("months").value;
    var interest=(amount* (interest_rate * .01)) / months;
    var payment=((amount/months)+interest).toFixed(2);
    payment=payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("payment").innerHTML="Monthly Payment = Rs:"+payment;
}
function hide(){
    document.getElementById("payment").innerHTML=" ";
}