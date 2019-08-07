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
    }

    function textCalls(){
        return callsTotal.toFixed(2)
    }

    function textSms(){
        return smsTotal.toFixed(2)
    }

    function textBillTotal(){
        totalCost = callsTotal + smsTotal
        return totalCost.toFixed(2)
    }

    function warnLevel(){
        if((textBillTotal()>=27) && (textBillTotal()<48)){
            return 'warning'
        }
        else if(textBillTotal()>=48){
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