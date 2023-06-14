const $botonAgregarIntegrante = document.querySelector("#boton-agregar-integrante");
const $botonQuitarIntegrante = document.querySelector("#boton-quitar-integrante");
const $botonCalcularSalario = document.querySelector("#boton-calcular");
const $botonResetear = document.querySelector("#boton-resetear");
const formularioSalarios = document.querySelector("#formulario-salarios");
const resultadosContainer =document.querySelector("#resultados-container");
const resultados = document.querySelector("#resultados");

let contadorClicks = 0;

$botonAgregarIntegrante.onclick = function() {
    if (contadorClicks < 10) {
        agregarIntegrante()
        contadorClicks++;
    }
    else {
        alert("Llegaste a la cantidad maxima de integrantes")
    }
    if(contadorClicks > 0) {
        mostrarBotonCalcular()
        return false;
    }
return false;
}

$botonQuitarIntegrante.onclick = function() {
    if (contadorClicks > 0) {
        quitarIntegrante()
        contadorClicks--;
    } 
    if (contadorClicks < 1) {
        ocultarBotonCalcular()
        return false;
    }
return false;
}

$botonCalcularSalario.onclick = function(){
    
    let salarios = [];
    let inputSalarios = formularioSalarios.querySelectorAll("input");

    for (let i = 0; i < inputSalarios.length; i++) {
        if(inputSalarios[i].value > 0)
        salarios.push(inputSalarios[i].value);
    }
    if (salarios == 0) {
        alert("No ingresaste ningun salario")
        return false;
    }

    let maximoSalarioAnual = Math.max(...salarios);
    let minimoSalarioAnual = Math.min(...salarios);
    let salarioAnualPromedio = calcularPromedio(salarios);
    let salarioMensualPromedio = salarioAnualPromedio / 12;

    resultados.textContent = `El salario anual maximo es ${maximoSalarioAnual}, el salario anual minimo es ${minimoSalarioAnual}, el salario anual promedio es ${salarioAnualPromedio} y el salario mensual promedio es ${salarioMensualPromedio}`;

    mostraResultadosContainer()
    ocultarBotonCalcular()
    mostrarBotonResetear()
return false;
}

$botonResetear.onclick = function() {
    contadorClicks = 0;
    resultados.textContent = "";
    formularioSalarios.innerHTML = "";
    ocultarBotonCalcular()
    ocultarResultadosContainer()
    ocultarBotonResetear()
return false;
}

function agregarIntegrante() {
    let labelIntegrante = document.createElement("label");
    labelIntegrante.textContent =`Integrante ${contadorClicks + 1}`;
    formularioSalarios.appendChild(labelIntegrante)

    let inputIntegrante = document.createElement("input");
    inputIntegrante.type = "number";
    inputIntegrante.placeholder = "Ingrese el salario";
    inputIntegrante.value = 0;
    formularioSalarios.appendChild(inputIntegrante)
return false;
}

function quitarIntegrante(){    
    let label = formularioSalarios.getElementsByTagName("label");
    if (label.length > 0) {
       label [label.length -1].remove() 
    }
    let inputs = formularioSalarios.getElementsByTagName("input");
    if (inputs.length > 0) {
        inputs[inputs.length - 1].remove();
      }
return false;
}


function mostrarBotonCalcular() {
    $botonCalcularSalario.className = "";
return false;
}

function ocultarBotonCalcular(){
    $botonCalcularSalario.className = "oculto";
return false;
}

function mostraResultadosContainer(){
    resultadosContainer.className = "";
return false;
}

function ocultarResultadosContainer() {
    resultadosContainer.className = "oculto";
return false;
}

function mostrarBotonResetear(){
    $botonResetear.className = "";
return false;
}

function ocultarBotonResetear(){
    $botonResetear.className = "oculto";
return false;
}

function calcularPromedio(salarios) {
    let sumatoriaSalarios = 0;

    for (let i = 0; i < salarios.length; i++) {
        sumatoriaSalarios += Number(salarios[i]);
    }
    const promedio = sumatoriaSalarios/salarios.length;

return promedio;
}
