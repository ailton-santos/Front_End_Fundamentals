document.getElementById('fo').addEventListener('submit'), function(event) {
    event.preventDefault();
    var name = document.getElementById('pesquisar').Value;//entrada
    var greeting = document.getElementById('greeting');//saída

        if(name){
            greeting.textContent = 'olá, ' + name + 'bem-vindo';
        } else{
            greeting.textContent = 'por favor, insira seu nome';
        }    
}

document.getElementById('contactform').addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById('nameinput').value;
    var email = document.getElementById('emailinput').value;
    var age = document.getElementById('ageinput').value;
    var password = document.getElementById('passwordinput').value;
    var mensage = document.getElementById('mensageinput').value;

    //exibir mensagem 
    document.getElementById('submittedname').textContent = name;
    document.getElementById('submittedemail').textContent = email;
    document.getElementById('submittedage').textContent = age;
    document.getElementById('submittedpassword').textContent = password;
    document.getElementById('submittedmensage').textContent = mensage;

    //exibindo area e esconder formulário 
    document.getElementById('contactform').style.display = 'none';
    document.getElementById('submissiondata').style.display = 'block';

    
});