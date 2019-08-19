var billItemTypeRadio = document.querySelector('.billItemTypeRadio')
var callTotalTwo = document.querySelector('.callTotalTwo')
var smsTotalTwo = document.querySelector('.smsTotalTwo')
var totalTwo = document.querySelector('.totalTwo')
var radioBillAddBtn = document.querySelector('.radioBillAddBtn')

var myData2 = document.querySelector('.userData2')
var templateSource2 = document.querySelector(".userTemplate").innerHTML;
var userTemplate2 = Handlebars.compile(templateSource2);

var factoryRadio = myRadio()


function radioBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    factoryRadio.add2(checkedRadioBtn.value)

    var colorLevel2 = factoryRadio.warn()

    var userDataHTML2 = userTemplate2({
        call:'R' + factoryRadio.calls2(),
        sms:'R'+ factoryRadio.sms2(),
        total:'R'+ factoryRadio.total2()
    })
    
   myData2.innerHTML = userDataHTML2

   Handlebars.registerHelper('col', function () {
    if(colorLevel2 === 'warning'){
        return true
        
    }
    console.log(colorLevel2)
});

Handlebars.registerHelper('col2', function () {
    if(colorLevel2 === 'danger'){
        return true
    }
});
    console.log(colorLevel2)
}


radioBillAddBtn.addEventListener('click', radioBill);


window.onload = function(){
    var userDataHTML2 = userTemplate2({
        call:'R' + factoryRadio.calls2(),
        sms:'R'+ factoryRadio.sms2(),
        total:'R'+ factoryRadio.total2()
    })
    
   myData2.innerHTML = userDataHTML2
}