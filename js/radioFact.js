function myRadio(){
    var callsTotal = 0;
    var smsTotal = 0;
    var total = 0
    function myAdd(radio){
        var radioAll = radio
        if (radioAll === "call"){
            callsTotal += 2.75
        }
        else if (radioAll === "sms"){
            smsTotal += 0.75;
        }
    }

    function radioCalls(){
        return callsTotal.toFixed(2)
    }

    function radioSms(){
        return smsTotal.toFixed(2)
    }

    function radioBillTotal(){
        total = smsTotal + callsTotal
        return total.toFixed(2)
    }
    function warnLevel(){
        if((radioBillTotal()>=30) && (radioBillTotal()<50)){
            return 'warning'
        }
        else if(radioBillTotal()>=50){
            return 'danger'
        }
    }

    return {
        add2: myAdd,
        calls2: radioCalls,
        sms2: radioSms,
        total2: radioBillTotal,
        warn:warnLevel,
    }
}