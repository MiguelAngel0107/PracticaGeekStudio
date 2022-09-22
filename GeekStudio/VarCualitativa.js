
const Establidad_E=(x)=>{
    let valor=0;
    if(x=="ND"){valor=121;}
    if(x<=7){valor=124;}
    if(x>7){valor=120;}
    return valor;
};
const Intensidad_Caracteristicas=(x)=>{
    let valor=0;
    if(x=="Las características reflejan debilidades importantes en las perspectivas de crecimiento y en los indicadores financieros clave, los márgenes de utilidad y la competitividad. Se registran inestabilidades extremas en la industria basadas en cambios tecnológicos, regulaciones fiscales y laborales. El ambiente competitivo es intensivo entre múltiples competidores peleando por una limitada demanda o características monopolísticas con barreras de entrada al mercado extremadamente altas")
    {valor=118;}
    if(x=="Las características de la industria reflejan tendencias mixtas en crecimiento y en los indicadores financieros clave, los márgenes de utilidad y la competitividad. La industria es considerada con cierto grado de sensibilidad a los cambios en la tecnología.")
    {valor=125;}
    if(x=="Las características de la industria reflejan crecimiento y desempeño sobresaliente y estable, sus indicadores financieros clave son crecientes y tienen poca sensibilidad.")
    {valor=131;}
    if(x=="ND"){valor=123;}
    return valor;
};
const Clientes=(x)=>{
    let valor=0;
    if(x=="Menos del 15% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual.")
    {valor=141;}
    if(x=="Entre 15% y 35% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual.")
    {valor=123;}
    if(x=="Más del 35% de las ventas totales anuales de la empresa están concentradas en los tres principales clientes al cierre del ejercicio anual.")
    {valor=97;}
    if(x=="ND"){valor=100;}

    return valor;
};
const EstadosFinancieros=(x)=>{
    let valor=0;
    if(x=="Estados financieros auditados durante los 2 últimos años.")
    {valor=130;}
    if(x=="Estados financieros auditados durante el último año o no auditados.")
    {valor=118;}
    if(x=="ND"){valor=124;}

    return valor;
};
const Estructura=(x)=>{
    let valor=0;
    if(x=="La estructura organizacional está alineada con los objetivos del negocio y el entorno de control interno es sólido.")
    {valor=126;}
    if(x=="La estructura organizacional se encuentra de alguna manera inconsistente con respecto a los actuales objetivos del negocio. Se observan varios cambios organizacionales que han tenido ciertos impactos en la capacidad del deudor para operar y entregar sus productos de forma coordinada y eficiente.")
    {valor=106;}
    if(x=="Existen claras debilidades en la estructura organizacional que ponen en alto riesgo la capacidad de generar flujos de efectivo sostenible para enfrentar sus obligaciones de deuda.")
    {valor=60;}
    if(x=="Sin información"){valor=70;}

    return valor;
};
const Compocicion=(x)=>{
    let valor=0;
    if(x=="Un solo grupo o persona tiene más del 33% de la tenencia accionaria.")
    {valor=123;}
    if(x=="Un solo grupo o persona tiene entre el 10% y el 33% de la tenencia accionaria.")
    {valor=131;}
    if(x=="Un solo grupo o persona tiene menos del 10% de la tenencia accionaria.")
    {valor=147;}
    if(x=="Sin información"){valor=127;}

    return valor;
};


export const Footer=(F1, F2, F3, F4, F5,F6)=> {
    let f1=Establidad_E(F1); let f2 =Intensidad_Caracteristicas(F2);
    let f3 = Clientes(F3); let f4=EstadosFinancieros(F4); let f5=Estructura(F5);
    let f6 = Compocicion(F6);

    console.log("    Indicador   |   Valor   |    Puntos    ");
    console.log(`    Factor 1    |    ${F1}    |    ${f1}  `);
    console.log(`    Factor 2    |    ${F2}    |    ${f2}  `);
    console.log(`    Factor 3    |    ${F3}    |    ${f3}  `);
    console.log(`    Factor 4    |    ${F4}    |    ${f4}  `);
    console.log(`    Factor 5    |    ${F5}    |    ${f5}  `);
    console.log(`    Factor 6    |    ${F6}    |    ${f6}  `);

    document.getElementById("R17").innerHTML=f1;
    document.getElementById("R18").innerHTML=f2;
    document.getElementById("R19").innerHTML=f3;
    document.getElementById("R20").innerHTML=f4;
    document.getElementById("R21").innerHTML=f5;
    document.getElementById("R22").innerHTML=f6;

    return (f1+f2+f3+f4+f5+f6);
};