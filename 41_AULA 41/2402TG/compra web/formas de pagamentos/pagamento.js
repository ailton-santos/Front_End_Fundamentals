
document.getElementById('cpf').addEventListener('input', function(e) {
    var value = e.target.value;
    var cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
                          .replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
                          .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
    e.target.value = cpfPattern;
  });

  const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

 {
  document.getElementById('registro').addEventListener('submit', function(event){
    event.preventDefault()
    var nome = document.getElementById('name').value;
    var sobrenome = document.getElementById('sobrenome').value
    var cpf = document.getElementById('cpf').value
    var data = document.getElementById('data').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value
    var caixa = document.getElementById('caixa')

const mostrar = document.getElementById('bot');
    mostrar.addEventListener('click', function(){
      if (nome, sobrenome, cpf, data, email, phone.value, caixa){
        alert('Nome: ' + document.getElementById('name').value + "\n" + 'sobrenome: ' + document.getElementById('sobrenome').value + "\n" + 'CPF: ' + document.getElementById('cpf').value + "\n" + 'Data: ' + document.getElementById('data').value + "\n" + 'Email: ' + document.getElementById('email').value + "\n" + 'Phone: ' + document.getElementById('phone').value);
      }else{
        alert('coloque seus dados!')
      }
    });
    })
}    



document.getElementById('con').addEventListener('submit', function(event){
  event.preventDefault();
  var numc = document.getElementById('nc').value;
  var nomec = document.getElementById('noc').value;
  var numero = document.getElementById('num').value;
  var cvv = document.getElementById('cvv').value;

const cartao = document.getElementById('bot2');
  cartao.addEventListener('click', function(){
    if (numc, nomec, numero, cvv.value){
      alert('cartão cadastrado!!');
    }else{
      alert('coloque seus dados!!');
    }
})
});

