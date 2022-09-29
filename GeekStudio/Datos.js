//Esta funcion sirve para crear rangos con numeros enteros
function range(start, stop=undefined, step=1) {
    const startArray = stop  === undefined ? 0 : start;
    const stopArray = stop  === undefined ? start : stop;
    return Array.from({ length: (stopArray - startArray) / step + 1}, (_, i) => startArray + (i * step));
}
//Esta funcion recibe con primer parametro, un arreglo de numeros enteros, y un limite decimal (opcional), a su vez te devolvera un arreglo 
//con numeros decimales
function rangeD( rango, limite ){
    const Arreglo1 = rango;
    const Arreglo2=[];
    Arreglo1.forEach(function(elemento, indice, array) {
        for(let i=0; i<10; i++)
        {
                let aux= i/10;
                let result;
                result = elemento +aux;
                Arreglo2.push(result);
                if(result==limite){return Arreglo2;}
        }
    })
    return Arreglo2;
}


export const Datos = {
    agricola:{
        ValorCuantitativo:{
            I1:[
                [rangeD(range(1,60)), 15],
                [rangeD(range(61,74)), 36],
                [rangeD(range(75,94)), 83],
                [rangeD(range(95,100)), 103],
                [["ND", "Sin Informacion"],70]

            ],
            I2:[
                [],
                [],
                [],
                []
            ],
            I3:[
                [],
                [],
                [],
                []
            ],
            I4:[
                [],
                [],
                [],
                []
            ],
            F1:[
                [],
                [],
                [],
                []
            ],
            F2:[
                [],
                [],
                [],
                []
            ],
            F3:[
                [],
                [],
                [],
                []
            ],
            F4:[
                [],
                [],
                [],
                []
            ]

        },
        ValorCualitativo:{

        }
    },
    energia:{
        ValorCuantitativo:{

        },
        ValorCualitativo:{

        }
    },
    manufatura:{
        ValorCuantitativo:{

        },
        ValorCualitativo:{

        }
    },
    comercio:{
        ValorCuantitativo:{

        },
        ValorCualitativo:{

        }
    },
    servicio:{
        ValorCuantitativo:{

        },
        ValorCualitativo:{

        }
    }
}