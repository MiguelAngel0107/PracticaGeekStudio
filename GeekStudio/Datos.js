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
            I1:[
                [rangeD(range(-50,7),7), 124],
                [rangeD(range(7,50)), 120],
                [["ND", "Sin Informacion"],121]
            ],
            I2:[
                [["Las características reflejan debilidades importantes en las perspectivas de crecimiento y en los indicadores financieros clave, los márgenes de utilidad y la competitividad. Se registran inestabilidades extremas en la industria basadas en cambios tecnológicos, regulaciones fiscales y laborales. El ambiente competitivo es intensivo entre múltiples competidores peleando por una limitada demanda o características monopolísticas con barreras de entrada al mercado extremadamente altas."],118],
                [["Las características de la industria reflejan tendencias mixtas en crecimiento y en los indicadores financieros clave, los márgenes de utilidad y la competitividad. La industria es considerada con cierto grado de sensibilidad a los cambios en la tecnología."],125],
                [["Las características de la industria reflejan crecimiento y desempeño sobresaliente y estable, sus indicadores financieros clave son crecientes y tienen poca sensibilidad."],131],
                [["ND", "Sin Informacion"],123]
            ],
            I3:[
                [["Menos del 15% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual."],141],
                [["Entre 15% y 35% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual."],123],
                [["Más del 35% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual."],97],
                [["ND", "Sin Informacion"],100]
            ],
            I4:[
                [["Estados financieros auditados durante los 2 últimos años."],130],
                [["Estados financieros auditados durante el último año o no auditados."],118],
                [["ND", "Sin Informacion"],124]
            ],
            I5:[
                [["La estructura organizacional está alineada con los objetivos del negocio y el entorno de control interno es sólido."],128],
                [["La estructura organizacional se encuentra de alguna manera inconsistente con respecto a los actuales objetivos del negocio. Se observan varios cambios organizacionales que han tenido ciertos impactos en la capacidad del deudor para operar y entregar sus productos de forma coordinada y eficiente."],106],
                [["Existen claras debilidades en la estructura organizacional que ponen en alto riesgo la capacidad de generar flujos de efectivo sostenible para enfrentar sus obligaciones de deuda."],60],
                [["ND", "Sin Informacion"],70]
            ],
            I6:[
                [["Un solo grupo o persona tiene más del 33% de la tenencia accionaria."],123],
                [["Un solo grupo o persona tiene entre el 10% y el 33% de la tenencia accionaria"],131],
                [["Un solo grupo o persona tiene menos del 10% de la tenencia accionaria."],147],
                [["ND", "Sin Informacion"],127]
            ]
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
            I1:[
                [rangeD(range(-50,7),7), 124],
                [rangeD(range(7,50)), 120],
                [["ND", "Sin Informacion"],121]
            ],
            I2:[
                [["Las características reflejan debilidades importantes en las perspectivas de crecimiento y en los indicadores financieros clave, los márgenes de utilidad y la competitividad. Se registran inestabilidades extremas en la industria basadas en cambios tecnológicos, regulaciones fiscales y laborales. El ambiente competitivo es intensivo entre múltiples competidores peleando por una limitada demanda o características monopolísticas con barreras de entrada al mercado extremadamente altas."],118],
                [["Las características de la industria reflejan tendencias mixtas en crecimiento y en los indicadores financieros clave, los márgenes de utilidad y la competitividad. La industria es considerada con cierto grado de sensibilidad a los cambios en la tecnología."],125],
                [["Las características de la industria reflejan crecimiento y desempeño sobresaliente y estable, sus indicadores financieros clave son crecientes y tienen poca sensibilidad."],131],
                [["ND", "Sin Informacion"],123]
            ],
            I3:[
                [["Menos del 15% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual."],141],
                [["Entre 15% y 35% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual."],123],
                [["Más del 35% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual."],97],
                [["ND", "Sin Informacion"],100]
            ],
            I4:[
                [["Estados financieros auditados durante los 2 últimos años."],130],
                [["Estados financieros auditados durante el último año o no auditados."],118],
                [["ND", "Sin Informacion"],124]
            ],
            I5:[
                [["La estructura organizacional está alineada con los objetivos del negocio y el entorno de control interno es sólido."],128],
                [["La estructura organizacional se encuentra de alguna manera inconsistente con respecto a los actuales objetivos del negocio. Se observan varios cambios organizacionales que han tenido ciertos impactos en la capacidad del deudor para operar y entregar sus productos de forma coordinada y eficiente."],106],
                [["Existen claras debilidades en la estructura organizacional que ponen en alto riesgo la capacidad de generar flujos de efectivo sostenible para enfrentar sus obligaciones de deuda."],60],
                [["ND", "Sin Informacion"],70]
            ],
            I6:[
                [["Un solo grupo o persona tiene más del 33% de la tenencia accionaria."],123],
                [["Un solo grupo o persona tiene entre el 10% y el 33% de la tenencia accionaria"],131],
                [["Un solo grupo o persona tiene menos del 10% de la tenencia accionaria."],147],
                [["ND", "Sin Informacion"],127]
            ]
        }
    },

    manufatura:{
        ValorCuantitativo:{
            I1:[
                [rangeD(range(0,85)), 2],
                [rangeD(range(86,92)), 37],
                [rangeD(range(93,95)), 64],
                [rangeD(range(96,99)), 87],
                [rangeD(range(100,120)), 115],
                [["ND", "Sin Informacion"],94]
            ],
            I2:[
                [rangeD(range(0,73)), 37],
                [rangeD(range(74,91)), 47],
                [rangeD(range(92,98)), 78],
                [rangeD(range(99,100)), 97],
                [["ND", "Sin Informacion"],82]
            ],
            I3:[
                [rangeD(range(0,0)), 86],
                [rangeD(range(1,1)), 53],
                [rangeD(range(2,2)), 22],
                [rangeD(range(3,10)), -28],
                [["ND", "Sin Informacion"],70]
            ],
            I4:[
                [rangeD(range(0,66)), 53],
                [rangeD(range(67,81)), 66],
                [rangeD(range(82,95)), 68],
                [rangeD(range(96,110)), 85],
                [["ND", "Sin Informacion"],77]
            ],
            F1:[
                [rangeD(range(0,62)), 96],
                [rangeD(range(63,200)), 91],
                [rangeD(range(200,250)), 81],
                [["ND", "Sin Informacion"],79]
            ],
            F2:[
                [rangeD(range(-100,0),0.6), 86],
                [rangeD(range(0,7),7.7), 103],
                [rangeD(range(7,10)), 118],
                [["ND", "Sin Informacion"],63]
            ],
            F3:[
                [rangeD(range(-100,0),0), 75],
                [rangeD(range(0,1),1.3), 88],
                [rangeD(range(1,2)), 95],
                [rangeD(range(3,10)), 103],
                [["ND", "Sin Informacion"],75]
            ],
            F4:[
                [rangeD(range(-100,1),1.8), 110],
                [rangeD(range(1,2),2.4), 100],
                [rangeD(range(2,4),4.5), 90],
                [rangeD(range(4,30)), 65],
                [["ND", "Sin Informacion"],68]
            ]
        },
        ValorCualitativo:{
            I1:[
                [rangeD(range(-50,7),7), 124],
                [rangeD(range(7,50)), 120],
                [["ND", "Sin Informacion"],121]
            ],
            I2:[
                [["Las características reflejan debilidades importantes en las perspectivas de crecimiento y en los indicadores financieros clave, los márgenes de utilidad y la competitividad. Se registran inestabilidades extremas en la industria basadas en cambios tecnológicos, regulaciones fiscales y laborales. El ambiente competitivo es intensivo entre múltiples competidores peleando por una limitada demanda o características monopolísticas con barreras de entrada al mercado extremadamente altas."],118],
                [["Las características de la industria reflejan tendencias mixtas en crecimiento y en los indicadores financieros clave, los márgenes de utilidad y la competitividad. La industria es considerada con cierto grado de sensibilidad a los cambios en la tecnología."],125],
                [["Las características de la industria reflejan crecimiento y desempeño sobresaliente y estable, sus indicadores financieros clave son crecientes y tienen poca sensibilidad."],131],
                [["ND", "Sin Informacion"],123]
            ],
            I3:[
                [["Menos del 15% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual."],141],
                [["Entre 15% y 35% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual."],123],
                [["Más del 35% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual."],97],
                [["ND", "Sin Informacion"],100]
            ],
            I4:[
                [["Estados financieros auditados durante los 2 últimos años."],130],
                [["Estados financieros auditados durante el último año o no auditados."],118],
                [["ND", "Sin Informacion"],124]
            ],
            I5:[
                [["La estructura organizacional está alineada con los objetivos del negocio y el entorno de control interno es sólido."],128],
                [["La estructura organizacional se encuentra de alguna manera inconsistente con respecto a los actuales objetivos del negocio. Se observan varios cambios organizacionales que han tenido ciertos impactos en la capacidad del deudor para operar y entregar sus productos de forma coordinada y eficiente."],106],
                [["Existen claras debilidades en la estructura organizacional que ponen en alto riesgo la capacidad de generar flujos de efectivo sostenible para enfrentar sus obligaciones de deuda."],60],
                [["ND", "Sin Informacion"],70]
            ],
            I6:[
                [["Un solo grupo o persona tiene más del 33% de la tenencia accionaria."],123],
                [["Un solo grupo o persona tiene entre el 10% y el 33% de la tenencia accionaria"],131],
                [["Un solo grupo o persona tiene menos del 10% de la tenencia accionaria."],147],
                [["ND", "Sin Informacion"],127]
            ]
        }
    },

    comercio:{
        ValorCuantitativo:{
            I1:[
                [rangeD(range(0,65)), 3],
                [rangeD(range(66,82)), 23],
                [rangeD(range(83,88)), 43],
                [rangeD(range(89,93)), 62],
                [rangeD(range(94,100)), 102],
                [["ND", "Sin Informacion"],98]
            ],
            I2:[
                [rangeD(range(0,88)), 52],
                [rangeD(range(89,98)), 78],
                [rangeD(range(99,100)), 103],
                [["ND", "Sin Informacion"],89]
            ],
            I3:[
                [rangeD(range(0,0)), 98],
                [rangeD(range(1,1)), 39],
                [rangeD(range(2,2)), 11],
                [rangeD(range(3,10)), -43],
                [["ND", "Sin Informacion"],69]
            ],
            I4:[
                [rangeD(range(0,55)), 33],
                [rangeD(range(56,92)), 54],
                [rangeD(range(93,99)), 64],
                [rangeD(range(100,120)), 92],
                [["ND", "Sin Informacion"],78]
            ],
            F1:[
                [rangeD(range(-100,0),0.3), 81],
                [rangeD(range(0,1),1.6), 98],
                [rangeD(range(1,15)), 108],
                [["ND", "Sin Informacion"],61]
            ],
            F2:[
                [rangeD(range(-100,1),1.4), 96],
                [rangeD(range(1,4),4.8), 91],
                [rangeD(range(4,50)), 85],
                [["ND", "Sin Informacion"],83]
            ],
            F3:[
                [rangeD(range(0,0)), 78],
                [rangeD(range(1,1),1.3), 82],
                [rangeD(range(1,1),1.6), 102],
                [rangeD(range(1,10)), 114],
                [["ND", "Sin Informacion"],54]
            ],
            F4:[
                [rangeD(range(0,99)), 97],
                [rangeD(range(100,214)), 92],
                [rangeD(range(215,430),3.5), 88],
                [rangeD(range(431,500)), 79],
                [["ND", "Sin Informacion"],76]
            ]
        },
        ValorCualitativo:{
            I1:[
                [rangeD(range(-50,7),7), 124],
                [rangeD(range(7,50)), 120],
                [["ND", "Sin Informacion"],121]
            ],
            I2:[
                [["Las características reflejan debilidades importantes en las perspectivas de crecimiento y en los indicadores financieros clave, los márgenes de utilidad y la competitividad. Se registran inestabilidades extremas en la industria basadas en cambios tecnológicos, regulaciones fiscales y laborales. El ambiente competitivo es intensivo entre múltiples competidores peleando por una limitada demanda o características monopolísticas con barreras de entrada al mercado extremadamente altas."],118],
                [["Las características de la industria reflejan tendencias mixtas en crecimiento y en los indicadores financieros clave, los márgenes de utilidad y la competitividad. La industria es considerada con cierto grado de sensibilidad a los cambios en la tecnología."],125],
                [["Las características de la industria reflejan crecimiento y desempeño sobresaliente y estable, sus indicadores financieros clave son crecientes y tienen poca sensibilidad."],131],
                [["ND", "Sin Informacion"],123]
            ],
            I3:[
                [["Menos del 15% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual."],141],
                [["Entre 15% y 35% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual."],123],
                [["Más del 35% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual."],97],
                [["ND", "Sin Informacion"],100]
            ],
            I4:[
                [["Estados financieros auditados durante los 2 últimos años."],130],
                [["Estados financieros auditados durante el último año o no auditados."],118],
                [["ND", "Sin Informacion"],124]
            ],
            I5:[
                [["La estructura organizacional está alineada con los objetivos del negocio y el entorno de control interno es sólido."],128],
                [["La estructura organizacional se encuentra de alguna manera inconsistente con respecto a los actuales objetivos del negocio. Se observan varios cambios organizacionales que han tenido ciertos impactos en la capacidad del deudor para operar y entregar sus productos de forma coordinada y eficiente."],106],
                [["Existen claras debilidades en la estructura organizacional que ponen en alto riesgo la capacidad de generar flujos de efectivo sostenible para enfrentar sus obligaciones de deuda."],60],
                [["ND", "Sin Informacion"],70]
            ],
            I6:[
                [["Un solo grupo o persona tiene más del 33% de la tenencia accionaria."],123],
                [["Un solo grupo o persona tiene entre el 10% y el 33% de la tenencia accionaria"],131],
                [["Un solo grupo o persona tiene menos del 10% de la tenencia accionaria."],147],
                [["ND", "Sin Informacion"],127]
            ]
        }
    },

    servicio:{
        ValorCuantitativo:{
            I1:[
                [rangeD(range(0,57)), 54],
                [rangeD(range(58,76)), 77],
                [rangeD(range(77,91)), 88],
                [rangeD(range(92,97)), 97],
                [rangeD(range(98,99)), 107],
                [rangeD(range(100,200)), 115],
                [["ND", "Sin Informacion"],114]
            ],
            I2:[
                [rangeD(range(0,81)), 90],
                [rangeD(range(82,99)), 96],
                [rangeD(range(100,200)), 107],
                [["ND", "Sin Informacion"],104]
            ],
            I3:[
                [rangeD(range(0,0)), 115],
                [rangeD(range(1,1)), 73],
                [rangeD(range(2,2)), 24],
                [rangeD(range(3,10)), -11],
                [["ND", "Sin Informacion"],94]
            ],
            I4:[
                [rangeD(range(0,64)), 55],
                [rangeD(range(65,86)), 78],
                [rangeD(range(87,99)), 88],
                [rangeD(range(100,150)), 107],
                [["ND", "Sin Informacion"],98]
            ],
            F1:[
                [rangeD(range(-100,0),0.3), 97],
                [rangeD(range(0,4),4.1), 108],
                [rangeD(range(4,23),23.4), 115],
                [rangeD(range(23,100)), 120],
                [["ND", "Sin Informacion"],40]
            ],
            F2:[
                [rangeD(range(-100,0),0), 118],
                [rangeD(range(0,11),11.4), 126],
                [rangeD(range(11,24)), 119],
                [rangeD(range(25,100)), 104],
                [["ND", "Sin Informacion"],79]
            ],
            F3:[
                [rangeD(range(-100,5)), 93],
                [rangeD(range(6,56)), 109],
                [rangeD(range(57,100)), 118],
                [["ND", "Sin Informacion"],50]
            ]
        },
        ValorCualitativo:{
            I1:[
                [rangeD(range(-50,7),7), 124],
                [rangeD(range(7,50)), 120],
                [["ND", "Sin Informacion"],121]
            ],
            I2:[
                [["Las características reflejan debilidades importantes en las perspectivas de crecimiento y en los indicadores financieros clave, los márgenes de utilidad y la competitividad. Se registran inestabilidades extremas en la industria basadas en cambios tecnológicos, regulaciones fiscales y laborales. El ambiente competitivo es intensivo entre múltiples competidores peleando por una limitada demanda o características monopolísticas con barreras de entrada al mercado extremadamente altas."],118],
                [["Las características de la industria reflejan tendencias mixtas en crecimiento y en los indicadores financieros clave, los márgenes de utilidad y la competitividad. La industria es considerada con cierto grado de sensibilidad a los cambios en la tecnología."],125],
                [["Las características de la industria reflejan crecimiento y desempeño sobresaliente y estable, sus indicadores financieros clave son crecientes y tienen poca sensibilidad."],131],
                [["ND", "Sin Informacion"],123]
            ],
            I3:[
                [["Menos del 15% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual."],141],
                [["Entre 15% y 35% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual."],123],
                [["Más del 35% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual."],97],
                [["ND", "Sin Informacion"],100]
            ],
            I4:[
                [["Estados financieros auditados durante los 2 últimos años."],130],
                [["Estados financieros auditados durante el último año o no auditados."],118],
                [["ND", "Sin Informacion"],124]
            ],
            I5:[
                [["La estructura organizacional está alineada con los objetivos del negocio y el entorno de control interno es sólido."],128],
                [["La estructura organizacional se encuentra de alguna manera inconsistente con respecto a los actuales objetivos del negocio. Se observan varios cambios organizacionales que han tenido ciertos impactos en la capacidad del deudor para operar y entregar sus productos de forma coordinada y eficiente."],106],
                [["Existen claras debilidades en la estructura organizacional que ponen en alto riesgo la capacidad de generar flujos de efectivo sostenible para enfrentar sus obligaciones de deuda."],60],
                [["ND", "Sin Informacion"],70]
            ],
            I6:[
                [["Un solo grupo o persona tiene más del 33% de la tenencia accionaria."],123],
                [["Un solo grupo o persona tiene entre el 10% y el 33% de la tenencia accionaria"],131],
                [["Un solo grupo o persona tiene menos del 10% de la tenencia accionaria."],147],
                [["ND", "Sin Informacion"],127]
            ]
        }
    }
}