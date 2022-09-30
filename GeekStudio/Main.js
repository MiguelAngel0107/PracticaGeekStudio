import {Datos} from "./Datos.js";

//Datos.agricola.ValorCuantitativo.F4 //Modelo de como es el Array
let prueba= Datos.agricola.ValorCuantitativo;
let DatosAgricola1= Datos.agricola.ValorCuantitativo["F1"];

//El paramentro arr, tiene que ser un indicador.
const ReturnValor=(arr, input)=>{
    let valor=0;
    for(let i=0; i<arr.length; i++)
    {
        let Arr=arr[i][0];
        for(let j=0;j<Arr.length;j++)
        {
            let Arreglo=arr[i][0][j];
            //console.log(Arreglo);
            if(Arreglo==input)
            {
                return valor=arr[i][1];
            }
        }
    }
    valor="Numero Incorrecto";
    return valor;
} 
const CreateInputCuanti=(sector, arr)=>{
    let aux=0;
    for(let i=0; i<16;i++){
        if(sector == "A"){
            if(i<8){
                aux = document.getElementById(`C${i}`).value;
                arr.push(aux)
            }
        }
        if(sector == "E"){
            if(i<4||(6<i&&i<10)){
                aux = document.getElementById(`C${i}`).value;
                arr.push(aux)
            }
        }
        if(sector == "M"){
            if(i<4||i==5||i==6||i==10||i==11){
                aux = document.getElementById(`C${i}`).value;
                arr.push(aux)
            }
        }
        if(sector == "C"){
            if(i<4||i==6||i==11||i==12||i==13){
                aux = document.getElementById(`C${i}`).value;
                arr.push(aux)
            }
        }
        if(sector == "S"){
            if(i<4||i==8||i==14||i==15){
                aux = document.getElementById(`C${i}`).value;
                arr.push(aux)
            }
        }
    }
    return arr;
}
const CreateInputCuali=(arr)=>{
    let aux=0;
    for(let i=0; i<6; i++)
    {
        aux = document.getElementById(`CL${i}`).value;
        arr.push(aux);
    }
    return arr;
}
const Calcular=(sector, Iarr, Oarr)=>{
    let S; let C = Datos.agricola.ValorCualitativo;
    switch(sector){
        case "A": S=Datos.agricola.ValorCuantitativo;break;
        case "E": S=Datos.energia.ValorCuantitativo;break;
        case "M": S=Datos.manufatura.ValorCuantitativo;break;
        case "C": S=Datos.comercio.ValorCuantitativo;break;
        case "S": S=Datos.servicio.ValorCuantitativo;break;
    }
    for(let i=0; i<4; i++){
        let aux;
        aux = ReturnValor(S[`F${i}`], Iarr[0][i]);
        Oarr.push(aux);
    }
    for(let i=0; i<4;i++){
        let Aux;
        Aux= ReturnValor(C[`I${i+1}`],Iarr[1][i])
        Oarr.push(Aux);
    }
    return Oarr;
}

const boton = document.getElementById("boton");

const ArrInput=[[],[]]; 

const ArrReturn=[]; 

boton.addEventListener("click", () => {
    let sector = document.getElementById("sector").value;
    for(let i=1; i<=22;i++)
    {
        document.getElementById(`R${i}`).innerHTML="-";
    };  

    //Asignar Valores
    CreateInputCuanti(sector, ArrInput[0]);
    CreateInputCuali(ArrInput[1]);

    
    //Procesar Informacion
    console.log(Calcular(sector, ArrInput, ArrReturn));
    


})





    