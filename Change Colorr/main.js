var buttonEle = document.querySelector(".btn");

var divEle    = document.querySelector(".mydiv");

//create array for colours

var color  = ["red" , "green" , "blue"];

//counter i 

var counter = 0;

buttonEle.onclick = function(){
    
    //Logic
    
    divEle.style.backgroundColor = color[counter];

    buttonEle.style.backgroundColor = color[counter];
    
    counter++;

    if( counter == 3 )
    {       
        counter = 0 ;
    }
}