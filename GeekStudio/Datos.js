function range(start, stop=undefined, step=1) {
    const startArray = stop  === undefined ? 0 : start;
    const stopArray = stop  === undefined ? start : stop;
    return Array.from({ length: (stopArray - startArray) / step + 1}, (_, i) => startArray + (i * step));
}
function rangeD( rango, limite ){
    const Arreglo1 = rango;
    const Arreglo2=[];
    Arreglo1.forEach(function(elemento, indice, array) {
        for(let i=0; i<10; i++)
        {
            if(!(Arreglo1.length==elemento))
            {
                let aux= i/10;
                let result;
                result = elemento +aux;
                Arreglo2.push(result);
                
                if(result==limite){return Arreglo2;}
            }

        }
    })
    return Arreglo2;
}

export const Datos = {
    agricola:{
        ValorCuantitativo:{
            I1:[
                [rangeD(range(1,9))],
                [range(1,9)],
                [],
                []
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