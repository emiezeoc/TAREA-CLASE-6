const $botonAgregarIntegrante = document.querySelector("#boton-agregar-integrante")
const $botonQuitarIntegrante = document.querySelector("#boton-quitar-integrante")
const $botonCalcularSalario = document.querySelector("#boton-calcular")

const formularioSalarios = document.querySelector("#formulario-salarios")

$botonAgregarIntegrante.onclick = function() {
    agregarIntegrante()    
return false;
}

$botonQuitarIntegrante.onclick = function() {
    quitarIntegrante()
return false;
}

$botonCalcularSalario.onclick = function(){
    let salarios = []
    let inputSalarios = formularioSalarios.querySelectorAll("input")

    for (let i = 0; i < inputSalarios.length; i++) {
        salarios.push(inputSalarios[i].value);
    }
return console.log(salarios);
}



function agregarIntegrante() {
    let labelIntegrante = document.createElement("label")
    labelIntegrante.textContent ="Integrante"
    formularioSalarios.appendChild(labelIntegrante)

    let inputIntegrante = document.createElement("input")
    inputIntegrante.type = "number"
    inputIntegrante.placeholder = "Ingrese el salario"
    formularioSalarios.appendChild(inputIntegrante)
return false;
}



function quitarIntegrante(){    
    let label = formularioSalarios.getElementsByTagName("label")
    if (label.length > 0) {
       label [label.length -1].remove() 
    }

    let inputs = formularioSalarios.getElementsByTagName("input");
    if (inputs.length > 0) {
        inputs[inputs.length - 1].remove();
      }
return false;
}



