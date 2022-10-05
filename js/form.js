
$('.fn-form-text input[type="text"]').on('change', function () {
    if ($(this).val() == "") {
        $(this).parents().eq(0).removeClass('errorvalid');
    }
});

//  auto generate clear button text when focus input
Array.prototype.forEach.call(document.querySelectorAll(".fn-form-text"), function (el) {
    var input = el.querySelector("input[type='text']");

    //conditionallyHideClearIcon();
    input.addEventListener('input', conditionallyHideClearIcon);

    var checkSpanOrders = el.querySelector('[data-clear-input]');
    //Click x Icon
    if (checkSpanOrders !== null) {
        checkSpanOrders.addEventListener('click', function (e) {
            input.value = '';
            conditionallyHideClearIcon();
            IDCardMask.updateValue();
            phoneNumberMask.updateValue();
            postCodeMask.updateValue();
            postCodeMask2.updateValue();
            nameIDCardMask.updateValue();
            surnameIDCardMask.updateValue();
            $(this).parent().removeClass('errorvalid');
        })
    };

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

function showTitle(elm) {
    if (elm.val() == "") {
        elm.addClass("empty");
        elm.closest("div").addClass("errorempty");
    } else {
        elm.removeClass("empty");
        elm.closest("div").removeClass("errorempty");
    }
}

$(".form-select").blur(function () {
    showTitle($(this));
});

var dnow = new Date();
if (nday == null || nmonth == null || nyear == null) {
    nday = dnow.getDate();
    nmonth = dnow.getMonth();
    nyear = dnow.getFullYear();

    if (yearstart == null || yearstart == "") {
        yearstart = 0;
    }
}

else {
    yearstart = 0;
}



console.log(nday + " " + nmonth + " " + nyear);

const yearprotect = new Picker(document.querySelector('#startDateProtect'), {
    yearmax: 5,
    yearmin: 5,
    headers: true,
    controls: true,
    format: 'DD/MMMM/YYYY',
    container: 'DD-MM-YYYY',
    date: new Date(parseInt(nyear) + yearstart, nmonth, nday),
    container: '.picker-checkinsurance',
    text: {
        title: 'เลือกวันเริ่มต้นความคุ้มครอง',
        confirm: 'ยืนยัน'
    },
    translate(type, text) {
        return text;
    },
});

yearprotect.date = new Date((parseInt(nyear) + yearstart) + 543, nmonth, nday);


if (bdate == '' || mdate == '' || ydate == '') {
    bdate = 15;
    mdate = 5;
    ydate = 1987;
}

console.log(ydate + " " + mdate + " " + bdate);

const birthday = new Picker(document.querySelector('#birthday'), {
    yearmin: 100,
    headers: true,
    controls: true,
    format: 'DD/MMMM/YYYY',
    container: 'DD-MM-YYYY',
    date: new Date(ydate, mdate, bdate),
    text: {
        title: 'เลือกวันเกิด',
        confirm: 'ยืนยัน'
    },
    translate(type, text) {
        return text;
    },
});

birthday.date = new Date(parseInt(ydate) + 543, mdate, bdate);

// imask identification card
var IDCardMask = IMask(
    document.getElementById('IDCard'),
    {
        mask: '0-0000-00000-00-0'
    });

// imask phone number
var phoneNumberMask = IMask(
    document.getElementById('phoneNumber'),
    {
        mask: '#!0-000-0000',
        definitions: {
            // <any single char>: <same type as mask (RegExp, Function, etc.)>
            // defaults are '0', 'a', '*'
            '#': /[0]/,
            '!': /[6-9]/
        }
    });

// imask postcode
var postCodeMask = IMask(
    document.getElementById('txtzipcode'),
    {
        mask: '00000',
    });

// imask postcode2
var postCodeMask2 = IMask(
    document.getElementById('txtzipcode1'),
    {
        mask: '00000',
    });

// imask name
var nameIDCardMask = IMask(
    document.getElementById('nameIDCard'),
    {
        mask: /^[ก-ฮะ-์]+$/
    });

// imask surname
var surnameIDCardMask = IMask(
    document.getElementById('surnameIDCard'),
    {
        mask: /^[ก-ฮะ-์]+$/
    });

// radio address
function radioAddrHide() {
    document.getElementById('otherAddress').style.display = 'none';

    $('#otherAddress :input').each(function () {
        let elm = document.getElementById(this.id).parentElement;
        elm.classList.remove('errorempty');
    });
}

function radioAddrShow() {

    document.getElementById('otherAddress').style.display = 'flex';
    setTimeout(function () {
        document.getElementById('otherAddress').scrollIntoView({behavior: 'smooth'});
    }, 300);

    /*
    $('#otherAddress :input').each(function () {
        let elm = document.getElementById(this.id).parentElement;
        if (this.value == "") {
            elm.classList.add('errorempty');
        } else {
            elm.classList.remove('errorempty');

        }
    });*/

    $('#txtaddress1').on('change', function () {
        let txtArea = document.getElementById('txtaddress1').parentElement;
        if ($(this).val() == "") {
            txtArea.classList.add('errorempty');
        } else {
            txtArea.classList.remove('errorempty');
        }
    });
}

// check length IDCard                   
function textLengthIDCard() {
    let cardID = document.getElementById('IDCard').parentElement;
    let lengthCardID = document.getElementById('IDCard').value.length;
    if (lengthCardID == 17) {
        cardID.classList.remove('errorvalid');
    }

    else {
        cardID.classList.add('errorvalid');
    }
}

// check length Phone Number
function textLengthPhoneNum() {
    let phoneNum = document.getElementById('phoneNumber').parentElement;
    let lengthPhoneNum = document.getElementById('phoneNumber').value.length;
    if (lengthPhoneNum == 12) {
        phoneNum.classList.remove('errorvalid');
    }

    else {
        phoneNum.classList.add('errorvalid');
    }
}

// check length postcode

let postCode = document.querySelector("#txtzipcode");
let presentProv = document.querySelector("#ddlAddProv");
let presentDist = document.querySelector("#ddlAddDist");
let presentSubDist = document.querySelector("#ddlAddSubDist");

postCode.addEventListener('keyup', function () {
    if (postCode.value.length == 5) {
        presentProv.removeAttribute('disabled', false);
        presentDist.removeAttribute('disabled', false);
        presentSubDist.removeAttribute('disabled', false);
    }

    else {
        presentProv.setAttribute('disabled', '');
        presentDist.setAttribute('disabled', '');
        presentSubDist.setAttribute('disabled', '');
    }
});

// check length postcode2

let postCode2 = document.querySelector("#txtzipcode1");
let presentProv2 = document.querySelector("#ddlAddProv1");
let presentDist2 = document.querySelector("#ddlAddDist1");
let presentSubDist2 = document.querySelector("#ddlAddSubDist1");

postCode2.addEventListener('keyup', function () {
    if (postCode2.value.length == 5) {
        presentProv2.removeAttribute('disabled', false);
        presentDist2.removeAttribute('disabled', false);
        presentSubDist2.removeAttribute('disabled', false);
    }

    else {
        presentProv2.setAttribute('disabled', '');
        presentDist2.setAttribute('disabled', '');
        presentSubDist2.setAttribute('disabled', '');
    }
});
			
		


        const form_sec1 = document.getElementById('form-sec-1');
        const form_sec2 = document.getElementById('form-sec-2');
        const form_sec3 = document.getElementById('form-sec-3');
        const form_sec4 = document.getElementById('form-sec-4');
        const form_sec5 = document.getElementById('form-sec-5');

        const myInputs_sec1 = form_sec1.querySelectorAll("input,select");
        const myInputs_sec2 = form_sec2.querySelectorAll("input,select");
        const myInputs_sec3 = form_sec3.querySelectorAll("input,select");
        const myInputs_sec4 = form_sec4.querySelectorAll("input,select");
        const myInputs_sec5 = form_sec5.querySelectorAll("input,select");
        

        form_sec1.addEventListener("change", (event) => {
            const arrsec1val = Array.from(myInputs_sec1).filter(input => input.value == "");
            //console.log(arrsec1val);
            //let ver = true;
            if (arrsec1val.length) {
                //if input not full fill
            } else {
			
                document.getElementById('form-sec-2').style.display = "block";
				setTimeout(function () {
					document.getElementById('form-sec-2').scrollIntoView({behavior: 'smooth'});
				}, 300);
            }

        }, true);

        form_sec2.addEventListener("change", (event) => {
            const arrsec2val = Array.from(myInputs_sec2).filter(input => input.value == "");
            //console.log(arrsec1val) 
            let ver = true;
            if (arrsec2val.length) {
                //if input not full fill
            } else {
                document.getElementById('form-sec-3').style.display = "block";
				setTimeout(function () {
					document.getElementById('form-sec-3').scrollIntoView({behavior: 'smooth'});
				}, 300);
            }

        }, true);

        form_sec3.addEventListener("change", (event) => {
            const arrsec2val = Array.from(myInputs_sec3).filter(input => input.value == "");
            //console.log(arrsec1val) 
            let ver = true;
            if (arrsec2val.length) {
                //if input not full fill
            } else {
                document.getElementById('form-sec-4').style.display = "block";
                document.getElementById('form-sec-5').style.display = "block";
				setTimeout(function () {
					document.getElementById('form-sec-4').scrollIntoView({behavior: 'smooth'});
                    document.getElementById('form-sec-5').scrollIntoView({behavior: 'smooth'});
				}, 300);
            }

        }, true);

        form_sec4.addEventListener("change", (event) => {
            const arrsec2val = Array.from(myInputs_sec4).filter(input => input.value == "");
            //console.log(arrsec1val) 
            let ver = true;
            if (arrsec2val.length) {
                //if input not full fill
            } else {
                document.getElementById('form-sec-5').style.display = "block";
				setTimeout(function () {
					document.getElementById('form-sec-5').scrollIntoView({behavior: 'smooth'});
				}, 300);
            }

        }, true);


    
        function fornsend() {

			//alert("11");
           var get1error = document.querySelectorAll(".errorempty")[0];
           
           if(get1error != undefined){
            setTimeout(function () {
                get1error.scrollIntoView({behavior: 'smooth', block: 'center'});
            }, 200);
           }else{
            $('#modalinfo').modal('show');
           }

    
        }       
