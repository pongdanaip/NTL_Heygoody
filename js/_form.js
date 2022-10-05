
new Picker(document.querySelector('#startDateProtect'), {
    headers: true,
    controls: true,
    format: 'DD/MMMM/YYYY',
    container: 'DD-MM-YYYY',
    text: {
        title: 'เลือกวันเริ่มต้นความคุ้มครอง',
        confirm: 'ยืนยัน'
    },
    translate(type, text) {
        return text;
    }
});

const birthday = new Picker(document.querySelector('#birthday'), {
    headers: true,
    controls: true,
    format: 'DD/MMMM/YYYY',
    container: 'DD-MM-YYYY',
    date: new Date(1987, 5, 15),
    text: {
        title: 'เลือกวันเกิด',
        confirm: 'ยืนยัน'
    },
    translate(type, text) {
        return text;
    }
});

birthday.date = new Date(1987 + 543, 5, 15);

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
    document.getElementById('postCode'),
    {
        mask: '00000',
    });

// imask postcode2
var postCodeMask = IMask(
    document.getElementById('postCode2'),
    {
        mask: '00000',
    });

// imask name
var phoneNumberMask = IMask(
    document.getElementById('nameIDCard'),
    {
        mask: /^[a-zA-Zก-ฮะ-์]+$/
    });

// imask surname
var phoneNumberMask = IMask(
    document.getElementById('surnameIDCard'),
    {
        mask: /^[a-zA-Zก-ฮะ-์]+$/
    });

// radio address
function radioAddrHide() {
    document.getElementById('otherAddress').style.display = 'none';
}

function radioAddrShow() {
    document.getElementById('otherAddress').style.display = 'flex';
    setTimeout(function () {
        document.getElementById('otherAddress').scrollIntoView({behavior: 'smooth'});
    }, 300);
    
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

let postCode = document.querySelector("#postCode");
let presentProv = document.querySelector("#presentProvince");
let presentDist = document.querySelector("#presentDistrict");
let presentSubDist = document.querySelector("#presentSubDistrict");

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

let postCode2 = document.querySelector("#postCode2");
let presentProv2 = document.querySelector("#presentProvince2");
let presentDist2 = document.querySelector("#presentDistrict2");
let presentSubDist2 = document.querySelector("#presentSubDistrict2");

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
