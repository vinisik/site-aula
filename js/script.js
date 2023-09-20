function calcularIMC(imc) {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value

    var imc = peso / (altura * altura)
    document.getElementById("resultado").innerHTML = `O imc é ${imc.toFixed(2)}`
    if (imc < 18.5) {
        document.getElementById("mensagem").innerHTML = `Abaixo do peso`
    } else if (imc >= 18.6 && imc <= 24.9) {
        document.getElementById("mensagem").innerHTML = 'Peso ideal'
    } else if (imc >= 25.0 && imc <= 29.9) {
        document.getElementById("mensagem").innerHTML = 'Levemente acima do peso'
    } else if (imc >= 30.0 && imc <= 34.9) {
        document.getElementById("mensagem").innerHTML = 'Obesidade grau I'
    } else if (imc >= 35.0 && imc <= 39.9) {
        document.getElementById("mensagem").innerHTML = 'Obesidade grau II'
    } else if (imc > 40) {
        document.getElementById("mensagem").innerHTML = 'Obesidade grau III'
    }
}