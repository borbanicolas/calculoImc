var titulo = document.querySelector('.titulo')
titulo.textContent = 'aparecida nutricionista'

var pacientes = document.querySelectorAll(".paciente")

for (var i = 0 ; i < pacientes.length; i++){
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso")
    var tdAltura = paciente.querySelector(".info-altura")
    var tdImc = paciente.querySelector(".info-imc")    
    var peso = tdPeso.textContent
    var altura = tdAltura.textContent
    
    var alturaEhValida = validaAltura(altura)
    var pesoEhValido = validaPeso(peso)
    if(!pesoEhValido){
        console.log('peso invalido')
        pesoEhValido = false
        tdImc.textContent = 'peso invalido'
        paciente.classList.add("error")
    }
    if(!alturaEhValida){
        console.log('altura e invalida')
        alturaEhValida = false
        tdImc.textContent = ' altura invalida'
        paciente.classList.add("error")
    }
    if(pesoEhValido && alturaEhValida){
    var imc = calculaImc(peso, altura)
    tdImc.textContent = imc
    }
    
}

function calculaImc(peso, altura){
    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}