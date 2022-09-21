const T =500;
const I1 = (x, result) =>{
    let reult;

    if(result=="A")
    {
        if(x=="ND")
        {
            reult=70;
        }else{
            if((0)<x&&x>=(T*0.6)){reult =15;}
            if((T*0.61)<x&&x>=(T*0.74)){reult =36;}
            if((T*0.75)<x&&x>=(T*0.94)){reult =83;}
            if((T*0.95)<x&&x>=T){reult =103;}
        }; 
    };
    if(result=="E")
    {
        if(x=="ND")
        {
            reult=54;
        }else{
            if((0)<x&&x>=(T*0.92)){reult =96;}
            if((T*0.93)<x&&x>=(T*0.99)){reult =127;}
            if((T*0.1)<=x&&x>=(T*0.1)){reult =71;}
        }; 
    };
    if(result=="M")
    {
        if(x=="ND")
        {
            reult=94;
        }else{
            if((0)<x&&x>=(T*0.85)){reult =2;}
            if((T*0.86)<x&&x>=(T*0.92)){reult =37;}
            if((T*0.93)<x&&x>=(T*0.95)){reult =64;}
            if((T*0.96)<x&&x>=(T*0.99)){reult =87;}
            if(x==T){reult =115;}
        }; 
    };
    if(result=="C")
    {
        if(x=="ND")
        {
            reult=98;
        }else{
            if((0)<x&&x>=(T*0.65)){reult =3;}
            if((T*0.66)<x&&x>=(T*0.82)){reult =23;}
            if((T*0.83)<x&&x>=(T*0.88)){reult =43;}
            if((T*0.89)<x&&x>=(T*0.93)){reult =62;}
            if((T*0.94)<x&&x>=(T*0.1)){reult =102;}
        }; 
    };
    if(result=="S")
    {
        if(x=="ND")
        {
            reult=114;
        }else{
            if((0)<x&&x>=(T*0.57)){reult =54;}
            if((T*0.58)<x&&x>=(T*0.76)){reult =77;}
            if((T*0.77)<x&&x>=(T*0.91)){reult =88;}
            if((T*0.92)<x&&x>=(T*0.97)){reult =97;}
            if((T*0.98)<x&&x>=(T*0.99)){reult =107;}
            if(x==T){reult=115;}
        }; 
    };

    
    return reult;
};
const I2 = (x, result) =>{
    let reult;
    if(result=="A")
    {
        if(x=="ND")
        {
            reult=69;
        }else{
            if((0)<x&&x>=(T*0.78)){reult =68;}
            if((T*0.79)<x&&x>=(T*0.96)){reult =87;}
            if((T*0.97)<x&&x>=(T*0.1)){reult =95;}
        }; 
    };
    if(result=="E")
    {
        if(x=="ND")
        {
            reult=83;
        }else{
            if((0)<x&&x>=(T*0.78)){reult =64;}
            if((T*0.79)<x&&x>=(T*0.99)){reult =91;}
            if((T*0.1)<=x&&x>=(T*0.1)){reult =118;}
        }; 
    };
    if(result=="M")
    {
        if(x=="ND")
        {
            reult=82;
        }else{
            if((0)<x&&x>=(T*0.73)){reult =37;}
            if((T*0.74)<x&&x>=(T*0.91)){reult =47;}
            if((T*0.92)<x&&x>=(T*0.98)){reult =78;}
            if((T*0.99)<x&&x>=(T*0.1)){reult =97;}
        }; 
    };
    if(result=="C")
    {
        if(x=="ND")
        {
            reult=89;
        }else{
            if((0)<x&&x>=(T*0.88)){reult =52;}
            if((T*0.89)<x&&x>=(T*0.98)){reult =78;}
            if((T*0.99)<x&&x>=(T*0.1)){reult =103;}
        }; 
    };
    if(result=="S")
    {
        if(x=="ND")
        {
            reult=104;
        }else{
            if((0)<x&&x>=(T*0.81)){reult =90;}
            if((T*0.82)<x&&x>=(T*0.99)){reult =98;}
            if(x==T){reult=107;}
        }; 
    };

    return reult;
};
const I3 = () =>{
    
};
const I4 = () =>{
    
};

const Valor = 0;

export const Grafico = (x)=> {

    switch(x)
    {
        case "A": console.log("    Indicadores           |   Valor   |    Puntos    ");
        console.log(`Porcentaje de pagos en\ntiempo con entidades\nfinancieras bancarias \nen los últimos 12 meses   |    23    |    ${I1(Valor, x)}  `);
        console.log(`Porcentaje de pagos en\ntiempo con entidades\nfinancieras NO bancarias\nen los últimos 12 meses   |    23    |    ${I2(Valor, x)}  `);
        console.log(`Máximo número de atrasos\npresentado en los últimos\n7 meses considerando el\nmesde calificación        |    23    |      `);
        console.log(`Porcentaje de saldo sin\ndías de atraso con la\nInstituciónen los últimos\n4 mesesconsiderando el mes\nde calificación           |    23    |      `); break;
        case "E":

        case "M":

        case "C":

        case "S":

    }

}