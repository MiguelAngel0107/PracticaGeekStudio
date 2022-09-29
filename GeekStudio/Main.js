import {Datos} from "./Datos.js";

//Datos.agricola.ValorCuantitativo.F4 //Modelo de como es el Array
let DatosAgricola= Datos.agricola.ValorCuantitativo.F1;

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

const boton = document.getElementById("boton");

const ArrInputA=[[],[]]; const ArrInputE=[[],[]]; const ArrInputM=[[],[]];
const ArrInputC=[[],[]]; const ArrInputS=[[],[]];

const ArrReturnA=[]; const ArrReturnE=[]; const ArrReturnM=[];
const ArrReturnC=[]; const ArrReturnS=[];

boton.addEventListener("click", () => {
    let sector = document.getElementById("sector").value;
    for(let i=1; i<=22;i++)
    {
        document.getElementById(`R${i}`).innerHTML="-";
    };  
    


})





    