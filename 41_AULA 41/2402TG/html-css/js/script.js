document.getElementById("form").addEventListener("submit", function (evt) {
    evt.preventDefault();
    
    let radio = document.querySelector('input[name="video"]:checked').value;

    let text = document.getElementById("textarea").value;

    console.log("Valor do radio selecionado:", radio);
    console.log("Valor do textarea:", text);

    alert("Obrigado pela sua contribuição")
});
