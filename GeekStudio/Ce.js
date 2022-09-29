import {Datos} from "./Datos.js";

let Valor1= Datos.agricola.ValorCuantitativo.I1;

//El paramentro arr, tiene que ser un indicador.
const EncontrarValor=(arr, input)=>{
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
} 


console.log(EncontrarValor(Valor1, 60))

    