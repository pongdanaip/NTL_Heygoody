//  auto generate clear button text when focus input
Array.prototype.forEach.call(document.querySelectorAll(".fn-form-text"), function (el) {
	/*var input = el.querySelector("input");
	//conditionallyHideClearIcon();
	input.addEventListener('input', conditionallyHideClearIcon);
	//Click x Icon
	el.querySelector('[data-clear-input]').addEventListener('click', function (e) {
		input.value = '';
		conditionallyHideClearIcon();
	});*/
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