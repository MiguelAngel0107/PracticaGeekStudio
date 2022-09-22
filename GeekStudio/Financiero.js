import {Grafico} from "./Experiencia.js";
import {Footer} from "./VarCualitativa.js";
//Version Funcional
const ValueSector = (callback) => {
    
    let resultado;
    switch (callback) 
    {
        case "A": resultado = "A";break;
        case "E": resultado = "E";break;
        case "M": resultado = "M";break;
        case "C": resultado = "C";break;
        case "S": resultado = "S";break;
        default: alert("Vuelve a introducir el valor");break;
    }

    return resultado;
}
const aux=()=>{let z; z=document.getElementById("empezar").value; return z;};

const T = 1;

boton.addEventListener("click", () => {
    //console.log(ValueSector(document.getElementById("empezar").value))
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
            if(63<x&&x<200){reult =91;}
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



function A1(){let I; I=document.getElementById("A1").value; return I;};
function A2(){let I; I=document.getElementById("A2").value; return I;};
function A3(){let I; I=document.getElementById("A3").value; return I;};
function A4(){let I; I=document.getElementById("A4").value; return I;};

function B1(){let I; I=document.getElementById("B1").value; return I;};
function B2(){let I; I=document.getElementById("B2").value; return I;};
function B3(){let I; I=document.getElementById("B3").value; return I;};
function B4(){let I; I=document.getElementById("B4").value; return I;};
function B5(){let I; I=document.getElementById("B5").value; return I;};
function B6(){let I; I=document.getElementById("B6").value; return I;};
function B7(){let I; I=document.getElementById("B7").value; return I;};
function B8(){let I; I=document.getElementById("B8").value; return I;};
function B9(){let I; I=document.getElementById("B9").value; return I;};
function B10(){let I; I=document.getElementById("B10").value; return I;};
function B11(){let I; I=document.getElementById("B11").value; return I;};
function B12(){let I; I=document.getElementById("B12").value; return I;};

function CL1(){let I; I=document.getElementById("CL1").value; return I;};
function CL2(){let I; I=document.getElementById("CL2").value; return I;};
function CL3(){let I; I=document.getElementById("CL3").value; return I;};
function CL4(){let I; I=document.getElementById("CL4").value; return I;};
function CL5(){let I; I=document.getElementById("CL5").value; return I;};
function CL6(){let I; I=document.getElementById("CL6").value; return I;};

const Indentificar = () =>{

    let f1 = F1(B1()); let f2 = F2(B2(),aux()); 
    let f3 = F3(B3(),aux()); 
    let f4 = F4(B4(),aux()); 
    let f5 = F5(B5(),aux()); let f6 = F6(B6());
    let f7 = F7(B7()); let f8 = F8(B8(),aux()); 
    let f9 = F9(B9()); let f10 = F10(B10()); let f11 = F11(B11()); let f12 = F12(B12());


    switch (ValueSector(document.getElementById("empezar").value)){

        case "A": let V1=Grafico("A",A1(),A2(),A3(),A4()); 
        console.log("    Indicador   |   Valor   |    Puntos    ");
        console.log(  `Rendimiento sobre Capital ROE    |    ${B1()}    |    ${f1}  ` );
        console.log(  `Periodo de cobro a Deudores      |    ${B2()}    |    ${f2}  ` );
        console.log(  `Razón de efectivo a activo total |    ${B3()}    |    ${f3}  ` ); 
        console.log(  `Razón de cobertura de interés    |    ${B4()}    |    ${f4}  ` ); 
        let cuali_A=Footer(CL1(),CL2(),CL3(),CL4(),CL5(),CL6());
        Resultados(V1+TotalCuantitativo("A",f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12), cuali_A); break;

        case "E": let V2=Grafico("E",A1(),A2(),A3(),A4());
        console.log("    Indicador   |   Valor   |    Puntos    ");
        console.log(  `RRazón de cobertura de interés   |    ${B4()}    |    ${f4}  ` );
        console.log(  `Razón del efectivo               |    ${B5()}    |    ${f5}  ` );
        console.log(  `Razón de uso de activos fijos    |    ${B6()}    |    ${f6}  ` ); 
        let cuali_E=Footer(CL1(),CL2(),CL3(),CL4(),CL5(),CL6());
        Resultados(V2+TotalCuantitativo("E",f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12), cuali_E);break;
            
        case "M": let V3=Grafico("M",A1(),A2(),A3(),A4());
        console.log("    Indicador   |   Valor   |    Puntos    "); 
        console.log(  `Periodo de cobro a deudores                    |    ${B2()}    |    ${f2}  ` );
        console.log(  `Razón de efectivo a activo total               |    ${B3()}    |    ${f3}  ` );
        console.log(  `Razón de ventas a capital operativo empleado   |    ${B7()}    |    ${f7}  ` );
        console.log(  `Razón de costo de financiamiento a ventas      |    ${B8()}    |    ${f8}  ` ); 
        let cuali_M=Footer(CL1(),CL2(),CL3(),CL4(),CL5(),CL6());
        Resultados(V3+TotalCuantitativo("M",f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12), cuali_M);break;

        case "C": let V4=Grafico("C",A1(),A2(),A3(),A4());console.log("    Indicador   |   Valor   |    Puntos    ");
        console.log(  `Razón de efectivo a activo total          |    ${B3()}    |    ${f3}  ` );
        console.log(  `Razón de costo de financiamiento a ventas |    ${B8()}    |    ${f8}  ` );
        console.log(  `Rotación de activos totales               |    ${B9()}    |    ${f9}  ` );
        console.log(  `Periodo de pago a acreedores              |    ${B10()}    |    ${f10}  ` ); 
        let cuali_C=Footer(CL1(),CL2(),CL3(),CL4(),CL5(),CL6());
        Resultados(V4+TotalCuantitativo("C",f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12), cuali_C);break;

        case "S": let V5 = Grafico("S",A1(),A2(),A3(),A4());
        console.log("    Indicador   |   Valor   |    Puntos    ");
        console.log(  `Razón del efectivo                   |    ${B5()}    |    ${f5}  ` );
        console.log(  `Razón de capital de trabajo a ventas |    ${B11()}    |    ${f11}  ` );
        console.log(  `Margen bruto de utilidad             |    ${B12()}    |    ${f12}  ` );
        let cuali_S=Footer(CL1(),CL2(),CL3(),CL4(),CL5(),CL6());
        Resultados(V5+TotalCuantitativo("S",f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12), cuali_S); break;
    }; 

};


const TotalCuantitativo=(x,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12)=>{
    let Total=0;
    if(x=="A"){Total = f1+f2+f3+f4;};
    if(x=="E"){Total = f4+f5+f6;};
    if(x=="M"){Total = f7+f2+f3+f8;};
    if(x=="C"){Total = f10+f2+f8+f4;};
    if(x=="S"){Total = f11+f12+f5;};
    
    return Total;
};
const Final=(x,y)=>{
    let Valor=0;
    Valor=(x*0.85)+(y*0.15);
    return Valor;
};
const Resultados=(ValorCuanti, ValorCuali)=>{
    let Total=Final(ValorCuanti,ValorCuali);
    alert(`Total de Puntaje Cuantitativo es:  ${ValorCuanti}\nTotal de Puntaje Cuantitativo es:  ${ValorCuali}\nPuntaje Crediticio Total es:  ${Total}`);
};


