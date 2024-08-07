let total = 0;
let quantidadeItens = 0;

function adicionarItem(preco) {
    total += preco;
    quantidadeItens++;
    atualizarTotal();
}

function atualizarTotal() {
    let desconto = 0;

    if (quantidadeItens >= 2) {
        desconto = total * 0.10; // 10% de desconto
    }

    let totalComDesconto = total - desconto;
    document.getElementById('total').innerText = totalComDesconto.toFixed(2);
    
    if (quantidadeItens >= 2) {
        document.getElementById('desconto').innerText = `Desconto de 10% aplicado: R$ ${desconto.toFixed(2)}`;
    } else {
        document.getElementById('desconto').innerText = '';
    }
}
</script>
</body>
</html>