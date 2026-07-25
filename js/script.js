function calculateInvestment(){

let amount = Number(document.getElementById("amount").value);

if(amount <= 0){

document.getElementById("result").innerHTML="Enter a valid amount";

return;

}

let estimated = amount * 1.15;

document.getElementById("result").innerHTML =
"Estimated Value: R" + estimated.toLocaleString();

}