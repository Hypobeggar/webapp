const imgs= ["/img/1.jpeg", "/img/2.jpg", "/img/3.jpg"];
const caraImg = document.getElementById("carousel-img");
window.onload = function (){

    carouselTurn();
}

async function carouselTurn() {
    var count=0;
    while(true){
        await new Promise((resolve)=> {
            caraImg.src = imgs[count];
            setTimeout(resolve, 5000)
            
        })
        count++;
        if (count>2){
            count=0;
        }
    }
}
