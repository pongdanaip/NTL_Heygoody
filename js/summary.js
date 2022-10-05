$('#fnFilterReset, #fnFilterResetFooter').on('click', function () {
    $('.fn-offcanvas').trigger("reset");
    $('#fnFilterBadge').empty();
});

$('#fnFilterTypeBtn').on('click', function () {
    $('#fnFilterTypeBtn').toggleClass("show");
    $('#fnFilterType').toggle();
});

$('#fnFilterDamagesBtn').on('click', function () {
    $('#fnFilterDamagesBtn').toggleClass("show");
    $('#fnFilterDamages').toggle();
});

$('#fnFilterInsuranceBtn').on('click', function () {
    $('#fnFilterInsuranceBtn').toggleClass("show");
    $('#fnFilterInsurance').toggle();
});

function checkboxCount() {
    var check = $('.fn-offcanvas').find('input[type=checkbox]:checked').length;

    if (check > 0) {
        $('#fnFilterBadge').text(check);
    } else {
        $('#fnFilterBadge').empty();
    }
}

$('.fn-offcanvas input[type="checkbox"]').click(function () {
    checkboxCount();
});

$('#fnOffcanvasBtn').on('click', function () {
    $('#fnOffcanvas').addClass("h-100");
    $('#fnOffcanvas .fn-offcanvas-header').toggleClass("d-none");
    $('#fnOffcanvas .fn-offcanvas-footer').toggleClass("d-none");
});

$('#fnOffcanvasBtnClose').on('click', function () {
    $('#fnOffcanvas').removeClass("h-100");
    $('#fnOffcanvas .fn-offcanvas-header').toggleClass("d-none");
    $('#fnOffcanvas .fn-offcanvas-footer').toggleClass("d-none");
});

var fixTop = $('.fn-filter').offset().top;
var modalDisplay = "d-none";

$(window).scroll(function () {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixTop) {
        $('.fn-filter').css({
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1',
            width: '100%'
        });
        modalDisplay = "";
        $('.fn-filter .modal-backdrop').removeClass('d-none');
    } else {
        $('.fn-filter').css({
            position: 'static'
        });
        modalDisplay = "d-none";
        $('.fn-filter .modal-backdrop').addClass('d-none');
    }
});

$('.sorting.form-select').on('click', function (e) {
    if (window.matchMedia('(max-width: 1199px)').matches) {
        $(this).parent().find("ul").addClass("animate__fadeInUp");
        $(this).parent().find("ul").removeClass("animate__fadeOutDown");
        $(this).parent().find("ul").removeClass("fn-list-hide");
        $(".fn-filter").append(`<div class="modal-backdrop fade show ${modalDisplay}" style="z-index: 0;"></div>`);
        $("body").append('<div class="modal-backdrop fade show" style="z-index: 0;"></div>');

    }
    $('html').one('click', function () {
        $(".modal-backdrop").remove();
        $('.sorting-list').find("ul").removeClass("animate__fadeInUp");
        $('.sorting-list').find("ul").addClass("animate__fadeOutDown");
        $('.sorting-list').find("ul").addClass("fn-list-hide");
    });
    e.stopPropagation();
});

$('.sorting-list .option').on('click', function () {
    $(".modal-backdrop").remove();
    $('.sorting-list').find("ul").eq(0).removeClass("animate__fadeInUp");
    $('.sorting-list').find("ul").eq(0).addClass("animate__fadeOutDown");
    $('.sorting-list').find("ul").eq(0).addClass("fn-list-hide");
});

$('#fnSortingBtn .option').on('click', function () {
    const val = $(this).val();
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
    $(`#fnSortingSelect .option[value="${val}"]`).addClass("selected");
    $(`#fnSortingSelect .option[value="${val}"]`).siblings().removeClass("selected");
    $(this).parents().eq(1).find(".sorting.form-select").html(`<small>เรียงข้อมูล</small><span class="mb6"><img src="/Content/images/icon-16-grey-sortby.svg"> ${$(this).text()}`);
    $('#fnSortingSelect .option').parents().eq(1).find(".sorting.form-select").text($(this).text());
});

$('#fnSortingSelect .option').on('click', function () {
    const val = $(this).val();
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
    $(`#fnSortingBtn .option[value="${val}"]`).addClass("selected");
    $(`#fnSortingBtn .option[value="${val}"]`).siblings().removeClass("selected");
    $(this).parents().eq(1).find(".sorting.form-select").text($(this).text());
    $('#fnSortingBtn .option').parents().eq(1).find(".sorting.form-select").html(`<small>เรียงข้อมูล</small><span class="mb6"><img src="/Content/images/icon-16-grey-sortby.svg"> ${$(this).text()}`);
});

$('#fnClassBtn .option').on('click', function () {
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
    $(this).parents().eq(1).find(".sorting.form-select").html(`<small>ชั้นประกัน</small><span class="mb6">${$(this).text()} <img src="/Content/images/icon-16-grey-down.svg"></span>`);
    $('#fnClassBtnGroup input').filter(`[id="fn-radio${$(this).val()}"]`).prop('checked', true);
});

$('#fnClassBtnGroup input').on('click', function () {
    const text = $('#fnClassBtnGroup input:radio:checked').next('label:first').html();
    const val = $('#fnClassBtnGroup input:radio:checked').val();
    $('#fnClassBtn .option').parents().eq(1).find(".sorting.form-select").html(`<small>ชั้นประกัน</small><span class="mb6">${text} <img src="/Content/images/icon-16-grey-down.svg"></span>`);
    $(`#fnClassBtn .option[value="${val}"]`).addClass("selected");
    $(`#fnClassBtn .option[value="${val}"]`).siblings().removeClass("selected");
});

$(".fn-checkbox-type").change(function () {
    $(".fn-checkbox-type").not(this).prop('checked', false);
    checkboxCount();
});

$(".fn-checkbox-damages").change(function () {
    $(".fn-checkbox-damages").not(this).prop('checked', false);
    checkboxCount();
});

Array.prototype.forEach.call(document.querySelectorAll(".fn-tooltip-overlay"), function (el) {

    var tooltipbtn = el.querySelector(".fn-tooltip-btn");

    var firstparentwidth = el.getBoundingClientRect().width;
    var firstparentPos = el.getBoundingClientRect(),
        firstchildPos = el.querySelector('.fn-tooltip-btn').getBoundingClientRect(),
        firstrelativePos = {};

    if (window.matchMedia('(max-width: 991px)').matches) {
        tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.width = ($('.fn-modal-config').width() - 40) + "px";
    } else {
        tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.width = firstparentwidth + "px";
        tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.left = (firstrelativePos.left * -1) + 5 + "px";
    }

    $(window).resize(function () {
        firstparentwidth = el.getBoundingClientRect().width;
        firstparentPos = el.getBoundingClientRect(),
            firstchildPos = el.querySelector('.fn-tooltip-btn').getBoundingClientRect(),
            firstrelativePos = {};

        if (window.matchMedia('(max-width: 991px)').matches) {
            tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.width = ($('.fn-modal-config').width() - 40) + "px";
        } else {
            tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.width = firstparentwidth + "px";
            tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.left = (firstrelativePos.left * -1) + 5 + "px";
        }
    });


    tooltipbtn.addEventListener('click', function (e) {

        var popupheight = e.target.parentElement.querySelector(".fn-tooltip-block").offsetHeight;
        var parentwidth = e.target.parentElement.offsetWidth;

        var parentPos = document.querySelector('.fn-tooltip').getBoundingClientRect(),
            childPos = document.querySelector('.fn-tooltip-btn').getBoundingClientRect(),
            relativePos = {};

        relativePos.top = childPos.top - parentPos.top,
            relativePos.right = childPos.right - parentPos.right,
            relativePos.bottom = childPos.bottom - parentPos.bottom,
            relativePos.left = childPos.left - parentPos.left;

        e.target.parentElement.querySelector(".fn-tooltip-block").classList.toggle("show");
        e.target.parentElement.querySelector(".fn-tooltip-block").style.top = (popupheight) * -1 + "px";
        e.target.parentElement.querySelector(".fn-tooltip-fake").classList.remove("d-none");

        if (window.matchMedia('(max-width: 991px)').matches) {
            let leftPos = e.target.parentElement.querySelector(".fn-tooltip-block").getBoundingClientRect();
            e.target.parentElement.querySelector(".fn-tooltip-block").style.width = ($('.fn-modal-config').width() - 40) + "px";
            e.target.parentElement.querySelector(".fn-tooltip-block").style.left = (leftPos.left - 25) * -1 + "px";
        } else {
            e.target.parentElement.querySelector(".fn-tooltip-block").style.width = parentwidth + "px";
            e.target.parentElement.querySelector(".fn-tooltip-block").style.left = (relativePos.left) * -1 + "px";
        }
    });
});

$(document).mouseup(function (e) {
    var tooltip_ab = $(".fn-tooltip-btn");
    if (tooltip_ab.has(e.target).length === 0) {
        $(".fn-tooltip-block").removeClass("show");
        $(".fn-tooltip-fake").addClass("d-none");
    }
});

// var fixTop = $('.fn-filter').offset().top;
// $(window).scroll(function() {
//     var currentScroll = $(window).scrollTop();
//     if (currentScroll >= fixTop) {
//         $('.fn-filter').css({
//             position: 'fixed',
//             top: '0',
//             left: '0',
//             zIndex: '1',
//             width: '100%'
//         });
//     } else {
//         $('.fn-filter').css({
//             position: 'static'
//         });
//     }
// });
/*
let compareModal = new bootstrap.Modal($('#fnCompareAlert'));

function compareCount() {
    let check = $('.fn-card-1').find('input[type=checkbox]:checked').length;

    if (check > 0) {
        $('.fn-compare-fixed').addClass('show');
    } else {
        $('.fn-compare-fixed').removeClass('show');
    }

    if (window.matchMedia('(max-width: 991px)').matches) {
        if (check > 3) {
            $('#fnCompareAlert #fnTitle2').addClass('d-block');
            compareModal.show();
        }
    } else {
        if (check > 4) {
            $('#fnCompareAlert #fnTitle3').addClass('d-block');
            compareModal.show();
        }
    }

    $('#fnCompareAlert').on('hidden.bs.modal', () => {
        $('#fnCompareAlert .fn-modal-title').removeClass('d-block');
    });
}
*/

function compareCountMin() {
    let check = $('.fn-card-1').find('input[type=checkbox]:checked').length;

    if (check < 2) {
        $('#fnCompareAlert #fnTitle1').addClass('d-block');
        compareModal.show();
    }

    $('#fnCompareAlert').on('hidden.bs.modal', () => {
        $('#fnCompareAlert .fn-modal-title').removeClass('d-block');
    });
}

var planArray = [];

function compareQuote() {
    $('.fn-card-1 input[type="checkbox"]').each(function () {
        let comp = $(this).parent().parent().parent().parent().parent().parent().parent();

        comp1 = comp.find('.flex-shrink-0 img').attr('src');
        comp2 = comp.find('h5.card-subtitle').text();
        comp3 = comp.find('h1').text();
        compId = comp.attr('id');

        comp2 = comp2.substring(6, 12);
        comp3 = comp3.substring(0, 9);

        let html1 = `<div class="fn-compare-body" id="${compId}">
                        <a href="javascript:;" class="fn-compare-close">
                            <img src="../images/icon-32-grey-close-circle-bar.svg" alt="">
                        </a>
                        <img class="fn-compare-img" src="${comp1}" alt="">
                        <div class="fn-compare-text">
                            <div class="fn-compare-class">${comp2}</div>
                            <div class="fn-compare-price">${comp3}</div>
                        </div>
                    </div>`;

        $(this).change(function () {
            compareCount();

            if (window.matchMedia('(max-width: 991px)').matches) {
                if ($('input[type=checkbox]:checked').length > 3) {
                    $(this).prop('checked', false);
                }
            } else {
                if ($('input[type=checkbox]:checked').length > 4) {
                    $(this).prop('checked', false);
                }
            }

            if (this.checked) {
                if (window.matchMedia('(max-width: 991px)').matches) {
                    if (planArray.length < 3) {
                        planArray.push(html1);
                    }
                } else {
                    if (planArray.length < 4) {
                        planArray.push(html1);
                    }
                }
            } else {
                var index = planArray.indexOf(html1);
                if (index > -1) {
                    planArray.splice(index, 1);
                }
            }

            for (var i = 0; i <= 3; i++) {
                if (!planArray[i]) {
                    $(`#fnCompare${i + 1}`).html(`<div class="fn-compare-body">
                                                    <div class="fn-compare-text-muted">รายการที่ ${i + 1}</div>
                                                </div>`);
                } else {
                    $(`#fnCompare${i + 1}`).html(planArray[i]);
                }
            }

        });
    });
}

$(document).ready(function () {
    //$(document).on("click", ".fn-compare-close", function () {
    //    let comp = $(this).parent().parent().attr('id');
    //    comp = comp ? comp.substring(9) : "";
    //    planArray.splice(comp - 1, 1);

    //    let compId = $(this).parent().attr('id');
    //    $(`#${compId}`).find("input[type=checkbox]:checked").prop('checked', false);

    //    for (var i = 0; i <= 3; i++) {
    //        if (!planArray[i]) {
    //            $(`#fnCompare${i + 1}`).html(`<div class="fn-compare-body">
    //                                            <div class="fn-compare-text-muted">รายการที่ ${i + 1}</div>
    //                                        </div>`);
    //        } else {
    //            $(`#fnCompare${i + 1}`).html(planArray[i]);
    //        }
    //    }
    //    //compareCount();
    //});
});

$('#fnCompareBtn').click(function () {
    //compareCountMin();
});

let phHtml = `<div class="fn-placeholder animate__animated animate__fadeIn">
                <div class="ph-item mb24">
                    <div class="ph-col-12">
                        <div class="row">
                            <div class="col-lg mb36">
                                <div class="ph-row">
                                    <div class="ph-col-156 big mb24 d-lg-none"></div>
                                    <div class="ph-row d-none d-lg-flex">
                                        <div class="ph-col-166 mb12"></div>
                                        <div class="ph-col-166 mb28"></div>
                                    </div>
                                    <div class="ph-col-52 big mb24"></div>
                                </div>
                                <div class="ph-row">
                                    <div class="ph-col-12 mb16"></div>
                                </div>
                                <div class="ph-row">
                                    <div class="ph-col-12"></div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="ph-row justify-content-between">
                                    <div class="ph-col-132 mb39"></div>
                                    <div class="ph-col-132 mb39"></div>
                                </div>
                                <div class="ph-row justify-content-between">
                                    <div class="ph-row">
                                        <div class="ph-col-156-2 mb16"></div>
                                        <div class="ph-col-124-2"></div>
                                    </div>
                                    <div class="ph-col-93 big-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ph-item mb24">
                    <div class="ph-col-12">
                        <div class="row">
                            <div class="col-lg mb36">
                                <div class="ph-row">
                                    <div class="ph-col-156 big mb24 d-lg-none"></div>
                                    <div class="ph-row d-none d-lg-flex">
                                        <div class="ph-col-166 mb12"></div>
                                        <div class="ph-col-166 mb28"></div>
                                    </div>
                                    <div class="ph-col-52 big mb24"></div>
                                </div>
                                <div class="ph-row">
                                    <div class="ph-col-12 mb16"></div>
                                </div>
                                <div class="ph-row">
                                    <div class="ph-col-12"></div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="ph-row justify-content-between">
                                    <div class="ph-col-132 mb39"></div>
                                    <div class="ph-col-132 mb39"></div>
                                </div>
                                <div class="ph-row justify-content-between">
                                    <div class="ph-row">
                                        <div class="ph-col-156-2 mb16"></div>
                                        <div class="ph-col-124-2"></div>
                                    </div>
                                    <div class="ph-col-93 big-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ph-item mb24">
                    <div class="ph-col-12">
                        <div class="row">
                            <div class="col-lg mb36">
                                <div class="ph-row">
                                    <div class="ph-col-156 big mb24 d-lg-none"></div>
                                    <div class="ph-row d-none d-lg-flex">
                                        <div class="ph-col-166 mb12"></div>
                                        <div class="ph-col-166 mb28"></div>
                                    </div>
                                    <div class="ph-col-52 big mb24"></div>
                                </div>
                                <div class="ph-row">
                                    <div class="ph-col-12 mb16"></div>
                                </div>
                                <div class="ph-row">
                                    <div class="ph-col-12"></div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="ph-row justify-content-between">
                                    <div class="ph-col-132 mb39"></div>
                                    <div class="ph-col-132 mb39"></div>
                                </div>
                                <div class="ph-row justify-content-between">
                                    <div class="ph-row">
                                        <div class="ph-col-156-2 mb16"></div>
                                        <div class="ph-col-124-2"></div>
                                    </div>
                                    <div class="ph-col-93 big-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

let quoteHtml = `<div class="animate__animated animate__fadeInUp">
                    <img src="../images/illustrate-quote-tag-sale.png">
                        <div class="card fn-card-1 fn-card-1-first mb24" id="quote1">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="card-body fn-card-body-1">
                                        <div class="d-flex flex-lg-row-reverse mb12">
                                            <div class="flex-grow-1">
                                                <h5 class="card-title">ทิพยประกันภัย</h5>
                                                <h5 class="card-subtitle">ประกันชั้น 1 <img src="../images/icon-other-grey-slash.svg"> ซ่อมอู่</h5>
                                            </div>
                                            <div class="flex-shrink-0 me-lg-3">
                                                <img src="../images/image-logo-square-big-tip.png" alt="">
                                            </div>
                                        </div>
                                        <div class="row mb8">
                                            <div class="col card-text">ทุนประกัน</div>
                                            <div class="col card-text text-end">1,000,000 บาท</div>
                                        </div>
                                        <div class="row">
                                            <div class="col card-text">ค่าเสียหายส่วนแรก</div>
                                            <div class="col card-text text-end">มี</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card-body fn-card-body-2">
                                        <div class="row g-0">
                                            <div class="col">
                                                <button class="fn-button fn-btn-M fn-btn-secondary" data-bs-toggle="modal" data-bs-target="#quotePopup">
                                                    <img src="../images/icon-24-green-detail.svg"> ดูรายละเอียด
                                                </button>
                                            </div>
                                            <div class="col">
                                                <div class="fn-checkbox fn-checkbox-m">
                                                    <input type="checkbox" name="fn-checkbox22" id="fn-checkbox22">
                                                    <label for="fn-checkbox22">
                                                        <div class="check"><span></span></div>
                                                        <span>เปรียบเทียบ</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body fn-card-body-3">
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <h1 class="card-title">12,000.00 <small>บาท/ปี</small></h1>
                                                <small class="card-subtitle">ผ่อน 0% สูงสุด 10 เดือน</small>
                                            </div>
                                            <div class="d-flex align-items-end">
                                                <button class="fn-button fn-btn-M fn-btn-primary">ซื้อเลย</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img src="../images/illustrate-quote-tag-recommend.png">
                        <div class="card fn-card-1 fn-card-1-first mb24" id="quote2">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="card-body fn-card-body-1">
                                        <div class="d-flex flex-lg-row-reverse mb12">
                                            <div class="flex-grow-1">
                                                <h5 class="card-title">กรุงไทยพาณิชประกันภัย</h5>
                                                <h5 class="card-subtitle">ประกันชั้น 1 <img src="../images/icon-other-grey-slash.svg"> ซ่อมอู่</h5>
                                            </div>
                                            <div class="flex-shrink-0 me-lg-3">
                                                <img src="../images/image-logo-square-big-kpi.png" alt="">
                                            </div>
                                        </div>
                                        <div class="row mb8">
                                            <div class="col card-text">ทุนประกัน</div>
                                            <div class="col card-text text-end">1,000,000 บาท</div>
                                        </div>
                                        <div class="row">
                                            <div class="col card-text">ค่าเสียหายส่วนแรก</div>
                                            <div class="col card-text text-end">มี</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card-body fn-card-body-2">
                                        <div class="row g-0">
                                            <div class="col">
                                                <button class="fn-button fn-btn-M fn-btn-secondary" data-bs-toggle="modal" data-bs-target="#quotePopup">
                                                    <img src="../images/icon-24-green-detail.svg"> ดูรายละเอียด
                                                </button>
                                            </div>
                                            <div class="col">
                                                <div class="fn-checkbox fn-checkbox-m">
                                                    <input type="checkbox" name="fn-checkbox23" id="fn-checkbox23">
                                                    <label for="fn-checkbox23">
                                                        <div class="check"><span></span></div>
                                                        <span>เปรียบเทียบ</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body fn-card-body-3">
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <h1 class="card-title">15,000.73 <small>บาท/ปี</small></h1>
                                                <small class="card-subtitle">ผ่อน 0% สูงสุด 10 เดือน</small>
                                            </div>
                                            <div class="d-flex align-items-end">
                                                <button class="fn-button fn-btn-M fn-btn-primary">ซื้อเลย</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card fn-card-1 mb24" id="quote3">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="card-body fn-card-body-1">
                                        <div class="d-flex flex-lg-row-reverse mb12">
                                            <div class="flex-grow-1">
                                                <h5 class="card-title">วิริยะประกันภัย</h5>
                                                <h5 class="card-subtitle">ประกันชั้น 1 <img src="../images/icon-other-grey-slash.svg"> ซ่อมห้าง</h5>
                                            </div>
                                            <div class="flex-shrink-0 me-lg-3">
                                                <img src="../images/image-logo-square-big-viriyah.png" alt="">
                                            </div>
                                        </div>
                                        <div class="row mb8">
                                            <div class="col card-text">ทุนประกัน</div>
                                            <div class="col card-text text-end">1,000,000 บาท</div>
                                        </div>
                                        <div class="row">
                                            <div class="col card-text">ค่าเสียหายส่วนแรก</div>
                                            <div class="col card-text text-end">มี</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card-body fn-card-body-2">
                                        <div class="row g-0">
                                            <div class="col">
                                                <button class="fn-button fn-btn-M fn-btn-secondary" data-bs-toggle="modal" data-bs-target="#quotePopup">
                                                    <img src="../images/icon-24-green-detail.svg"> ดูรายละเอียด
                                                </button>
                                            </div>
                                            <div class="col">
                                                <div class="fn-checkbox fn-checkbox-m">
                                                    <input type="checkbox" name="fn-checkbox24" id="fn-checkbox24">
                                                    <label for="fn-checkbox24">
                                                        <div class="check"><span></span></div>
                                                        <span>เปรียบเทียบ</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body fn-card-body-3">
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <h1 class="card-title">20,000.56 <small>บาท/ปี</small></h1>
                                                <small class="card-subtitle">ผ่อน 0% สูงสุด 10 เดือน</small>
                                            </div>
                                            <div class="d-flex align-items-end">
                                                <button class="fn-button fn-btn-M fn-btn-primary">ซื้อเลย</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card fn-card-1 mb24" id="quote4">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="card-body fn-card-body-1">
                                        <div class="d-flex flex-lg-row-reverse mb12">
                                            <div class="flex-grow-1">
                                                <h5 class="card-title">กรุงเทพประกันภัย</h5>
                                                <h5 class="card-subtitle">ประกันชั้น 1 <img src="../images/icon-other-grey-slash.svg"> ซ่อมห้าง</h5>
                                            </div>
                                            <div class="flex-shrink-0 me-lg-3">
                                                <img src="../images/image-logo-square-big-bangkok.png" alt="">
                                            </div>
                                        </div>
                                        <div class="row mb8">
                                            <div class="col card-text">ทุนประกัน</div>
                                            <div class="col card-text text-end">1,000,000 บาท</div>
                                        </div>
                                        <div class="row">
                                            <div class="col card-text">ค่าเสียหายส่วนแรก</div>
                                            <div class="col card-text text-end">มี</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card-body fn-card-body-2">
                                        <div class="row g-0">
                                            <div class="col">
                                                <button class="fn-button fn-btn-M fn-btn-secondary" data-bs-toggle="modal" data-bs-target="#quotePopup">
                                                    <img src="../images/icon-24-green-detail.svg"> ดูรายละเอียด
                                                </button>
                                            </div>
                                            <div class="col">
                                                <div class="fn-checkbox fn-checkbox-m">
                                                    <input type="checkbox" name="fn-checkbox25" id="fn-checkbox25">
                                                    <label for="fn-checkbox25">
                                                        <div class="check"><span></span></div>
                                                        <span>เปรียบเทียบ</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body fn-card-body-3">
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <h1 class="card-title">21,450.75 <small>บาท/ปี</small></h1>
                                                <small class="card-subtitle">ผ่อน 0% สูงสุด 10 เดือน</small>
                                            </div>
                                            <div class="d-flex align-items-end">
                                                <button class="fn-button fn-btn-M fn-btn-primary">ซื้อเลย</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card fn-card-1 mb24" id="quote5">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="card-body fn-card-body-1">
                                        <div class="d-flex flex-lg-row-reverse mb12">
                                            <div class="flex-grow-1">
                                                <h5 class="card-title">เมืองไทยประกันภัย</h5>
                                                <h5 class="card-subtitle">ประกันชั้น 1 <img src="../images/icon-other-grey-slash.svg"> ซ่อมห้าง</h5>
                                            </div>
                                            <div class="flex-shrink-0 me-lg-3">
                                                <img src="../images/image-logo-square-big-muangthai.png" alt="">
                                            </div>
                                        </div>
                                        <div class="row mb8">
                                            <div class="col card-text">ทุนประกัน</div>
                                            <div class="col card-text text-end">1,000,000 บาท</div>
                                        </div>
                                        <div class="row">
                                            <div class="col card-text">ค่าเสียหายส่วนแรก</div>
                                            <div class="col card-text text-end">มี</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card-body fn-card-body-2">
                                        <div class="row g-0">
                                            <div class="col">
                                                <button class="fn-button fn-btn-M fn-btn-secondary" data-bs-toggle="modal" data-bs-target="#quotePopup">
                                                    <img src="../images/icon-24-green-detail.svg"> ดูรายละเอียด
                                                </button>
                                            </div>
                                            <div class="col">
                                                <div class="fn-checkbox fn-checkbox-m">
                                                    <input type="checkbox" name="fn-checkbox26" id="fn-checkbox26">
                                                    <label for="fn-checkbox26">
                                                        <div class="check"><span></span></div>
                                                        <span>เปรียบเทียบ</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body fn-card-body-3">
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <h1 class="card-title">23,766.10 <small>บาท/ปี</small></h1>
                                                <small class="card-subtitle">ผ่อน 0% สูงสุด 10 เดือน</small>
                                            </div>
                                            <div class="d-flex align-items-end">
                                                <button class="fn-button fn-btn-M fn-btn-primary">ซื้อเลย</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

function renderQuote() {
    $('.fn-quote-display').html(quoteHtml);
    $('#fnMoreBtn').removeClass('d-none');
}

function renderMorePh() {
    $('.fn-quote-display').append(phHtml);
}

function renderMoreQuote() {
    $('.fn-placeholder').remove();
    $('.fn-quote-display').append(quoteHtml);
}

$('#fnMoreBtn').click(function () {
    renderMorePh();
    setTimeout(renderMoreQuote, 5000);
});

$(document).ready(function () {
    $('.fn-quote-display').html(phHtml);
    setTimeout(renderQuote, 5000);
});