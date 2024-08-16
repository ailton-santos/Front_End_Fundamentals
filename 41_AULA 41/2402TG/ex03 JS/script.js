var idade = prompt('Por favor, insira a sua idade');

var resultadoDiv = document.getElementById('resultado');

if (!isNaN(idade)){
    idade = parseInt(idade);
    if (idade >= 18){
        resultadoDiv.innerText = 'Você é maior de idade.';
    }else{
        resultadoDiv.innerText = 'Você é menor de idade.';
    }
} else {
    resultadoDiv.innerText = 'Por favor digiti um númeno';
}