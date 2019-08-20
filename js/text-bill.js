var billTypeText = document.querySelector('.billTypeText')
var callTotalOne = document.querySelector('.callTotalOne')
var smsTotalOne = document.querySelector('.smsTotalOne')
var totalOne = document.querySelector('.totalOne')
var addToBillBtn = document.querySelector('.addToBillBtn')

var myData = document.querySelector('.userData')
var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);

var factoryText = myText()

textBillTotal()
function textBillTotal() {
    factoryText.add(billTypeText.value)
    var colorLevel = factoryText.warn()


    var userDataHTML = userTemplate({
        call: 'R' + factoryText.calls(),
        sms: 'R' + factoryText.sms(),
        total: 'R' + factoryText.total(),
        colorLevel
    })

    myData.innerHTML = userDataHTML


}

addToBillBtn.addEventListener('click', textBillTotal);

