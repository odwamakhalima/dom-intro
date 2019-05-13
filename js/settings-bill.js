var billItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings')
var callTotalSettings = document.querySelector('.callTotalSettings')
var smsTotalSettings = document.querySelector('.smsTotalSettings')
var totalSettings = document.querySelector('.totalSettings')
var warningLevelSetting = document.querySelector('.warningLevelSetting')
var criticalLevelSetting = document.querySelector('criticalLevelSetting')
var settingsBillAddBtn = document.querySelector('.settingsBillAddBtn')
var callsTotal = 0;
var smsTotal = 0;
var criticalLevelSetting = document.querySelector('')
var warningLevelSetting = document.querySelector('')
var smsCostSetting = document.querySelector('')
var callCostSetting = document.querySelector('')
var updateSettingsAddBtn = document.querySelector('.updateSettingsAddBtn')
function update(){

}
updateSettingsAddBtn.addEventListener('click', update);
function settingsBill(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
    }    

    if (billItemType === "call"){
        callsTotal += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }
    callTotalSettings.innerHTML = callsTotal.toFixed(2);
    smsTotalSettings.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalSettings.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 30){
        totalSettings.classList.add("danger");
        totalSettings.classList.remove("warning");
    }
    else if (totalCost >= 50){
        totalSettings.classList.add("warning");
        totalSettings.classList.remove("danger");
    }
}

settingsBillAddBtn.addEventListener('click', settingsBill);
//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
