function getOperacao(){
    var e=document.getElementById("operacao");
    operacao=e.options[e.selectedIndex].value;
}

function calcula(){
   //Ir buscar valores dos operandos
   op1=document.getElementById("op1").value;
   op2=document.getElementById("op2").value;

   //Fazer conta
   var conta = op1+operacao+op2; //Criar string
   var resultado=eval(conta);  //Obter resultado
   
   //Fazer output no campo res do documento html
   document.getElementById("res").value=resultado;

}