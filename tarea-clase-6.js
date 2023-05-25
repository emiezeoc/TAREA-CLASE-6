const $botonSiguiente = document.querySelector("#boton-siguiente")
const $inputCantidadIntegrantes = document.querySelector("#cantidad-integrantes")

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
        $inputEdad.type = "number";
        nodoFormularioEdades.appendChild($inputEdad);
    }
    return false;
}

function ocultarBotonSiguiente(){
    $botonSiguiente.className = "oculto"
    return false;
}




