

function bannerSlide() {
    $('#fnBannerSlide').empty();
    $('#fnBannerSlide').removeClass();
    $('#fnBannerSlide').addClass('fn-slide');

    if (window.matchMedia('(max-width: 575px)').matches) {
        $('#fnBannerSlide').html(bannerMobile);
    } else {
        $('#fnBannerSlide').html(bannerDesktop);
    }

    $('#fnBannerSlide').not('.slick-initialized').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        slidesToShow: 1,
    });

    $('.slick-dots').wrap('<div class="container position-relative"></div>');
}

function addPadding() {
    var containerLeft = $('.container').offset().left;
    $('#fnCardSlide .slick-list').css('padding-left', `${containerLeft + 20}px`);
}

//var fnHomeModal1 = document.getElementById('fnHomeModal1')
//fnHomeModal1.addEventListener('show.bs.modal', function (event) {
//    $(this).children().addClass('animate__fadeInUp');
//    $(this).children().removeClass('animate__fadeOutDown');
//})
//fnHomeModal1.addEventListener('hide.bs.modal', function (event) {
//    $(this).children().addClass('animate__fadeOutDown');
//    $(this).children().removeClass('animate__fadeInUp');
//})
//fnHomeModal1.addEventListener('shown.bs.modal', function (event) {
//    $('#searchForm').focus();
//})

function fnSearchBrand() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchForm');
    filter = input.value.toUpperCase();
    ul = document.getElementById("fnOtherBrand");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

$(document).ready(function () {


    ////$('#fnCardSlide').slick({
    ////    infinite: false,
    ////    variableWidth: true,
    ////    prevArrow: $('#fnCardSlideArrows .prev-arrow'),
    ////    nextArrow: $('#fnCardSlideArrows .next-arrow'),
    ////});

    ////bannerSlide();
    ////addPadding();

    ////var fnHome2;
    ////if (window.matchMedia('(max-width: 991px)').matches) {
    ////    fnHome2 = $('.fn-home-2').offset().top - 120;
    ////} else {
    ////    fnHome2 = $('.fn-home-2').offset().top - 162;
    ////}
    
    ////$(window).resize(function() {
    ////    bannerSlide();
    ////    addPadding();

    ////    if (window.matchMedia('(max-width: 991px)').matches) {
    ////        fnHome2 = $('.fn-home-2').offset().top - 120;
    ////    } else {
    ////        fnHome2 = $('.fn-home-2').offset().top - 162;
    ////    }
    ////});

    ////$(window).scroll(function() {
    ////    var currentScroll = $(window).scrollTop();
    ////    // console.log(`${currentScroll} > ${fnHome2}`);

    ////    if (currentScroll >= fnHome2) {
    ////        $('.fn-sticky-bottom').addClass('show');
    ////    } else {
    ////        $('.fn-sticky-bottom').removeClass('show');
    ////    }
    ////});

    ////$('#searchForm').keyup(function(){
    ////    var value = document.getElementById('searchForm').value;
    ////    if(value == ''){
    ////        $(".btn-clear").addClass("d-none");
    ////    } else {
    ////        $(".btn-clear").removeClass("d-none");
    ////    }
    ////});
    ////$('.btn-clear').click(function(){
    ////    $('#searchForm').val('');
    ////    $('#searchForm').focus();
    ////    $(".btn-clear").addClass("d-none");
    ////    fnSearchBrand();
    ////});
});