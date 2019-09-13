function factSet() {
    var callTotal = 0;
    var smsTotal = 0;
    var callFinal = 0
    var smsFinal = 0

    var theWarnLevel = 0;
    var thecricLevel = 0;

    function callIn(input1) {
        callTotal = input1;
    }

    function allCall() {
        return callTotal
    }

    function smsIn(input2) {
        smsTotal = input2;
    }


    function allSms() {
        return smsTotal
    }

    function makeCall() {
        if (!hasReachedCric()) {
            callFinal += Number(callTotal)
        }

    }

    function makeSms() {
        if (!hasReachedCric()) {
            smsFinal += Number(smsTotal)
        }

    }

    function getCall() {
        return Number(callFinal).toFixed(2)
    }

    function getSms() {
        return Number(smsFinal).toFixed(2)
    }

    function adding(radios) {
        var radioB = radios
        if (radioB === "call") {
            makeCall()
        }
        else if (radioB === "sms") {
            makeSms()
        }
    }



    function totalf() {
        return Number(callFinal) + Number(smsFinal)
    }

    function setWarn(warnLevel) {
        theWarnLevel = warnLevel
    }
    function getWarn() {
        return theWarnLevel
    }

    function setCri(cricticalLevel) {
        thecricLevel = cricticalLevel
    }
    function getCri() {
        return thecricLevel
    }

    function hasReachedCric() {
        return totalf() >= getCri
    }

    function totalClass() {
        if (totalf() >= getWarn) {
            return 'warning'
        }

        if (hasReachedCric()) {
            return 'danger'
        }
    }


    return {
        smsIn,
        callIn,
        makeCall,
        makeSms,
        getCall,
        getSms,
        adding,
        allCall,
        allSms,
        totalf,
        getWarn,
        setWarn,
        setCri,
        getCri,
        totalClass,
        hasReachedCric,
        // criLevel,
    }
}