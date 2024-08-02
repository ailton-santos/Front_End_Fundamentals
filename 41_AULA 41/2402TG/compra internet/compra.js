const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
quantidade = document.querySelector(".quantidade");

let a = 1; 

plus.addEventListener("click", ()=>{
    a++;
    a = (a < 10) ? "0" + a : a;
    quantidade.innertext = a;
    console.log(a);

    minus.addEventListener("click", ()=>{
        if(a > 1){
            a--;
            a = (a < 10) ? "0" + a : a;
            quantidade.innertext = a;
            console.log(a);
        }
    });    
});