var inputEle = document.querySelector("#myInput");

var btnEle   = document.querySelector("#btn");

btnEle.onclick = function(){

    if(btnEle.getAttribute('data-text') == "show"){

        inputEle.setAttribute('type' , 'text');
        btnEle.setAttribute('data-text' , 'hide');
        btnEle.innerHTML = "Hide";
    }
    else{   
        inputEle.setAttribute('type' , 'password');
        btnEle.setAttribute('data-text' , 'show');
        btnEle.innerHTML = "Show";
    }
}