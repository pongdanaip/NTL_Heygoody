var fixTop = $('.fn-compare').offset().top + $('.fn-compare').height();

$(window).resize(function() {
    fixTop = $('.fn-compare').offset().top + $('.fn-compare').height();
});

$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixTop) {
        $('.fn-compare-sticky').addClass('show');
    } else {
        $('.fn-compare-sticky').removeClass('show');
    }
});

Array.prototype.forEach.call(document.querySelectorAll(".fn-tooltip-overlay"), function (el) {
    
    var tooltipbtn = el.querySelector(".fn-tooltip-btn");
    
    var firstparentwidth = el.getBoundingClientRect().width;
    var firstparentPos = el.getBoundingClientRect(),
    firstchildPos = el.querySelector('.fn-tooltip-btn').getBoundingClientRect(),
    firstrelativePos = {};
    
    if (window.matchMedia('(max-width: 991px)').matches) {
        tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.width =  ($('.fn-compare-table').width() - 40)+ "px";
        tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.left =  (firstparentPos.left * -1)+20 +"px";
    } else {
        tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.width =  firstparentwidth +"px";
        // tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.left =  (firstrelativePos.left * -1)+5 +"px";
        tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.left =  (firstparentPos.left * -1)+20 +"px";
    }

    $(window).resize(function() {
        firstparentwidth = el.getBoundingClientRect().width;
        firstparentPos = el.getBoundingClientRect(),
        firstchildPos = el.querySelector('.fn-tooltip-btn').getBoundingClientRect(),
        firstrelativePos = {};
    
        if (window.matchMedia('(max-width: 991px)').matches) {
            tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.width =  ($('.fn-compare-table').width() - 40)+ "px";
            tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.left =  (firstparentPos.left * -1)+20 +"px";
        } else {
            tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.width =  firstparentwidth +"px";
            // tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.left =  (firstrelativePos.left * -1)+5 +"px";
            tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.left =  (firstparentPos.left * -1)+20 +"px";
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
        // console.log(relativePos);

        e.target.parentElement.querySelector(".fn-tooltip-block").classList.toggle("show");
        e.target.parentElement.querySelector(".fn-tooltip-block").style.top =  (popupheight) * -1 +"px";
        e.target.parentElement.querySelector(".fn-tooltip-fake").classList.remove("d-none");

        if (window.matchMedia('(max-width: 991px)').matches) {
            let leftPos = e.target.parentElement.querySelector(".fn-tooltip-block").getBoundingClientRect();
            // $(window).resize(function() {
            //     leftPos = e.target.parentElement.querySelector(".fn-tooltip-block").getBoundingClientRect();
            // });
            e.target.parentElement.querySelector(".fn-tooltip-block").style.width =  ($('.fn-compare-table').width() - 40)+"px";
            // e.target.parentElement.querySelector(".fn-tooltip-block").style.left =  (leftPos.left - 25) * -1 +"px";
        } else {
            e.target.parentElement.querySelector(".fn-tooltip-block").style.width =  parentwidth +"px";
            // e.target.parentElement.querySelector(".fn-tooltip-block").style.left =  (relativePos.left) * -1 +"px";
        }
    });
});

$(document).mouseup(function(e) {
    var tooltip_ab = $(".fn-tooltip-btn");
    if (tooltip_ab.has(e.target).length === 0) {
        $(".fn-tooltip-block").removeClass("show");
        $(".fn-tooltip-fake").addClass("d-none");
    }
});