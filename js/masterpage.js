$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".heygoody-menu-two").addClass("menu-fulid");
    }
    else {
        $(".heygoody-menu-two").removeClass("menu-fulid");
    }
});
$(".navbar-toggler").click(function(){
    $(".navbar-collapse").slideToggle().toggleClass("active");
    //$(".menu-user-login .user-login").toggleClass("d-none");
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
        $(".menu-user-login .user-login").removeClass("animate__fadeIn");
        $(".menu-user-login .user-login").addClass("animate__fadeOut");
    } else {
        $(".menu-user-login .user-login").removeClass("animate__fadeOut");
        $(".menu-user-login .user-login").addClass("animate__fadeIn");
    }
});

$(".menu-user-login img.top-icon-user").hover(function(){
    $(this).attr('src','../images/icon-other-green-search.svg');
});

$( ".menu-user-login img.top-icon-user" ).hover(
    function() {
      $( this ).attr('src','../images/icon-other-green-search.svg');
    }, function() {
      $( this ).attr('src','../images/icon-other-grey-search.svg');
    }
  );
if (($(this).width() <= 992)) {
    $(".heygoody-menu-toggle").click(function(){
        $(this).find(".flex-column").toggleClass("d-block");
        $(this).toggleClass("menu-active");
    });
}

$( ".user-hover, .card-user" ).hover(function() {
    $(".card-user").addClass( "hover" );
    }, function() {
        $(".card-user").removeClass( "hover" );
    }
);
$('#nav-icon3').click(function(){
    $(this).toggleClass('open');
});

$("#fn-close-minilogin").on('click', function() {
    $("#fn-mini-box").find('.fn-mini-login').removeClass("animate__fadeInUp");
    $("#fn-mini-box").find('.fn-mini-login').addClass("animate__fadeOutDown");
    var counter = setInterval(() => {
        clearInterval( counter );
        $("#fn-mini-box").addClass("d-none");
        $("body").removeClass('modal-open');
        $("#fn-backdrop-login").remove();
    }, 500);
});

$('#fn-btn-minilogin').on('click', function(e) {
    if (window.matchMedia('(max-width: 991px)').matches) {
        $("body").append('<div id="fn-backdrop-login" class="modal-backdrop fade show"></div>');
        $("#fn-mini-box").removeClass("d-none");
        $("#fn-mini-box").find('.fn-mini-login').removeClass("animate__fadeOutDown");
        $("#fn-mini-box").find('.fn-mini-login').addClass("animate__fadeInUp animate__faster");
    }

    $(document).click(function(event) {
        if (!$(event.target).closest(".fn-mini-login").length) {
            $("#fn-mini-box").find('.fn-mini-login').removeClass("animate__fadeInUp animate__faster");
            $("#fn-mini-box").find('.fn-mini-login').addClass("animate__fadeOutDown");
            var counter = setInterval(() => {
                clearInterval( counter );
                $("#fn-mini-box").addClass("d-none");
                $("body").removeClass('modal-open');
                $("#fn-backdrop-login").remove();
            }, 500);
        }
    });
    e.stopPropagation();
});

$(window).on('resize', function () {
    var win = $(this);
    if (win.width() >= 992) {
        $("#fn-mini-box").find('.fn-mini-login').removeClass("animate__fadeInUp");
        $("#fn-mini-box").find('.fn-mini-login').addClass("animate__fadeOutDown");
        var counter = setInterval(() => {
            clearInterval(counter);
            $("#fn-mini-box").addClass("d-none");
            $("body").removeClass('modal-open');
            $("#fn-backdrop-login").remove();
        }, 500);
    }
});

$('.form-floating.fn-form-select select').on('click', function () {
    $(this).parent().toggleClass("active");
});
$('.form-floating.fn-form-select select').on('focusout', function () {
    $(this).parent().removeClass('active');
});