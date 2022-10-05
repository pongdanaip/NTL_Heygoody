
window.onload = function () {
    document.getElementById("fn-phonenum-email").focus();
}

function gotoLogin() {
    document.getElementById("fn-createaccount").classList.remove("active");
    document.getElementById("fn-login").classList.add("active");
    document.getElementById("fn-createaccount-page").classList.remove("show", "active");
    document.getElementById("fn-login-page").classList.add("show", "active");
}

// Hide - Show Password
$(".fn-password-invisible").on('click', function (event) {

    let ele = $(this).prev(".fn-pass-swap");
    event.preventDefault();

    if ($(ele).attr("type") == "text") {
        $(ele).attr('type', 'password');
        $(this).find('.fn-img-invisible').removeClass('d-none')
        $(this).find('.fn-img-visible').addClass('d-none')

    } else if ($(ele).attr("type") == "password") {
        $(ele).attr('type', 'text');
        $(this).find('.fn-img-invisible').addClass('d-none')
        $(this).find('.fn-img-visible').removeClass('d-none')
    }

});

$("#fn-txt-pass").on('blur', function () {
    let checkLength = $("#fn-txt-pass").val()
    if (checkLength.length == "") {
        $(".fn-valid").removeClass('d-none');
        $("#fn-txt-pass").closest('div').addClass('errorempty');
    } else {
        $(".fn-valid").addClass('d-none');
        $("#fn-txt-pass").closest('div').removeClass('errorempty');
    }
})

new Awesomplete('.emailpop', {
    minChars: 3,
    //autoFirst : true,
    list: ["gmail.com", "hotmail.com"],
    data: function (text, input) {
        return input + "@" + text;
    },
    filter: Awesomplete.FILTER_EMAILAUTO,
});

// imask identification card
var IDCardMaskPop = IMask(
    document.getElementById('IDCardpop'),
    {
        mask: '0-0000-00000-00-0'
    });

// imask phone number
var phoneNumberMaskPop = IMask(
    document.getElementById('phoneNumberpop'),
    {
        mask: '#!0-000-0000',
        definitions: {
            // <any single char>: <same type as mask (RegExp, Function, etc.)>
            // defaults are '0', 'a', '*'
            '#': /[0]/,
            '!': /[6-9]/
        }
    });

// imask name
var nameIDCardMaskPop = IMask(
    document.getElementById('nameIDCardpop'),
    {
        mask: /^[ก-ฮะ-์]+$/
    }
);

// imask surname
var surnameIDCardMaskPop = IMask(
    document.getElementById('surnameIDCardpop'),
    {
        mask: /^[ก-ฮะ-์]+$/
    }
);

// imask email
var emailMaskPop = IMask(
    document.getElementById('emailpop'),
    {
        mask: /^[a-zA-Z@._0-9]+$/

    }
);

// check length IDCard                   
function textLengthIDCard() {
    let cardID = document.getElementById('IDCardpop').parentElement;
    let lengthCardID = document.getElementById('IDCardpop').value.length;
    if (lengthCardID == 17) {
        cardID.classList.remove('errorvalid');
    } else if (lengthCardID > 0 && lengthCardID < 17) {
        cardID.classList.add('errorvalid');
    } else {
        cardID.classList.remove('errorvalid');
    }
}

// check length Phone Number
function textLengthPhoneNum() {
    let phoneNum = document.getElementById('phoneNumberpop').parentElement;
    let lengthPhoneNum = document.getElementById('phoneNumberpop').value.length;
    if (lengthPhoneNum == 12) {
        phoneNum.classList.remove('errorvalid');
    } else if (lengthPhoneNum > 0 && lengthPhoneNum < 12) {
        phoneNum.classList.add('errorvalid');
    } else {
        phoneNum.classList.remove('errorvalid');
    }
}

function isValidEmailAddress(emailAddress) {
    //var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    let pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return pattern.test(emailAddress);
};

// Check Validate Not Mat
$(".form-control").on('blur', function () {
    // Check Format Email
    if ($(this).hasClass("email") == true) {
        var VAL = $(this).val();
        if ($(this).val() != "") {
            var email = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
            if (email.test(VAL)) {
                $(this).parent().removeClass('errorvalid');
            } else {
                $(this).parent().addClass('errorvalid');
            }
        } else {
            $(this).parent().removeClass('errorvalid');
            $(this).parent().addClass('errorempty');
        }
    }
});

//$(this).parent().addClass('errorvalid');
function isEmail(email) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function submitCreate() {
    //alert("11");
    let txtIDCard = document.getElementById("IDCardpop");
    let txtnameIDCard = document.getElementById("nameIDCardpop");
    let txtsurnameIDCard = document.getElementById("surnameIDCardpop");
    let txtphoneNumber = document.getElementById("phoneNumberpop");
    let txtemail = document.getElementById("emailpop");

    if (txtIDCard.value == "") {
        txtIDCard.parentElement.classList.add("errorempty");
    }
    if (txtnameIDCard.value == "") {
        txtnameIDCard.parentElement.classList.add("errorempty");
    }
    if (txtsurnameIDCard.value == "") {
        txtsurnameIDCard.parentElement.classList.add("errorempty");
    }
    if (txtphoneNumber.value == "") {
        txtphoneNumber.parentElement.classList.add("errorempty");
    }
    if (txtemail.value == "") {
        txtemail.parentElement.classList.add("errorempty");
        $(".fn-valid-email").css({ "display": "block" });
    }

    var txtLogin = document.getElementById("fn-phonenum-email");

    txtLogin.parentElement.classList.remove("errorempty");

    var get1error = document.querySelectorAll(".errorempty")[0];
    var get2error = document.querySelectorAll(".errorvalid")[0];

    if (get1error != undefined) {
        setTimeout(function () {
            get1error.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
    } else if (get2error != undefined) {
        setTimeout(function () {
            get2error.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
    } else {
        alert(true);
        //window.location.href = "../1.5/info_createaccountselectchannel.html";
        $.ajax({
            type: "POST", //HTTP POST Method
            url: "/Signup/Signup", // Controller/action
            async: false,
            data: {
                IdentityNumber: $("#IDCardpop").val(),
                Firstname: $("#nameIDCardpop").val(),
                Lastname: $("#surnameIDCardpop").val(),
                Phonenumber: $("#phoneNumberpop").val(),
                Email: $("#emailpop").val()
            },
            success: function (result) {
                console.log(result);

                if (result == "1") {
                    //found IdentityNumber
                    $("#fn-info-error2").modal('show');

                }
                else if (result == "2") {
                    //found PhoneNumber or Email
                    $("#fn-info-error1").modal('show');
                }
                else if (result == "success") {
                    $("#divlogin").hide();
                    $("#divOTP").show();

                    $("#showNumberSelectOTP").text("เบอร์โทรศัพท์ " + $("#phoneNumberpop").val());
                    $("#showEmailSelectOTP").text("อีเมล " + $("#emailpop").val());
                }

                //if(result == "success"){
                //	alert(result);
                //}
            }
        });

    }
}

//  auto generate clear button text when focus input
Array.prototype.forEach.call(document.querySelectorAll(".fn-form-text"), function (el) {
    var input = el.querySelector("input");
    //conditionallyHideClearIcon();
    input.addEventListener("input", conditionallyHideClearIcon);
    //Click x Icon
    var checkSpan = el.querySelector('[data-clear-input]');
    // alert(checkSpan);
    if (checkSpan !== null) {
        checkSpan.addEventListener('click', function (e) {
            input.value = '';
            conditionallyHideClearIcon();
            IDCardMaskPop.updateValue();
            nameIDCardMaskPop.updateValue();
            surnameIDCardMaskPop.updateValue();
            phoneNumberMaskPop.updateValue();
            emailMaskPop.updateValue();
            $(this).parent().removeClass('errorvalid');
        });
    }

    //Input type text On change
    el.querySelector('input').addEventListener('blur', function (e) {
        var inputval = e.target.value;
        setTimeout(function () {
            e.target.nextElementSibling.style.display = 'none';
        }, 150);
        if (inputval == "") {
            e.target.parentElement.classList.add("errorempty");

        } else {
            e.target.parentElement.classList.remove("errorempty");

        }
    });


    el.querySelector('input').addEventListener('focus', function (e) {
        var inputval = e.target.value;
        if (inputval == "") {
            //e.target.parentElement.classList.add("errorempty");
            setTimeout(function () {
                e.target.nextElementSibling.style.display = 'none';
            }, 150);
        } else {
            e.target.parentElement.classList.remove("errorempty");
            setTimeout(function () {
                e.target.nextElementSibling.style.display = 'block';
            }, 150);
        }

    });

    function conditionallyHideClearIcon(e) {
        var target = (e && e.target) || input;
        target.nextElementSibling.style.display = target.value ? 'block' : 'none';
        target.value ? '' : target.parentElement.classList.remove("errorempty");
    }
});
