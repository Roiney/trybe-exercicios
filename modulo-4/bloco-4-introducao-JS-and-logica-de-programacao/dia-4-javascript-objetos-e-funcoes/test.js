//Formulas
// area = base * altura
// perímetro = (2* base) + (2*altura)



function calcular(base, altura) {
    let resultArea = base * altura
    let resulPerimetro = (2 * base) + (2 * altura)
    let area = {
        area: resultArea,
        perimetro: resulPerimetro,
    }
    return area
}

console.log(calcular(2, 2))

/////

function parImpar(arr){
    let contadorPar = 0;
    let contadorImpar = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            contadorPar++
        } else {
            contadorImpar++
        }
    }
    let test = {
        par: contadorPar,
        impar: contadorImpar,
    }
    return test
}


    console.log(parImpar([1, 2, 3]));
   
/////////


    function comparar(a,string){
        let igual = 0;
        let consition = false;
    for (let i = 0; i < string.length; i++){
        if (string[i] === a){
        igual++
        } else if (igual > 0){
            consition === true
        }
    }
    let resultado = {
        existe : consition,
        quantidade : igual,
    }
return resultado
    }

    console.log(comparar("a","tentando"))