var billItemTypeRadio = document.querySelector('.billItemTypeRadio')
var callTotalTwo = document.querySelector('.callTotalTwo')
var smsTotalTwo = document.querySelector('.smsTotalTwo')
var totalTwo = document.querySelector('.totalTwo')
var radioBillAddBtn = document.querySelector('.radioBillAddBtn')

var factoryRadio = myRadio()

function radioBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    factoryRadio.add(checkedRadioBtn.value)

    callTotalTwo.innerHTML = factoryRadio.calls()
    smsTotalTwo.innerHTML = factoryRadio.sms()
    totalTwo.innerHTML = factoryRadio.total()

    if (factoryRadio.total() >= 50) {
        totalTwo.classList.add("danger");
        totalTwo.classList.remove("warning");
    }
    else if (factoryRadio.total() >= 30) {
        totalTwo.classList.add("warning");
        totalTwo.classList.remove("danger");
    }
}

radioBillAddBtn.addEventListener('click', radioBill);
