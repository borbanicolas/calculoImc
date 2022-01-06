var titulo = document.querySelector('.titulo')
titulo.textContent = 'aparecida nutricionista'

var paciente = document.querySelector("#primeiroPaciente")
var tdPeso = document.querySelector(".info-peso")
var tdAltura = document.querySelector(".info-altura")

var peso = tdPeso.textContent
var altura = tdAltura.textContent

var imc = peso / (altura * altura)

var tdImc = document.querySelector(".info-imc")

tdImc.textContent = imc