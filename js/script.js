let slideIndex =0;

sliding();

function sliding(){
    let i;
    let x = document.getElementsByClassName("slides");
    for(i=0;i<x.length;i++){
        x[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex>x.length){slideIndex=1}
    x[slideIndex-1].style.display = "block";
    setTimeout(sliding,2000);
}