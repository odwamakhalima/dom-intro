var billTypeText = document.querySelector('.billTypeText')
var callTotalOne = document.querySelector('.callTotalOne')
var smsTotalOne	 = document.querySelector('.smsTotalOne')
var totalOne = document.querySelector('.totalOne')
var addToBillBtn = document.querySelector('.addToBillBtn')

var factoryText = myText()

function textBillTotal(){
    factoryText.add(billTypeText.value)
    console.log(billTypeText)
    callTotalOne.innerHTML = factoryText.calls();
    smsTotalOne.innerHTML = factoryText.sms();
    totalOne.innerHTML = factoryText.total()

    if (factoryText.total() >= 50){
        
        totalOne.classList.add("danger");
    }
    else if (factoryText.total() >= 30){
        totalOne.classList.add("warning");
    }
}

addToBillBtn.addEventListener('click', textBillTotal);