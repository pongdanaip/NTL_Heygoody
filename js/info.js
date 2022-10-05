
	new Awesomplete('.email', {
		minChars: 3,
		//autoFirst : true,
		list: ["gmail.com", "hotmail.com"],
		data: function (text, input) {
			return input + "@" + text;
		},
		filter: Awesomplete.FILTER_EMAILAUTO,
	});





    $("#form-sec-3 *[class*='address-']").change(function(){
 
        var address1 = $("#form-sec-3 .address-1").val();
        var address2 = $("#form-sec-3 .address-2").val();
        var address3 = $("#form-sec-3 .address-3").find(":selected").text();
        var address4 = $("#form-sec-3 .address-4").find(":selected").text();
        var address5 = $("#form-sec-3 .address-5").find(":selected").text();

        var defaultaddress = address1 +" "+ address5 +" "+ address4 +" "+ address3 +" "+ address2;
        $("#fn-default-address").text(defaultaddress);
        
    })
    

