const imgs= ["/img/1.jpeg", "/img/2.jpg", "/img/3.jpg"];
const caraImg = document.getElementById("carousel-img");
const leftCaraButton= document.getElementById("caraLeft");
const rightCaraButton= document.getElementById("caraRight");
let count=0;
window.onload = function (){

    carouselTurn();
}

async function carouselTurn() {

    while(true){
        await new Promise(resolve=> {
            caraImg.src = imgs[count];
            setTimeout(resolve, 5000);
            
        })
        count++;
        if (count> imgs.length-1){
            count=0;
        }
    }
}
leftCaraButton.addEventListener("click", async function(){
    if (count!=0){
        count-=1;
    } else {
        count= imgs.length-1;
    }
    caraImg.src=imgs[count];
});

rightCaraButton.addEventListener("click", async function(){

    if (count!=imgs.length-1){
        count+=1;
    } else {
        count=0;
    }
    caraImg.src=imgs[count];
    
});