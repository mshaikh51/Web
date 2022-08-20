function validation(){
    const namedata = document.getElementById('name').value;
    const maildata = document.getElementById('email').value;
    const addressdata = document.getElementById('address').value;
    const postaldata = document.getElementById('postal').value;
    const citydataa = document.getElementById('city').value;
    const questiondata = document.getElementById('message').value;
    const hiringdata = document.getElementById('hour').value;
    const radiodata = document.querySelector('input[name = "choice"]:checked');

    if (namedata == ""){
        document.getElementById('username').innerHTML = "*Please enter name";
        return false;
    }
    else if (namedata.length <= 2){
        document.getElementById('username').innerHTML = "*Please enter valid name";
        return false;
    }

    else if (maildata == ""){
        document.getElementById('emailid').innerHTML = "*Please enter email";
        return false;
    }

    else if (citydataa == ""){
        document.getElementById('citydata').innerHTML = "*Please enter your city";
        return false;
    }

    else if (addressdata == ""){
        document.getElementById('textaredata').innerHTML = "*Please enter address";
        return false;
    }

    else if (postaldata == ""){
        document.getElementById('postaldata').innerHTML = "*Please enter postal code";
        return checkcode();
        
    }
    
    else if (radiodata != null){
        if (radiodata.value == "Question" && questiondata == ""){
            document.getElementById('messagedataa').innerHTML = "*Type your message...";
            return false;
        }
        if (radiodata.value == "Hiring" && hiringdata == ""){
            document.getElementById('hourly').innerHTML = "*Please enter hourly rate";
            return false;
        }
    }else{
        alert('Select Option')
        return false
    }


}


function checkcode(postaldata){
    const postalcode = new RegExp(/^[ABCEGHJ-KLMNPRSTVXY]{1}[0-9]{1}[ABCEGHJ-KLMNPRSTV-Z]{1}[]?[0-9]{1}[ABCEGHJ-KLMNPRSTVXY]{1}[0-9]{1}$/i);
    result = postalcode.test(postaldata)
    if (result == false){
        document.getElementById('postaldata').innerHTML = "*Please enter valid postal code";
        alert(result)
        return false
    }
    else{
        alert(result)
        return true
    }
}