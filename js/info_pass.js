$(document).ready(function(){
    IMask(document.getElementById('fn-txt-pass'),{
        mask: /^[0-9a-zA-Z-!@#$%&*?]+$/
    });
    IMask(document.getElementById('fn-txt-conpass'),{
        mask: /^[0-9a-zA-Z-!@#$%&*?]+$/
    });
    IMask(document.getElementById('fn-phonenum-email'),{
        mask: /^[0-9a-zA-Z]+$/
    });
});

// Hide / Show Password
$(".fn-password-invisible").on('click', function (event) {
    
    let ele = $(this).prev(".fn-pass-swap");
    event.preventDefault();

    if($(ele).attr("type")=="text"){
        $(ele).attr('type', 'password');
        $(this).find('.fn-img-invisible').removeClass('d-none')
        $(this).find('.fn-img-visible').addClass('d-none')

    }else if($(ele).attr("type")=="password"){
        $(ele).attr('type', 'text');
        $(this).find('.fn-img-invisible').addClass('d-none')
        $(this).find('.fn-img-visible').removeClass('d-none')
    }

 });

//  Check Password
$("#fn-submit-password").on('click', function (e){
    let checkPass = $("#fn-txt-pass").val();
    let checkConPass = $("#fn-txt-conpass").val();
    if((checkPass != "") && (checkConPass != "")&&(checkPass.length >= 8)){
        if(checkPass != checkConPass){
            $(".fn-valid-password").removeClass('d-none');
            $("#fn-txt-conpass").closest('div').addClass('errorempty');
            $("#fn-txt-pass").closest('div').removeClass('errorempty');
            $(".fn-text-confirmpassword").css('color','var(--1-txt-3-caption)')
        }else if(checkPass == checkConPass){
            $(".fn-valid-password").addClass('d-none');
            $("#fn-txt-conpass").closest('div').removeClass('errorempty');
            $("#fn-dialog-sucsess").css('display','block');
            $("#fn-dialog-sucsess").attr('aria-modal','true');
            $("#fn-dialog-sucsess").attr('role','dialog');
            $("#fn-dialog-sucsess").removeAttr('aria-hidden');
            $("#fn-dialog-sucsess").addClass('show');
            $("body").css('overflow', 'hidden');
            $("body").css('padding-right', '0px');
            $("body").attr('class', 'modal-open');
            $("body").append('<div class="modal-backdrop fade show"></div>');

            $('html').one('click', function () {
                $(".modal-backdrop").remove();
                $("#fn-dialog-sucsess").css('display','none');
                $("#fn-dialog-sucsess").attr('aria-modal','false');
                $("#fn-dialog-sucsess").removeAttr('role','dialog');
                $("#fn-dialog-sucsess").attr('aria-hidden');
                $("#fn-dialog-sucsess").addClass('show');
                $("body").css('overflow', 'hidden');
                $("body").css('padding-right', 'none');
                $("body").removeAttr('class', 'modal-open');
            });
            e.stopPropagation();
        }   
    }else{
        $("#fn-txt-pass").closest('div').addClass('errorempty');
        $(".fn-text-confirmpassword").css('color','var(--syst-1-error)')
    }
});

