

const forms = document.getElementById('needs-validation');

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
	//Click x Icon
	el.querySelector('[data-clear-input]').addEventListener('click', function (e) {
		input.value = '';
		conditionallyHideClearIcon();

	});

	//Input type text On change
	el.querySelector('input[type="text"]').addEventListener('blur', function (e) {
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

	el.querySelector('input[type="text"]').addEventListener('focus', function (e) {
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


	/* var x = 1;
	$(".fn-tooltip-block").hide();
	$(".fn-tooltip-ab").hide();

	$(".fn-tooltip-btn").click(function () {
		if(x == 0){
			$(".fn-tooltip-block").hide(100);
			$(".fn-tooltip-ab").hide(100);
			x = 1;
		}else if(x != 0){
			$(".fn-tooltip-block").show(100);
			$(".fn-tooltip-ab").show(100);
			x = 0;
		}
	})
	
	$(document).mouseup(function(e) {			
		var tooltip_ab = $(".fn-tooltip-ab");
		var tooltip_block = $(".fn-tooltip-block");
		
		if ((!tooltip_ab.is(e.target)) && (!tooltip_block.is(e.target)) && (tooltip_ab.has(e.target).length === 0)){
			$(".fn-tooltip-block").hide(100);
			$(".fn-tooltip-ab").hide(100);
		}
	}); */
/*
	var ignoreClickOnMeElement = document.getElementById('fn-tooltip-btn');
	document.addEventListener('click', function(event) {
		var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
		if (!isClickInsideElement) {
			//Do something click is outside specified element
			$(".fn-tooltip-block").hide(100);
			$(".fn-tooltip-ab").hide(100);
			if(x == 0){
				x = 1;
			}else{
				x = 0;
			}
		}else{
			$(".fn-tooltip-block").show(100);
			$(".fn-tooltip-ab").show(100);
		}
	});*/
}); 



// $('.fn-dropdown').click(function () {
// 	$(this).attr('tabindex', 1).focus();
// 	$(this).toggleClass('active');
// 	$(this).find('.fn-dropdown-menu').slideToggle(300);
// });
// $('.fn-dropdown').focusout(function () {
// 	$(this).removeClass('active');
// 	$(this).find('.fn-dropdown-menu').slideUp(300);
// });
// $('.fn-dropdown .fn-dropdown-menu li').click(function () {
// 	$(this).parents('.fn-dropdown').find('span').text($(this).text());
// 	$(this).parents('.fn-dropdown').find('input').attr('value', $(this).attr('id'));
// });
/*End Dropdown Menu*/





//Textarea auto height
Array.prototype.forEach.call(document.querySelectorAll(".fn-form-textarea"), function (el) {
	var textarea = el.querySelector("textarea");
	textarea.addEventListener('input', function (e) {
		e.target.style.height = 'auto';
		e.target.style.height = (e.target.scrollHeight) + 'px';
	});
});




Array.prototype.forEach.call(document.querySelectorAll(".fn-tooltip-overlay"), function (el) {
	
	var tooltipbtn = el.querySelector(".fn-tooltip-btn");
	
	
	var firstparentwidth = el.getBoundingClientRect().width;
	var firstparentPos = el.getBoundingClientRect(),
	firstchildPos = el.querySelector('.fn-tooltip-btn').getBoundingClientRect(),
	firstrelativePos = {};

	firstrelativePos.top = firstchildPos.top - firstparentPos.top,
	firstrelativePos.right = firstchildPos.right - firstparentPos.right,
	firstrelativePos.bottom = firstchildPos.bottom - firstparentPos.bottom,
	firstrelativePos.left = firstchildPos.left - firstparentPos.left;
    //console.log(firstrelativePos);
	
	tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.width =  firstparentwidth +"px";
	tooltipbtn.parentElement.querySelector(".fn-tooltip-block").style.left =  (firstrelativePos.left * -1)+5 +"px";

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
		e.target.parentElement.querySelector(".fn-tooltip-block").style.width =  parentwidth +"px";
		e.target.parentElement.querySelector(".fn-tooltip-block").style.top =  (popupheight) * -1 +"px";
		e.target.parentElement.querySelector(".fn-tooltip-block").style.left =  relativePos.left * -1 +"px";
		//e.target.style.height = (e.target.scrollHeight) + 'px';
		e.target.parentElement.querySelector(".fn-tooltip-fake").classList.remove("d-none");
		// e.target.style.zIndex = '1';

	});
});
 

Array.prototype.forEach.call(document.querySelectorAll(".fn-tooltip-form"), function (el) {

	var tooltipbtn = el.querySelector(".fn-tooltip-btn");
	//var popupheight = el.querySelector(".fn-tooltip-block").offsetHeight;
	//el.querySelector(".fn-tooltip-block").style.marginTop =  popupheight * -1 +"px";
	//el.querySelector(".fn-tooltip-block").style.transform =  "translateY("+(popupheight/0.8)+"px)";

	tooltipbtn.addEventListener('click', function (e) {	
		e.target.parentElement.querySelector(".fn-tooltip-fake").classList.remove("d-none");
		e.target.parentElement.querySelector(".fn-tooltip-block").classList.toggle("show");
	})
});


$(document).mouseup(function(e) {
    var tooltip_ab = $(".fn-tooltip-btn");

    if (tooltip_ab.has(e.target).length === 0) {
        $(".fn-tooltip-block").removeClass("show");
        $(".fn-tooltip-fake").addClass("d-none");
    }
});

/*
if (nyear == null || nmonth == null || nday == null) {
	nyear = dnow.getFullYear();
	nmonth = dnow.getMonth();
	nday = dnow.getDate();
}

new Picker(document.querySelector('.fn-form-datepicker .form-control'), {
    headers: true,
    controls: true,
    format: 'DD/MMMM/YYYY',
	container: 'DD-MM-YYYY',
	date: new Date(nyear, nmonth, nday),
    text: {
        title: 'เลือกวันที่',
        confirm: 'ยืนยัน'
    },
    translate(type, text) {
        return text;
    }
});
*/


/*$('select.sorting').niceSelect();

		$(".nice-select.sorting").click(function () {
			if (window.matchMedia('(max-width: 991px)').matches) {
				if ($(this).hasClass("open")) {
					$(this).find(".list").removeClass("animate__fadeInUp");
					$(this).find(".list").addClass("animate__fadeOutDown");
					$(".modal-backdrop").remove();
				}
				else {

					$(this).find(".list").addClass("animate__fadeInUp");
					$(this).find(".list").removeClass("animate__fadeOutDown");
					$("body").append('<div class="modal-backdrop fade show"></div>');
				}
			}
		});

		$(".nice-select.sorting").focusout(function () {
			if (window.matchMedia('(max-width: 991px)').matches) {
				$(this).find(".list").removeClass("animate__fadeInUp");
				$(this).find(".list").addClass("animate__fadeOutDown");
				$(this).removeClass("open");
				$(".modal-backdrop").remove();
			}
		});*/

/*Dropdown Sorting Grobal*/
$('.sorting.form-select').on('click', function (e) {
	if (window.matchMedia('(max-width: 991px)').matches) {
		$(this).next().addClass("animate__fadeInUp");
		$(this).next().removeClass("animate__fadeOutDown");
		$("body").append('<div class="modal-backdrop fade show"></div>');
	}
	$('html').one('click', function () {
		$(".modal-backdrop").remove();
		$('.dropdown.sorting-list').find("ul").removeClass("animate__fadeInUp");
		$('.dropdown.sorting-list').find("ul").addClass("animate__fadeOutDown");
	});
	e.stopPropagation();
});

$('.sorting-list .option').on('click', function () {
	$(".modal-backdrop").remove();
	$(this).parents().eq(0).removeClass("animate__fadeInUp");
	$(this).parents().eq(0).addClass("animate__fadeOutDown");
	$(this).addClass("selected");
	$(this).siblings().removeClass("selected");
	$(this).parents().eq(1).find(".sorting.form-select").text($(this).text());
});