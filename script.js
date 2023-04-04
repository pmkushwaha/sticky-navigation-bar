
// to make sticky navigation bar
window.addEventListener('scroll',function(){
    let navbar=document.getElementById("menu");


    if(window.pageYOffset>=254){  //to deletxt place where to stick
        navbar.classList.add('sticky'); //to add class( sticky)
        
    }
    else{
        navbar.classList.remove('sticky'); // to remove class
    }
});