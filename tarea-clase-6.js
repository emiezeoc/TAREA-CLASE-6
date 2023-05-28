const $botonSiguiente = document.querySelector("#boton-siguiente")
const $inputCantidadIntegrantes = document.querySelector("#cantidad-integrantes")
const $botonCalcular = document.querySelector("#boton-calcular")
const $botonResetear = document.querySelector("#boton-resetear")
const $resultados = document.querySelector("#resultados")


$botonSiguiente.onclick = function(){
    const cantidadIntegrantesFamilia = Number($inputCantidadIntegrantes.value)
    crearFormulario(cantidadIntegrantesFamilia)
    ocultarBotonSiguiente()
    
    return cantidadIntegrantesFamilia;
}

function crearFormulario(cantidadIntegrantesFamilia) {
    const nodoFormularioEdades = document.querySelector("#formulario-edades")
    let $labelIntegrante;
    let $inputEdad;
    
    for (let i = 0; i < cantidadIntegrantesFamilia; i++) {
        
        $labelIntegrante = document.createElement("label");
        $labelIntegrante.textContent = `Integrante ${i+1}`;
        nodoFormularioEdades.appendChild($labelIntegrante);

        $inputEdad = document.createElement("input");
        $inputEdad.className = "edad"
        $inputEdad.type = "number";
        $inputEdad.placeholder = "Edad"
        nodoFormularioEdades.appendChild($inputEdad);
    }
    return false;
}

function ocultarBotonSiguiente(){
    $botonSiguiente.className = "oculto"
    $botonCalcular.className = ""
    return false;
}

$botonCalcular.onclick = function() {
    const edadesIntegrantes = document.querySelectorAll(".edad")
    let arrayEdades = []
    for (let i = 0; i < edadesIntegrantes.length; i++) {
        arrayEdades.push (Number(edadesIntegrantes[i].value))
    }
    calcularResultados(arrayEdades)
    ocultarBotonCalcular()

    return false;
}

function calcularResultados(arrayEdades){
    const mayorEdad = Math.max(...arrayEdades);
    const menorEdad = Math.min(...arrayEdades);
    const promedioEdades = promedio(arrayEdades);

    $resultados.textContent = `La mayor edad es ${mayorEdad}, la menor edad es ${menorEdad}, y el promedio de edades es ${promedioEdades}`

    return mayorEdad, menorEdad, promedioEdades;
}

function promedio(arrayEdades) {
    let sumatoriaDeEdades = 0;
    for (let i = 0; i < arrayEdades.length; i++) {
        sumatoriaDeEdades += arrayEdades[i];        
    }
    const promedio = sumatoriaDeEdades / arrayEdades.length
    
    return promedio; 
}

function ocultarBotonCalcular() {
    $botonCalcular.className = "oculto"

    return false;
}
