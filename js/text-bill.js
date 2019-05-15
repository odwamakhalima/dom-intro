var billTypeText = document.querySelector('.billTypeText')
var callTotalOne = document.querySelector('.callTotalOne')
var smsTotalOne	 = document.querySelector('.smsTotalOne')
var totalOne = document.querySelector('.totalOne')
var addToBillBtn = document.querySelector('.addToBillBtn')
var callsTotal = 0;
var smsTotal = 0;
function textBillTotal(){
    var billTypeEntered = billTypeText.value.trim();
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    callTotalOne.innerHTML = callsTotal.toFixed(2);
    smsTotalOne.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalOne.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalOne.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalOne.classList.add("warning");
    }
}

addToBillBtn.addEventListener('click', textBillTotal);