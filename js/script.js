let item = document.getElementsByClassName("item");
let i;
function showToggle(){
    
    for(i=0;i<item.length;i++){
        item[i].classList.add("active");
       
    }
    
}