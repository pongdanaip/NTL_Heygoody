
window.onload = function () {
    document.getElementById("OTP_1").focus();
    countdownFunc();
}

for(i=1; i<6; i++){
    var otpMask = IMask(
        document.getElementById('OTP_'+[i]),
        {
            mask: /^[0-9]+$/
        }
    );
}

// OTP input
var container = document.getElementsByClassName("fn-otp-input-section")[0];
container.onkeyup = function (e) {
    var target = e.srcElement || e.target;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }
    // Move to previous field if empty (user pressed backspace)
    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}

// Countdown function
var countdownFunc = function () {
    var count = 59, timer = setInterval(function () {
        $(".countdown").html(count--);
        if (count <= -1) {
            clearInterval(timer);
            $("#timeCountDown").hide();
            $("#requestOTP").removeClass("d-none");
            $("#expireOTP").removeClass("d-none");
        }
    }, 1000);
}

// request new otp
function requestNewOTP() {
    $("#requestOTP").addClass("d-none");
    $("#expireOTP").addClass("d-none");
    $("#invalidOTP").addClass("d-none");
    $("#fn-alert-email").removeClass("d-none");
    $("#timeCountDown").show();
    $(".countdown").html("59");
    countdownFunc();
}

// verify otp
function verifyOTP() {
    let otp1 = $("#OTP_1").val();
    let otp2 = $("#OTP_2").val();
    let otp3 = $("#OTP_3").val();
    let otp4 = $("#OTP_4").val();
    let otp5 = $("#OTP_5").val();
    let otp6 = $("#OTP_6").val();
    let otpValue = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    if (otpValue == "999999") {
        $("#invalidOTP").addClass("d-none");
    } else {
        $("#invalidOTP").removeClass("d-none");
        $("#expireOTP").addClass("d-none");
    }
}