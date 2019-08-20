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


    Handlebars.registerHelper('col', function textBillTotal() {
        if (factoryText.warn() === 'warning') {
            return true
        }
    });
    
    Handlebars.registerHelper('col2', function textBillTotal() {
        if (factoryText.warn() === 'danger') {
            return true
        }
    });



    var userDataHTML = userTemplate({
        call: 'R' + factoryText.calls(),
        sms: 'R' + factoryText.sms(),
        total: 'R' + factoryText.total()
    })

    myData.innerHTML = userDataHTML


}

addToBillBtn.addEventListener('click', textBillTotal);

