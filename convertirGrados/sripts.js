//boton
function convertirGrados() {
    
    //seleccionar
    const seleccion = document.getElementById("seleccion").value;
    //resultado
    const resultado = document.getElementById("resultado");
    //grados
    const grados = parseFloat(document.getElementById("grados").value);

    

    resultado.textContent = `NADA, PERRO GATO`;
    //calcular
  
    
    let F;
    let K;
    let C;

    if (seleccion == "Celsius") {
        calcularCelsius();

    } else if (seleccion == "Fahrenheit") {
        calcularFahrenheit();

    } else if (seleccion == "Kalvin") {
        calcularKalvin();
    }

    function calcularCelsius(){
        F = (9/5*grados)+32;
        K = grados+273;
        resultado.textContent = `Grados Fahrenheit: ${F}, Grados Kalvin: ${K}`;
        document.getElementsByTagName("input")[0].value = "";
    }
    function calcularFahrenheit(){
        C = (grados-32)*5/9;
        K = (grados-32)*5/9 +273;
        resultado.textContent = `Grados Celsius: ${C}, Grados Kalvin: ${K}`;
        document.getElementsByTagName("input")[0].value = "";
    }
    function calcularKalvin(){
        C = grados - 273;
        F = (grados-273)*9/5+32;
        resultado.textContent = `Grados Celsius: ${C}, Grados Fahrenheit: ${F}`;
        document.getElementsByTagName("input")[0].value = "";
    }

   
}