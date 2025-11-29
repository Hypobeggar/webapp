const printButton= document.getElementById("print-plain");
const toMain= document.getElementById("toMain");
printButton.addEventListener("click", function(){
    printButton.style.visibility= "hidden";
    toMain.style.visibility= "hidden";
    window.print();
    printButton.style.visibility= "visible";
    toMain.style.visibility= "visible";
});