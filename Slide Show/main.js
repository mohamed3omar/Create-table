let myImage = document.getElementById("slide-show");

let images  = ["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"];

//counter 

let i = 0;

function slideshow(){

    myImage.setAttribute('src' , images[i]);

    
    if( i == images.length-1 )
    {
        i = 0 ;
    }
    else{
        i++;
    }
    setTimeout(function(){
        slideshow();

    }, 2000)
}
slideshow();
