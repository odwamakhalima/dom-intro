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
        total: 'R' + factoryText.total()
    })

    myData.innerHTML = userDataHTML

    Handlebars.registerHelper('col', function () {
        if (colorLevel === 'warning') {
            return true
        }
    });

    Handlebars.registerHelper('col2', function () {
        if (colorLevel === 'danger') {
            return true
        }
    });
}

addToBillBtn.addEventListener('click', textBillTotal);