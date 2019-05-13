// get a reference to the textbox where the bill type is to be entered
var billItemTypeRadio = document.querySelector('.billItemTypeRadio')
var callTotalTwo = document.querySelector('.callTotalTwo')
var smsTotalTwo	 = document.querySelector('.smsTotalTwo')
var totalTwo = document.querySelector('.totalTwo')
//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn')
//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;
function radioBill(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
    }    
    // get the value entered in the billType textfield
    // update the correct total
    if (billItemType === "call"){
        callsTotal += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalTwo.innerHTML = callsTotal.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalTwo.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalTwo.classList.add("danger");
        totalTwo.classList.remove("warning");
    }
    else if (totalCost >= 30){
        totalTwo.classList.add("warning");
        totalTwo.classList.remove("danger");
    }
}

radioBillAddBtn.addEventListener('click', radioBill);
//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
