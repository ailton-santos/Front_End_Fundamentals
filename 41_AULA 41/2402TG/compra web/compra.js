

let total = 0;

function addValue(value) {
    total += value;
    document.getElementById('totalDisplay').innerText = "Total: R$ " + total.toFixed(2);
}

{
    let total = 0;
    
    function addValue(value) {
        total += value;
        document.getElementById('totalDisplay').innerText = "Total: R$ " + total.toFixed(2);
    }}
    
document.getElementById('cardapio').addEventListener('submit', function cardapio(){
        cardapio.preventDefault();
        const precos=[1.20, 1.30, 1.50, 1.20, 1.30, 1.00];
        let totalDisplay=0;
        let i=1;
        while(i<=6){
          const qtd=parseInt(document.getElementById('qtd0${i}').value) || 0;
          if (qtd<0){
            alert("As qtds não podem ser negativas. Insira num válidos");
            return;
          }
          totalDisplay += precos[i-1]*qtd;
          i++;
        }
        if (totalDisplay>10){
          const desconto = totalDisplay-(totalDisplay*0.10)
          alert('Você foi sorteado!! &{valorCompra.toFixed(2)}');
        }
          else{
          alert("para ter desconto, compre um valor acima de R$10");
          }


        });

