
var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault()
    var form = document.querySelector("#form-adiciona")
    
    var paciente= obtemDadosDoPaciente(form)
    console.log(paciente)
    
    var pacienteTr = document.createElement("tr")

    
    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")
    nomeTd.textContent = paciente.nome
    pesoTd.textContent = paciente.peso
    alturaTd.textContent = paciente.altura
    gorduraTd.textContent = paciente.gordura
    imcTd.textContent = calculaImc(peso,altura)
   
    
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)
   
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
    form.reset();
})

function obtemDadosDoPaciente(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}
function montaTd(dado, classe){
    var td = document.createElement("td")
    td.classList.add(classe)
    td.textContent = dado

    return td
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.altura, "inf-altura"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))
    return pacienteTr
}
