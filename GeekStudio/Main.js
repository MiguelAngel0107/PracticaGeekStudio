import {Datos} from "./Datos.js";

//Datos.agricola.ValorCuantitativo.F4 //Modelo de como es el Array
let Valor1= Datos.agricola.ValorCuantitativo.F4;
let prueba= Datos.agricola.ValorCualitativo.I2;

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

const boton = document.getElementById("boton")

boton.addEventListener("click", () => {
    let sector = document.getElementById("empezar").value;
    for(let i=1; i<=22;i++)
    {
        document.getElementById(`R${i}`).innerHTML="-";
    };
    console.log(i+5)

    //Codigo Prueba No confirmado{}

    const ArregloInputAgricola=[];
    for(let i=0; i<4;i++)
    {
        ArregloInputAgricola[i]=document.getElementById(`B${i}`).value;
    }
    console.log(ArregloInputAgricola);
})





    