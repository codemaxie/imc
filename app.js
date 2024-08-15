function calcularIMC(altura, peso){
    return peso / (altura * altura)
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function resultIMC(){
    let nomeUsuario = document.getElementById('name').value;
    let pesoUsuario = document.getElementById('peso').value;
    console.log(pesoUsuario);
    let alturaUsuario = document.getElementById('altura').value;
    console.log(alturaUsuario);
    resultado = calcularIMC(alturaUsuario, pesoUsuario);
    console.log(resultado.toFixed(1));
    if (resultado < 18.5) {
        exibirTextoNaTela('h2', `${nomeUsuario}, Você está abaixo do peso!`);
    } else if (resultado >= 18.5 && resultado < 25) {
        exibirTextoNaTela('h2', `${nomeUsuario}, Você está com o Peso Normal`);
    } else if (resultado >= 25 && resultado < 30) {
        exibirTextoNaTela('h2', `${nomeUsuario}, Você está com Sobrepeso`);
    } else if (resultado >= 30 && resultado < 35) {
        exibirTextoNaTela('h2', `${nomeUsuario}, Você está com Obesidade Grau I`);
    } else if (resultado >= 35 && resultado < 40) {
        exibirTextoNaTela('h2', `${nomeUsuario}, Você está com Obesidade Grau II`);
    } else {
        exibirTextoNaTela('h2', `${nomeUsuario}, Você está com Obesidade Grau III`);
    }
    
    limparCampo();
    exibirTextoNaTela('h3', `${resultado.toFixed(2)}`);
    
}




