<<<<<<< HEAD


var string = "Welcome to Tech Mentors";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();
=======
// let item = document.getElementsByClassName("item");
// let i;
// function showToggle(){
    
//     for(i=0;i<item.length;i++){
//         item[i].classList.add("active");
       
//     }
// }

>>>>>>> newnav
