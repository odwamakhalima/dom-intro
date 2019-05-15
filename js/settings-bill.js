var billItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings')
var callTotalSettings = document.querySelector('.callTotalSettings')
var smsTotalSettings = document.querySelector('.smsTotalSettings')
var totalSettings = document.querySelector('.totalSettings')
var settingsBillAddBtn = document.querySelector('.settingsBillAddBtn')
var callsTotal3 = 0;
var smsTotal3 = 0;
var callCost2 = 0;
var smsCost2 = 0;
var criticalLevelSetting = document.querySelector('.criticalLevelSetting')
var warningLevelSetting = document.querySelector('.warningLevelSetting')
var smsCostSetting = document.querySelector('.smsCostSetting')
var callCostSetting = document.querySelector('.callCostSetting')
var updateSettings = document.querySelector('.updateSettings')
function update(){
    callCost2 = Number(callCostSetting.value)
    smsCost2 = Number(smsCostSetting.value)
    warningLevel = Number(warningLevelSetting.value)
    criticalLevel = Number(criticalLevelSetting.value)
    }
    updateSettings.addEventListener('click', update);
function settingsBill(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
    }
    if (billItemType === "call"){
        callsTotal3 += callCost2;
    }
    else if (billItemType === "sms"){
        smsTotal3 += smsCost2;
    }
    callTotalSettings.innerHTML = callsTotal3.toFixed(2);
    smsTotalSettings.innerHTML = smsTotal3.toFixed(2);
    var totalCost = callsTotal3 + smsTotal3;
    totalSettings.innerHTML = totalCost.toFixed(2);

    if(totalCost >= warningLevel){
        totalSettings.classList.add("warning");
        totalSettings.classList.remove("danger");
    }
    if(totalCost < warningLevel){
        totalSettings.classList.remove("danger")
        totalSettings.classList.remove("warning")
    }
 
    do{
        if(totalCost >= criticalLevel){
            settingsBillAddBtn.removeEventListener("click",settingsBill );
            totalSettings.classList.add("danger")
            totalSettings.classList.remove("warning")
        }
        
    }while(totalCost > criticalLevel);

}
settingsBillAddBtn.addEventListener('click', settingsBill);