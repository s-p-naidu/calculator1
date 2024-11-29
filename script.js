const input=document.getElementById("input");
let inputvalue='';
function perform(val){
    try{
        if(input.value.includes('E')&(val!='C')&val!='Backspace'){throw e;}
        switch(val){
            case 'Backspace':inputvalue = inputvalue.toString().slice(0, inputvalue.length - 1);break;
            case 'E':break;
            case 'C':inputvalue='';break;
            case 'square':performMath();
                          inputvalue=inputvalue*inputvalue;break;
            case 'root':performMath();
                        inputvalue=Math.sqrt(inputvalue);break;
            case '=':performMath();break;
            default:inputvalue+=val;
        }
    }
    catch(e){
        inputvalue='E';
    }
    input.value=inputvalue;
}
function performMath(){
    try{
        inputvalue=eval(inputvalue);
        if(isNaN(inputvalue) | !isFinite(inputvalue))throw e;
    }
    catch(e){throw e;//exception propagating from this function to caller function
        }
}




