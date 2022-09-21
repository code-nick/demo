var fullimgbox = document.getElementById("fullimgbox");
var fullimg = document.getElementById("fullimg");

function openfullimg(pic){
    
    fullimgbox.style.display = "flex";
    fullimg.src = pic;
    
}
function myfuction(){
    fullimgbox.style.display = "none";
}