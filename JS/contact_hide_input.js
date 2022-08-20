function text(x) {
    if (x == 1){
    document.getElementById("message").style.display = "block";
    document.getElementById("hour").style.display = "none";
    }
    else if (x == 0){
    document.getElementById("hour").style.display = "block";
    document.getElementById("message").style.display = "none";
    }
    else{
    document.getElementById("hour").style.display = "none";
    document.getElementById("message").style.display = "none";
    }
    return
}