// get all slider
let allslides = document.querySelectorAll('.mySlides');

let show1 = 0;
let show2 = 1; 
let show3 = 2;

// all item display none 
for(i = 0; i < allslides.length; i++){
  allslides[i].style.display ="none";
}

// show 3 item 
allslides[show1].style.display = "flex";
allslides[show2].style.display = "flex";
allslides[show3].style.display = "flex";

// when click right array then increase one by one 
// but it not work when last item show
function rightSide(n){
    if(show3 < allslides.length -1){
        for(i = 0; i < allslides.length; i++){
           allslides[i].style.display ="none";
        }

        allslides[show1 += n].style.display = "flex";
        allslides[show2 += n].style.display = "flex";
        allslides[show3 += n ].style.display = "flex";
    }
}

// when click left array then decrease one by one
// but it works when item available 4 or more than 4
function leftSide(n){
    if(show1 > 0 ){
        for(i = 0; i < allslides.length; i++){
           allslides[i].style.display = "none";
        }

        allslides[show1 -= n].style.display = "flex";
        allslides[show2 -= n].style.display = "flex";
        allslides[show3 -= n ].style.display = "flex";
    }
}