let btn=document.getElementById('action'); //button
let pic=document.getElementById('rise'); //image
document.addEventListener('click', sun) //function
function sun(e){
    if(btn.textContent.includes('sunrise')){
    pic.src="sunset.jpg";
    btn.textContent="sunset";
}
else{
    pic.src="sunrise.jpg";
    btn.textContent="sunrise";
}

}



