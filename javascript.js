function calcularIMC() {

    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)

    let resultado = document.getElementById("resultado")

    if (peso === 0 || altura === 0) {
        resultado.innerText = "Por favor, preencha peso e altura."
        return
    }

    if (peso < 0 || altura < 0) {
        resultado.innerText = "Por favor, insira valores positivos."
        return
    }

    if (isNaN(peso) || isNaN(altura)) {
        resultado.innerText = "Por favor, insira números válidos."
        return
    }

    let imc = peso / (altura * altura)
    imc = imc.toFixed(2)

    let classificacao = ""

    if (imc < 18.5) {
        classificacao = "Abaixo do Peso"
        resultado.style.color = "blue"
    }
    else if (imc < 25) {
        classificacao = "Peso Normal"
        resultado.style.color = "green"
    }
    else if (imc < 30) {
        classificacao = "Sobrepeso"
        resultado.style.color = "orange"
    }
    else {
        classificacao = "Obesidade"
        resultado.style.color = "red"
    }

    resultado.innerText = "Seu IMC é " + imc + " - " + classificacao
}