function cardapio() {
        // Preços dos salgados
        const precos = [1.20, 1.30, 1.50, 1.20, 1.30, 1.00];

        // Total da compra
        let valorCompra = 0;
    
        // Índice para o loop
        let i = 1;

        // Loop while para calcular o total
        while (i <= 6) {
            const qtd = parseInt(document.getElementById(`qtd0${i}`).value) || 0;
    
           
            // Calcular total
            valorCompra += precos[i - 1] * qtd;
            i++;
        }
    
        //Aplicar desconto para compras acima de R$ 10,00
        // if (valorCompra > 10) {
        //     const desconto = 0.10; // 10% de desconto
        //     valorCompra -= valorCompra * desconto;
        //     alert(`Você recebeu um desconto de 10%! O novo total é R$ ${valorCompra.toFixed(2)}`);
        // }
    
        // Exibir mensagens específicas baseadas em condições
        const qtdRefrigerantes = parseInt(document.getElementById("qtd06").value) || 0;
        const qtdCachorroQuente = parseInt(document.getElementById("qtd01").value) || 0;
        const qtdHamburguer = parseInt(document.getElementById("qtd04").value) || 0;
    
        if (qtdRefrigerantes >= 3) {
            alert("Você comprou 3 ou mais refrigerantes. Que tal um hambúrguer para acompanhar?");
        } else if (valorCompra > 15) {
            alert("Você fez uma compra grande! Aproveite um cupom de desconto em sua próxima visita.");
        } else if (qtdCachorroQuente >= 5 || qtdHamburguer >= 5) {
            alert("Compras grandes de cachorro-quente ou hambúrguer! Obrigado pela preferência.");
        } else if (valorCompra === 0) {
            alert("Você não selecionou nenhum item. Por favor, escolha algum produto.");
            return; // Não continua se a compra for zero
        } else {
            alert("Obrigado pela sua compra! Volte sempre.");
        }
    
        // Exibir o total da compra
        document.getElementById("pre").value = valorCompra.toFixed(2);
    }
    
    function zerar() {
        
        document.getElementById("qtd01").value = 0;
        document.getElementById("qtd02").value = 0;
        document.getElementById("qtd03").value = 0;
        document.getElementById("qtd04").value = 0;
        document.getElementById("qtd05").value = 0;
        document.getElementById("qtd06").value = 0;
        document.getElementById("pre").value = 0;

    }

    function aVista() {

        let valorCompra =  document.getElementById("pre").value;

        if (valorCompra > 10) {
            const desconto = 0.10; // 10% de desconto
            valorCompra -= valorCompra * desconto;
            alert(`Você recebeu um desconto de 10%! O novo total é R$ ${valorCompra.toFixed(2)}`);

            
        }
        document.getElementById("pre").value = valorCompra.toFixed(2);
    }

    function parcelado() {
        let valorCompra =  document.getElementById("pre").value;

        if (valorCompra > 10) {
            valorCompra = valorCompra / 3 ;
            alert(`3x de R$${valorCompra.toFixed(2)}`);

        }
        document.getElementById("pre").value = valorCompra.toFixed(2);
    }