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
    var colorLevel = factoryRadio.warn2() 
   

    var userDataHTML2 = userTemplate2({
        call:'R' + factoryRadio.calls2(),
        sms:'R'+ factoryRadio.sms2(),
        total:'R'+ factoryRadio.total2(),
        colorLevel
    })
    
   myData2.innerHTML = userDataHTML2
 
   

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

