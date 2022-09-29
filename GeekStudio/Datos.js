//Esta funcion sirve para crear rangos con numeros enteros
function range(start, stop=undefined, step=1) {
    const startArray = stop  === undefined ? 0 : start;
    const stopArray = stop  === undefined ? start : stop;
    return Array.from({ length: (stopArray - startArray) / step + 1}, (_, i) => startArray + (i * step));
}
//Esta funcion recibe con primer parametro, un arreglo de numeros enteros, y un limite decimal (opcional), a su vez te devolvera un arreglo 
//con numeros decimales
function rangeD( rango, limite ){
    const Arreglo2=[];
    for(let i=0; i<rango.length; i++) {
        let arr=rango[i];
        for(let i=0; i<10; i++)
        {
            let aux= i/10;
            let result;
            result = arr +aux;
            Arreglo2.push(result);
            if(result==limite){return Arreglo2;}
        }
    }
    /*Arreglo1.forEach(function(elemento, indice, array) {
        for(let i=0; i<10; i++)
        {
                let aux= i/10;
                let result;
                result = elemento +aux;
                Arreglo2.push(result);
                if(result==limite){return Arreglo2;}
        }
    })*/
    return Arreglo2;
}

export const Datos = {
    agricola:{
        ValorCuantitativo:{
            I1:[
                [rangeD(range(0,60)), 15],
                [rangeD(range(61,74)), 36],
                [rangeD(range(75,94)), 83],
                [rangeD(range(95,100)), 103],
                [["ND", "Sin Informacion"],70]
            ],
            I2:[
                [rangeD(range(0,78)), 68],
                [rangeD(range(79,96)), 87],
                [rangeD(range(97,100)), 95],
                [["ND", "Sin Informacion"],69]
            ],
            I3:[
                [rangeD(range(0,0)), 86],
                [rangeD(range(1,1)), 39],
                [rangeD(range(2,2)), -50],
                [rangeD(range(3,10)), -100],
                [["ND", "Sin Informacion"],63]
            ],
            I4:[
                [rangeD(range(0,46)), 51],
                [rangeD(range(47,67)), 58],
                [rangeD(range(68,97)), 66],
                [rangeD(range(98,100)), 79],
                [["ND", "Sin Informacion"],73]
            ],
            F1:[
                [["Negativos","negativos"],52],
                [rangeD(range(-100,0),-0.7), 74],
                [rangeD(range(-1,3),3.2), 86],
                [rangeD(range(3,13),13.4), 97],
                [rangeD(range(13,100)), 112],
                [["ND", "Sin Informacion"],65]
            ],
            F2:[
                [rangeD(range(0,37)), 103],
                [rangeD(range(38,90)), 91],
                [rangeD(range(91,100)), 77],
                [["ND", "Sin Informacion"],72]
            ],
            F3:[
                [rangeD(range(-100,0),0.1), 78],
                [rangeD(range(0,2),2.2), 88],
                [rangeD(range(2,20)), 109],
                [["ND", "Sin Informacion"],73]
            ],
            F4:[
                [rangeD(range(-100,0),0), 77],
                [rangeD(range(0,2),2.4), 87],
                [rangeD(range(2,3),3.5), 105],
                [rangeD(range(3,30)), 123],
                [["ND", "Sin Informacion"],68]
            ]
        },
        ValorCualitativo:{

        }
    },
    energia:{
        ValorCuantitativo:{
            I1:[
                [rangeD(range(0,92)), 54],
                [rangeD(range(93,99)), 96],
                [rangeD(range(100,120)), 127],
                [["ND", "Sin Informacion"],71]
            ],
            I2:[
                [rangeD(range(0,78)), 64],
                [rangeD(range(79,99)), 91],
                [rangeD(range(100,120)), 118],
                [["ND", "Sin Informacion"],83]
            ],
            I3:[
                [rangeD(range(0,0)), 121],
                [rangeD(range(1,1)), 58],
                [rangeD(range(2,2)), 12],
                [rangeD(range(3,10)), -57],
                [["ND", "Sin Informacion"],90]
            ],
            I4:[
                [rangeD(range(0,49)), 66],
                [rangeD(range(50,70)), 73],
                [rangeD(range(71,94)), 81],
                [rangeD(range(95,99)), 86],
                [rangeD(range(100,120)), 102],
                [["ND", "Sin Informacion"],94]
            ],
            F1:[
                [rangeD(range(-100,0),-3.7), 91],
                [rangeD(range(-4,0),0), 98],
                [rangeD(range(0,2),1.6), 102],
                [rangeD(range(1,10)), 108],
                [["ND", "Sin Informacion"],88]
            ],
            F2:[
                [rangeD(range(-100,0),0.7), 88],
                [rangeD(range(0,2),1.9), 99],
                [rangeD(range(2,20)), 113],
                [["ND", "Sin Informacion"],84]
            ],
            F3:[
                [rangeD(range(-100,3)), 100],
                [rangeD(range(4,26),26.6), 109],
                [rangeD(range(26,100)), 119],
                [["ND", "Sin Informacion"],85]
            ]
        },
        ValorCualitativo:{

        }
    },
    manufatura:{
        ValorCuantitativo:{
            I1:[
                [rangeD(range(0,60)), 15],
                [rangeD(range(61,74)), 36],
                [rangeD(range(75,94)), 83],
                [rangeD(range(95,100)), 103],
                [["ND", "Sin Informacion"],70]
            ],
            I2:[
                [rangeD(range(0,78)), 68],
                [rangeD(range(79,96)), 87],
                [rangeD(range(97,100)), 95],
                [["ND", "Sin Informacion"],69]
            ],
            I3:[
                [rangeD(range(0,0)), 86],
                [rangeD(range(1,1)), 39],
                [rangeD(range(2,2)), -50],
                [rangeD(range(3,10)), -100],
                [["ND", "Sin Informacion"],63]
            ],
            I4:[
                [rangeD(range(0,46)), 51],
                [rangeD(range(47,67)), 58],
                [rangeD(range(68,97)), 66],
                [rangeD(range(98,100)), 79],
                [["ND", "Sin Informacion"],73]
            ],
            F1:[
                [["Negativos","negativos"],52],
                [rangeD(range(-100,0),-0.7), 74],
                [rangeD(range(-1,3),3.2), 86],
                [rangeD(range(3,13),13.4), 97],
                [rangeD(range(13,100)), 112],
                [["ND", "Sin Informacion"],65]
            ],
            F2:[
                [rangeD(range(0,37)), 103],
                [rangeD(range(38,90)), 91],
                [rangeD(range(91,100)), 77],
                [["ND", "Sin Informacion"],72]
            ],
            F3:[
                [rangeD(range(-100,0),0.1), 78],
                [rangeD(range(0,2),2.2), 88],
                [rangeD(range(2,20)), 109],
                [["ND", "Sin Informacion"],73]
            ],
            F4:[
                [rangeD(range(-100,0),0), 77],
                [rangeD(range(0,2),2.4), 87],
                [rangeD(range(2,3),3.5), 105],
                [rangeD(range(3,30)), 123],
                [["ND", "Sin Informacion"],68]
            ]
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