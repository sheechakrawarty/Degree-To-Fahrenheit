let num = document.getElementById("temp1");
let result = document.querySelector(".ans");
let resBut = document.querySelector(".result");


resBut.addEventListener("click",()=>{
    if(num.value != null){
    result.innerText = num.value*(9/5)+32;
    }
    
})
