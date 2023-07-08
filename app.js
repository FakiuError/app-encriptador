var textoIngresado = document.querySelector(".input");
var mensaje = document.querySelector(".textArea")

function encriptador(){
    var textoEncriptado = encriptar(textoIngresado.value)
    mensaje.value = textoEncriptado
}

function encriptar(stringEncriptado) { 

    var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let index = 0; index < matrizCodigo.length; index++) {
        if (stringEncriptado.includes(matrizCodigo[index][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[index][0],matrizCodigo[index][1])
        }
    }
    return stringEncriptado;
}

function desencriptador() { 
    var textoEncriptado = desencriptar(textoIngresado.value)
    mensaje.value = textoEncriptado;
}

function desencriptar(stringEncriptado) { 

    var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let index = 0; index < matrizCodigo.length; index++) {
        if (stringEncriptado.includes(matrizCodigo[index][1])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[index][1],matrizCodigo[index][0])
        }
    }
    return stringEncriptado;
}