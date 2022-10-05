// Hide Password
function hidePassword(id){
    if(id == 0){
        document.getElementById("txt-pass2").value = document.getElementById("txt-pass1").value;
        document.getElementById("pass-1").classList.add("fn-pass-disable");
        document.getElementById("pass-2").classList.remove("fn-pass-disable");
        
    }
    
    if(id == 1){
        document.getElementById("txt-pass1").value = document.getElementById("txt-pass2").value;
        document.getElementById("pass-2").classList.add("fn-pass-disable");
        document.getElementById("pass-1").classList.remove("fn-pass-disable");
    }

    if(id == 2){
        document.getElementById("txt-confirmpass2").value = document.getElementById("txt-confirmpass1").value;
        document.getElementById("conpass-1").classList.add("fn-pass-disable");
        document.getElementById("conpass-2").classList.remove("fn-pass-disable");
    }

    if(id == 3){
        document.getElementById("txt-confirmpass1").value = document.getElementById("txt-confirmpass2").value;
        document.getElementById("conpass-2").classList.add("fn-pass-disable");
        document.getElementById("conpass-1").classList.remove("fn-pass-disable");
    }
}

// Script Confirm Password
