function myText() {
    var callsTotal = 0;
    var smsTotal = 0;
    var totalCost = 0

    function myAdd(text) {
        var textBill = text

        if (textBill === "call") {
            callsTotal += 2.75
        }
        else if (textBill === "sms") {
            smsTotal += 0.75;

        }
        totalCost = callsTotal + smsTotal
    }

    function textCalls(){
        return callsTotal.toFixed(2)
    }

    function textSms(){
        return smsTotal.toFixed(2)
    }

    function textBillTotal(){
        return totalCost.toFixed(2)
    }

    function warnLevel(){
        if((totalCost>=30) && (totalCost<50)){
            return 'warning'
        }
        else if(totalCost>=50){
            return 'danger'
        }
    }

    return {
        add: myAdd,
        calls: textCalls,
        sms: textSms,
        total: textBillTotal,
        warn: warnLevel,
       
    }
}