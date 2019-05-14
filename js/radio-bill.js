var billItemTypeRadio = document.querySelector('.billItemTypeRadio')
var callTotalTwo = document.querySelector('.callTotalTwo')
var smsTotalTwo	 = document.querySelector('.smsTotalTwo')
var totalTwo = document.querySelector('.totalTwo')
var radioBillAddBtn = document.querySelector('.radioBillAddBtn')
var callsTotal2 = 0;
var smsTotal2 = 0;
function radioBill(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
    }    
    if (billItemType === "call"){
        callsTotal2 += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal2 += 0.75;
    }

    callTotalTwo.innerHTML = callsTotal2.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal2.toFixed(2);
    var totalCost2 = callsTotal2 + smsTotal2;
    totalTwo.innerHTML = totalCost2.toFixed(2);

    if (totalCost2 >= 50){
        totalTwo.classList.add("danger");
        totalTwo.classList.remove("warning");
    }
    else if (totalCost2 >= 30){
        totalTwo.classList.add("warning");
        totalTwo.classList.remove("danger");
    }
}

radioBillAddBtn.addEventListener('click', radioBill);
