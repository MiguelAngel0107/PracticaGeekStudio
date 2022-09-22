import {Grafico} from "./Experiencia.js";
import {Footer} from "./VarCualitativa.js";
//Version Funcional
const ValueSector = () => {
    
    let resultado = document.getElementById("empezar").value;
    return resultado;
}

const result = document.getElementById("empezar").value;
const boton = document.querySelector("#boton");
const T = 100;

boton.addEventListener("click", () => {

    Indentificar();
})

const F1 =(x)=>{
    let reult=0;
    if( x =="Negativo"||x =="negativos"){
        reult = 52;
    }else if(x=="ND"||x=="Sin Informacion"){
            reult = 65;
        }else{
            if((T*-1) < x && x <(T*-0.007)){reult = 74;}
            if((T*-0.007)< x && x<(T*0.032)){reult =86;}
            if((T*0.032)<x&&x<(T*0.134)){reult=97;}
            if((T*0.134)<x){reult=112;};
            
        };
    return reult;
};
const F2 =(x, result)=>{
    let reult=0;
    if(result=="A")
    {
        if(x=="ND")
        {
            reult=72;
        }else{
            if(0<x&&x<38){reult =103;}
            if(38<x&&x<91){reult =91;}
            if(91<x){reult =77;}
        }; 
    };
    if(result=="M")
    {
        if(x=="ND")
        {
            reult=79;
        }else{
            if(0<x&&x<63){reult =96;}
            if(38<x&&x<200){reult =91;}
            if(200<x){reult =81;}
        };
    };
    
    return reult;
};
const F3 =(x, result)=>{
    let reult=0;
    if(result=="M")
    {
        if(x=="ND")
        {
            reult=63;
        }else{
            if((T*-1)<x&&x<(T*0.006)){reult =86;}
            if((T*0.006)<x&&x<(T*0.077)){reult =103;}
            if((T*0.077)<x){reult =118;}
        }; 
    };
    if(result=="A")
    {
        if(x=="ND")
        {
            reult=73;
        }else{
            if((T*-1)<x&&x<(T*0.001)){reult =78;}
            if((T*0.001)<x&&x<(T*0.022)){reult =88;}
            if((T*0.022)<x){reult =109;}
        }; 
    };
    if(result=="C")
    {
        if(x=="ND")
        {
            reult=61;
        }else{
            if((T*-1)<x&&x<(T*0.003)){reult =81;}
            if((T*0.003)<x&&x<(T*0.016)){reult =96;}
            if((T*0.016)<x){reult =108;}
        }; 
    };
    
    return reult;
};
const F4 =(x, result) =>{
    let reult=0;
    if(result=="A")
    {
        if(x=="ND")
        {
            reult=68;
        }else{
            if(-100<x&&x<0){reult =77;}
            if(0<x&&x<2.4){reult =87;}
            if(2.4<x&&x<3.5){reult =105;}
            if(3.5<x){reult =123;}
        }; 
    };
    if(result=="E")
    {
        if(x=="ND")
        {
            reult=88;
        }else{
            if(-100<x&&x<-3.69){reult =91;}
            if(-3.69<x&&x<0){reult =98;}
            if(0<x&&x<1.60){reult =102;}
            if(1.60<x){reult =108;}
        }; 
    };
    
    
    return reult;
};
const F5 =(x, result)=>{
    let reult=0;
    if(result=="E")
    {
        if(x=="ND")
        {
            reult=84;
        }else{
            if((T*-1)<x&&x<(T*0.007)){reult =88;}
            if((T*0.007)<x&&x<(T*0.019)){reult =99;}
            if((T*0.019)<x){reult =113;}
        }; 
    };
    if(result=="S")
    {
        if(x=="ND")
        {
            reult=40;
        }else{
            if((T*-1)<x&&x<(T*0.003)){reult =97;}
            if((T*0.003)<x&&x<(T*0.041)){reult =108;}
            if((T*0.041)<x&&x<(T*0.234)){reult =115;}
            if((T*0.234)<x){reult =120;}
        }; 
    };
    
    return reult;
};
const F6 =(x)=>{
    let reult=0;
    if(x=="ND")
    {
        reult=85;
    }else{
        if(-100<x&&x<3.87){reult =100;}
        if(3.87<x&&x<26.60){reult =109;}
        if(26.60<x){reult =119;}
    };     
    return reult;
};
const F7 =(x)=>{
    let reult=0;
    if(x=="ND")
        {
            reult=75;
        }else{
            if(-100<x&&x<0){reult =75;}
            if(0<x&&x<1.26){reult =88;}
            if(1.26<x&&x<2.90){reult =95;}
            if(2.90<x){reult =103;}
        }; 
    
    return reult;
};
const F8 =(x, result)=>{
    let reult=0;
    if(result=="M")
    {
        if(x=="ND")
        {
            reult=68;
        }else{
            if((T*-1)<x&&x<(T*0.018)){reult =110;}
            if((T*0.018)<x&&x<(T*0.024)){reult =100;}
            if((T*0.024)<x&&x<(T*0.045)){reult =90;}
            if((T*0.045)<x){reult =65;}
        }; 
    };
    if(result=="C")
    {
        if(x=="ND")
        {
            reult=83;
        }else{
            if((T*-1)<x&&x<(T*0.014)){reult =96;}
            if((T*0.014)<x&&x<(T*0.048)){reult =91;}
            if((T*0.048)<x){reult =85;}
        }; 
    };
    
    
    return reult;
};
const F9 =(x)=>{
    let reult=0;
    if(x=="ND")
        {
            reult=54;
        }else{
            if(0<x&&x<0.93){reult =78;}
            if(0.93<x&&x<1.28){reult =82;}
            if(1.28<x&&x<1.57){reult =102;}
            if(1.57<x){reult =114;}
        }; 
    
    return reult;
};
const F10 =(x)=>{
    let reult=0;
    if(x=="ND")
        {
            reult=76;
        }else{
            if(0<x&&x<100){reult =97;}
            if(100<x&&x<215){reult =92;}
            if(215<x&&x<431){reult =88;}
            if(431<x){reult =79;}
        }; 
    
    return reult;
};
const F11=(x)=>{
    let reult=0;
    if(x=="ND")
        {
            reult=79;
        }else{
            if((T*-1)<x&&x<0){reult =118;}
            if(0<x&&x<(T*0.114)){reult =128;}
            if((T*0.114)<x&&x<(T*0.25)){reult =119;}
            if((T*0.25)<x){reult =104;}
        }; 
    
    return reult;
};
const F12 =(x)=>{
    let reult=0;
    if(x=="ND")
        {
            reult=50;
        }else{
            if((T*-1)<x&&x<(T*0.06)){reult =93;}
            if((T*0.06)<x&&x<(T*0.57)){reult =109;}
            if((T*0.57)<x){reult =118;}
        }; 
    
    return reult;
};

const VP = 50;

const aux="A";


const f1 = F1(VP); const f2 = F2(VP,aux); const f3 = F3(VP,aux); const f4 = F4(VP,aux); const f5 = F5(VP,aux); const f6 = F6(VP);
const f7 = F7(VP); const f8 = F8(VP,aux); const f9 = F9(VP); const f10 = F10(VP); const f11 = F11(VP); const f12 = F12(VP);

const Indentificar = () =>{

    switch (ValueSector()){

        case "A": let V1=Grafico("A"); console.log("    Indicador   |   Valor   |    Puntos    ");
        console.log(  `Rendimiento sobre Capital ROE    |    23    |    ${f1}  ` );
        console.log(  `Periodo de cobro a Deudores      |    23    |    ${f2}  ` );
        console.log(  `Razón de efectivo a activo total |    23    |    ${f3}  ` ); 
        console.log(  `Razón de cobertura de interés    |    23    |    ${f4}  ` ); Footer(V1+TotalCuantitativo());  break;

        case "E": let V2=Grafico("E");console.log("    Indicador   |   Valor   |    Puntos    ");
        console.log(  `RRazón de cobertura de interés   |    23    |    ${f4}  ` );
        console.log(  `Razón del efectivo               |    23    |    ${f5}  ` );
        console.log(  `Razón de uso de activos fijos    |    23    |    ${f6}  ` ); Footer(V2);break;
            
        case "M": let V3=Grafico("M");console.log("    Indicador   |   Valor   |    Puntos    "); 
        console.log(  `Periodo de cobro a deudores                    |    23    |    ${f2}  ` );
        console.log(  `Razón de efectivo a activo total               |    23    |    ${f3}  ` );
        console.log(  `Razón de ventas a capital operativo empleado   |    23    |    ${f7}  ` );
        console.log(  `Razón de costo de financiamiento a ventas      |    23    |    ${f8}  ` ); Footer(V3);break;

        case "C": let V4=Grafico("C");console.log("    Indicador   |   Valor   |    Puntos    ");
        console.log(  `Razón de efectivo a activo total          |    23    |    ${f3}  ` );
        console.log(  `Razón de costo de financiamiento a ventas |    23    |    ${f8}  ` );
        console.log(  `Rotación de activos totales               |    23    |    ${f9}  ` );
        console.log(  `Periodo de pago a acreedores              |    23    |    ${f10}  ` ); Footer(V4);break;

        case "S": let V5 = Grafico("S");console.log("    Indicador   |   Valor   |    Puntos    ");
        console.log(  `Razón del efectivo                   |    23    |    ${f5}  ` );
        console.log(  `Razón de capital de trabajo a ventas |    23    |    ${f11}  ` );
        console.log(  `Margen bruto de utilidad             |    23    |    ${f12}  ` );Footer(V5+TotalCuantitativo()); break;

        default : alert("Valor no encontrado");
    }; 

};

const TotalCuantitativo=()=>{
    let Total=0;
    Total = f1+f2+f3+f4;
    return Total;
}



