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
    
    var alturaEhValida = true
    var pesoEhValido = true
    if(peso <= 0 || peso > 1000){
        console.log('peso invalido')
        tdImc.textContent = 'peso invalido'
        pesoEhValido = false
        paciente.classList.add("error")
    }
    if(altura <= 0 || altura >= 3){
        console.log('altura e invalida')
        tdImc.textContent = ' altura invalida'
        alturaEhValida = false
        paciente.classList.add("error")
    }
    if(alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura)
    tdImc.textContent = imc.toFixed(2)
    }
    
}


var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault()
    var form = document.querySelector("#form-adiciona")
    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
})