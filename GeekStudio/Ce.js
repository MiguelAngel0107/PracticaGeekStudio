import {Datos} from "./Datos.js";

let Valor1= Datos.agricola.ValorCuantitativo.I1;

//El paramentro arr, tiene que ser un indicador.
const EncontrarValor=(arr, input, sector)=>{
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
                //console.log("Si esta en el arreglo")
                switch(i)
                {
                    case 0: valor=15; return valor;
                    case 1: valor=36; return valor;
                    case 2: valor=83; return valor;
                    case 3: valor=103; return valor;
                    case 4: valor=70; return valor;
                }
                
            }
        }
    }
} 
console.log(EncontrarValor(Valor1, 61))

    