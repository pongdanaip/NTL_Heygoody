$(".modal.animate__animated").on('shown.bs.modal', function () {
    if (!$(this).hasClass('animate__fadeIn')) {
        $(this).removeClass('animate__fadeOut fn-modal-out');
        $(this).addClass('animate__fadeIn fn-modal-in');
        $("body").append("<div class='modal-backdrop fn-modal-fade show'></div>");
    }
});

$(".modal.animate__animated").on('hidden.bs.modal', function () {
    if (!$(this).hasClass('animate__fadeOut')) {
        $(this).removeClass('animate__fadeIn fn-modal-in');
        $(this).addClass('animate__fadeOut fn-modal-out');
        $("body").find(".fn-modal-fade").removeClass("show");
        $("body").addClass("fn-body-modal");
        setTimeout(function () {
            $(".modal.animate__animated").removeClass('animate__fadeOut fn-modal-out');
            $("body").find(".fn-modal-fade").remove();
        }, 250);
    }
});

// Progress Bar
var width = 12.5;
function moveProgress(elm) {
    var elem = document.getElementById("progress");
    if (width < elm) {
        width = width + 12.5;
        elem.style.width = width + "%";
    } else if (width > 95) {
        width = 100;
        elem.style.width = width + "%";
    }
}

// Selecter
function removeClass() {
    var elm = document.getElementById("car-brand");
    elm.classList.remove("empty")
}

var radioBarnd = document.getElementsByName("fn-carbrand");
for (var i = 0; i < radioBarnd.length; i++) {
    radioBarnd[i].addEventListener('change', function () {
        document.getElementById('car-brand').selectedIndex = this.value;
        removeClass();
    });
}

var selectBarnd = document.getElementById("form-carinfo-barnds");
selectBarnd.addEventListener('change', function () {
    var checkBarnd = selectBarnd.value;
    if (checkBarnd >= 1 && checkBarnd <= 10) {
        for (var i = 0; i < selectBarnd.selectedIndex; i++) {
            radioBarnd[(selectBarnd.selectedIndex) - 1].checked = true;
        }
    } else {
        for (var i = 0; i < selectBarnd.length; i++) {
            radioBarnd[i].checked = false;
        }
    }

});

$(document).ready(function () {
    function showTitle(elm) {
        if (elm.val() == "") {
            elm.addClass("empty");
            elm.closest("div").addClass("errorempty");
        } else {
            elm.removeClass("empty");
            elm.closest("div").removeClass("errorempty");
        }
    }

    $(".form-select").change(function () {
        showTitle($(this));
    })
});

// Link HTML notfound
var carCustom = document.getElementsByName("fn-carcustom");
for (var i = 0; i < carCustom.length; i++) {
    carCustom[i].addEventListener('change', function () {
        var checkCarcustom = document.getElementById("fn-custom-yes");
        if (checkCarcustom.checked == true) {
            window.location.href = "../1.1/carinfo_notfound_special.html";
        }
    });
}

var carUse = document.getElementsByName("fn-caruse");
for (var i = 0; i < carCustom.length; i++) {
    carUse[i].addEventListener('change', function () {
        var checkCaruse = document.getElementById("fn-caruse-commerce");
        if (checkCaruse.checked == true) {
            window.location.href = "../1.1/carinfo_notfound_special.html";
        }
    });
}

// Clear Select Insurance
/*
var carInsurance = document.getElementById("fn-insurance-no");
carInsurance.addEventListener('click', function () {
    var clearSelectIns = document.getElementById("carinfo-insurance");
    if (clearSelectIns.selectedIndex != 0) {
        clearSelectIns.selectedIndex = 0;
        var checkSelect = document.getElementById("carinfo-insurance");
        checkSelect.classList.add("empty")
    }

});
*/
// แสดงผลทีละ SEC
const form_carbarnds = document.getElementById('form-carinfo-barnds');
const form_carmodel = document.getElementById('ddlmodel2');
const form_caryear = document.getElementById('ddlyear');
const form_cardetails = document.getElementById('ddlsubmodel');
const form_carcustom = document.getElementById('rdoobjective');
const form_caruse = document.getElementById('rdodetail');
const form_carinsurance = document.getElementById('ddlinsu');
const form_expiryyear = document.getElementById('yearnow');

const myInputs_carbarnds = form_carbarnds.querySelectorAll("input,select");
const myInputs_carmodel = form_carmodel.querySelectorAll("input,select");
const myInputs_caryear = form_caryear.querySelectorAll("input,select");
const myInputs_cardetails = form_cardetails.querySelectorAll("input,select");
const myInputs_carcustom = form_carcustom.querySelectorAll("input,select");
const myInputs_caruse = form_caruse.querySelectorAll("input,select");
const myInputs_carinsurance = form_carinsurance.querySelectorAll("input,select");
const myInputs_expiryyear = form_expiryyear.querySelectorAll("input,select");


form_carbarnds.addEventListener("change", (event) => {
    $("#form-carinfo-barnds").removeClass("fn-100vh");
    $("#ddlmodel2").addClass("fn-100vh");
    $("#fn-content-carinfo").removeClass("pb32-96");
    document.getElementById('ddlmodel2').style.display = "block";
    setTimeout(function () {
        document.getElementById('ddlmodel2').scrollIntoView({ behavior: 'smooth', block: "nearest"});
    }, 300);
    moveProgress(25);
});


form_carmodel.addEventListener("change", (event) => {
    $("#ddlmodel2").removeClass("fn-100vh");
    $("#ddlyear").addClass("fn-100vh");
    $("#fn-content-carinfo").removeClass("pb32-96");
    document.getElementById('ddlyear').style.display = "block";
    setTimeout(function () {
        document.getElementById('ddlyear').scrollIntoView({ behavior: 'smooth', block: "nearest" });
    }, 300);
    moveProgress(37.5);
});

form_caryear.addEventListener("change", (event) => {
    $("#ddlyear").removeClass("fn-100vh");
    $("#ddlsubmodel").addClass("fn-100vh");
    $("#fn-content-carinfo").removeClass("pb32-96");
    document.getElementById('ddlsubmodel').style.display = "block";
    setTimeout(function () {
        document.getElementById('ddlsubmodel').scrollIntoView({ behavior: 'smooth', block: "nearest" });
    }, 300);
    moveProgress(50);
});

form_cardetails.addEventListener("change", (event) => {
    $("#ddlsubmodel").removeClass("fn-100vh");
    $("#rdoobjective").addClass("fn-100vh");
    $("#fn-content-carinfo").removeClass("pb32-96");
    document.getElementById('rdoobjective').style.display = "block";
    setTimeout(function () {
        document.getElementById('rdoobjective').scrollIntoView({ behavior: 'smooth', block: "nearest" });
    }, 300);
    moveProgress(62.5);
});

form_carcustom.addEventListener("change", (event) => {
    $("#rdoobjective").removeClass("fn-100vh");
    $("#rdodetail").addClass("fn-100vh");
    $("#fn-content-carinfo").removeClass("pb32-96");
    document.getElementById('rdodetail').style.display = "block";
    setTimeout(function () {
        document.getElementById('rdodetail').scrollIntoView({ behavior: 'smooth', block: "nearest" });
    }, 300);
    moveProgress(75);
});

form_caruse.addEventListener("change", (event) => {
    $("#rdodetail").removeClass("fn-100vh");
    $("#ddlinsu").addClass("fn-100vh");
    $("#fn-content-carinfo").removeClass("pb32-96");
    document.getElementById('ddlinsu').style.display = "block";
    setTimeout(function () {
        document.getElementById('ddlinsu').scrollIntoView({ behavior: 'smooth', block: "nearest" });
    }, 300);
    moveProgress(87.5);
});

form_carinsurance.addEventListener("change", (event) => {
    $("#ddlinsu").removeClass("fn-100vh");
    $("#yearnow").addClass("fn-100vh");
    $("#fn-content-carinfo").removeClass("pb32-96");
    document.getElementById('yearnow').style.display = "block";
    setTimeout(function () {
        document.getElementById('yearnow').scrollIntoView({ behavior: 'smooth', block: "nearest" });
    }, 300);
    moveProgress(100);
});


$(document).ready(function () {
    //$("#form-carinfo-barnds").addClass("fn-100vh");
});
