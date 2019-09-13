var billItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings')
var callTotalSettings = document.querySelector('.callTotalSettings')
var smsTotalSettings = document.querySelector('.smsTotalSettings')
var totalSettings = document.querySelector('.totalSettings')
var settingsBillAddBtn = document.querySelector('.settingsBillAddBtn')
var totalCost = 0;
var callsTotal3 = 0;
var smsTotal3 = 0;
var callCost2 = 0;
var smsCost2 = 0;
var warningLevel = 0;
var criticalLevel = 0;
var criticalLevelSetting = document.querySelector('.criticalLevelSetting')
var warningLevelSetting = document.querySelector('.warningLevelSetting')
var smsCostSetting = document.querySelector('.smsCostSetting')
var callCostSetting = document.querySelector('.callCostSetting')
var updateSettings = document.querySelector('.updateSettings')

var factorySet = factSet()

function update() {
    factorySet.callIn(callCostSetting.value);
    factorySet.smsIn(smsCostSetting.value);
    factorySet.setWarn(warningLevelSetting.value)
    factorySet.setCri(criticalLevelSetting.value)

    warningLevel = factorySet.getWarn()
    criticalLevel = factorySet.getCri()
  
console.log(criticalLevel)
    if (factorySet.totalf() >= warningLevel) {
        totalSettings.classList.add("warning");
        totalSettings.classList.remove("danger");
    }
    if (factorySet.totalf() < warningLevel) {
        totalSettings.classList.remove("danger");
        totalSettings.classList.remove("warning");
    }

    if (factorySet.totalf() >= criticalLevel) {
        totalSettings.classList.add("danger");
        totalSettings.classList.remove("warning");

    }
    if (factorySet.totalf() >= criticalLevel) {
        settingsBillAddBtn.removeEventListener("click", settingsBill);

    }
    else {
        settingsBillAddBtn.addEventListener("click", settingsBill);
    }
}

function settingsBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
 

    factorySet.adding(checkedRadioBtn.value)


console.log(checkedRadioBtn.value)

    callTotalSettings.innerHTML = factorySet.getCall();
    smsTotalSettings.innerHTML = factorySet.getSms();
    
    totalSettings.innerHTML = factorySet.totalf().toFixed(2)

    if (factorySet.totalf() >= warningLevel) {
        totalSettings.classList.add("warning");
        totalSettings.classList.remove("danger");
    }
     if (factorySet.totalf() < warningLevel) {
        totalSettings.classList.remove("danger");
        totalSettings.classList.remove("warning");
    }

     if (factorySet.totalf() >= criticalLevel) {

        totalSettings.classList.add("danger");
        totalSettings.classList.remove("warning");
    }
    if (factorySet.totalf() >= criticalLevel) {
        settingsBillAddBtn.removeEventListener("click", settingsBill);
    }

}
settingsBillAddBtn.addEventListener('click', settingsBill);
updateSettings.addEventListener('click', update);
