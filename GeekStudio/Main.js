import {Datos} from "./Datos.js";
const boton = document.getElementById("boton");
const ArrInput=[[],[]]; 
const ArrReturn=[];
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
//Asignar valores para la parte Cuantitativa 
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
//Asignar valores para la parte Cualitativa
const CreateInputCuali=(arr)=>{
    let aux=0;
    for(let i=0; i<6; i++)
    {
        aux = document.getElementById(`CL${i}`).value;
        arr.push(aux);
    }
    return arr;
}
//Procesa los valores ingresados
const Calcular=(sector, Iarr, Oarr)=>{
    let S; let C = Datos.agricola.ValorCualitativo;let m=0;
    switch(sector){
        case "A": S=Datos.agricola.ValorCuantitativo;break;
        case "E": S=Datos.energia.ValorCuantitativo;break;
        case "M": S=Datos.manufatura.ValorCuantitativo;break;
        case "C": S=Datos.comercio.ValorCuantitativo;break;
        case "S": S=Datos.servicio.ValorCuantitativo;break;
    }
    if(sector=="S"||sector=="E"){m=1}
    for(let i=0; i<(8-m); i++){
        let aux; 
        aux = ReturnValor(S[`F${i}`], Iarr[0][i]);
        Oarr.push(aux);
    }if(sector=="S"||sector=="E"){Oarr.push(0)}
    for(let i=0; i<6;i++){
        let Aux;
        Aux= ReturnValor(C[`I${i+1}`],Iarr[1][i])
        Oarr.push(Aux);
    }
    return Oarr;
}
const ResultadoTotal=(arr, C)=>{
    let cont=0;
    if(C==0){
        for(let i=0; i<8; i++){
            cont += arr[i]
        }
    }else{
        for(let i=8; i<14; i++){
            cont += arr[i]
        }
    }
    return cont;
}
const Resultados=(ValorCuanti, ValorCuali)=>{
    let Total = 0;
    Total = (ValorCuanti*0.85)+(ValorCuali*0.15);
    alert(`Total de Puntaje Cuantitativo es:  ${ValorCuanti}\nTotal de Puntaje Cuantitativo es:  ${ValorCuali}\nPuntaje Crediticio Total es:  ${Total}`);
};
//Pinta por pantalla los resultados
const Mostrar=(sector,arr)=>{
    document.getElementById("R1").innerHTML=arr[0];
    document.getElementById("R2").innerHTML=arr[1];
    document.getElementById("R3").innerHTML=arr[2];
    document.getElementById("R4").innerHTML=arr[3];
    switch(sector)
    {
        case "A":
            document.getElementById("R5").innerHTML=arr[4];
            document.getElementById("R6").innerHTML=arr[5];
            document.getElementById("R7").innerHTML=arr[6];
            document.getElementById("R8").innerHTML=arr[7]; break;
        case "E":
            document.getElementById("R8").innerHTML=arr[4];
            document.getElementById("R9").innerHTML=arr[5];
            document.getElementById("R10").innerHTML=arr[6]; break;
        case "M":
            document.getElementById("R6").innerHTML=arr[4];
            document.getElementById("R7").innerHTML=arr[5];
            document.getElementById("R11").innerHTML=arr[6];
            document.getElementById("R12").innerHTML=arr[7]; break;
        case "C": 
            document.getElementById("R7").innerHTML=arr[4];
            document.getElementById("R13").innerHTML=arr[5];
            document.getElementById("R12").innerHTML=arr[6];
            document.getElementById("R14").innerHTML=arr[7]; break;
        case "S":
            document.getElementById("R9").innerHTML=arr[4];
            document.getElementById("R15").innerHTML=arr[5];
            document.getElementById("R16").innerHTML=arr[6];break;
    };
    document.getElementById("R17").innerHTML=arr[8];
    document.getElementById("R18").innerHTML=arr[9];
    document.getElementById("R19").innerHTML=arr[10];
    document.getElementById("R20").innerHTML=arr[11];
    document.getElementById("R21").innerHTML=arr[12];
    document.getElementById("R22").innerHTML=arr[13];
}
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
    Calcular(sector, ArrInput, ArrReturn);
    //Pintar por pantalla resultados
    console.log(ArrReturn);
    console.log(ArrInput)
    Mostrar(sector, ArrReturn);
    //Pintar Totales
    Resultados(ResultadoTotal(ArrReturn,0),ResultadoTotal(ArrReturn));
    ArrReturn.length=0;
    ArrInput[0].length=0;
    ArrInput[1].length=0;
})

