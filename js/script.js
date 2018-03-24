var firstnumber;
var secondnumber;
var result;
var operation;


function number1(){
	if (document.formgroup.displaydown.value=="0" || document.formgroup.displaydown.value=="result") {
		document.formgroup.displaydown.value="1";
	}
	else{
		document.formgroup.displaydown.value= document.formgroup.displaydown.value + "1";
	}
	
}

function number2(){
	if(document.formgroup.displaydown.value=="0"|| document.formgroup.displaydown.value==result){
		document.formgroup.displaydown.value="2";
	}
	else{
		document.formgroup.displaydown.value= document.formgroup.displaydown.value + "2";
	}
}

function number3(){
	if(document.formgroup.displaydown.value=="0" || document.formgroup.displaydown.value=="result"){
		document.formgroup.displaydown.value="3";
	}
	else{
		document.formgroup.displaydown.value= document.formgroup.displaydown.value + "3";
	}
}

function number4(){
	if(document.formgroup.displaydown.value=="0" || document.formgroup.displaydown.value=="result"){
		document.formgroup.displaydown.value="4";
	}
	else{
		document.formgroup.displaydown.value= document.formgroup.displaydown.value + "4";
	}
}
function number5(){
	if(document.formgroup.displaydown.value=="0" || document.formgroup.displaydown.value=="result"){
		document.formgroup.displaydown.value="5";
	}
	else{
		document.formgroup.displaydown.value= document.formgroup.displaydown.value + "5";
	}
}
function number6(){
	if(document.formgroup.displaydown.value=="0" || document.formgroup.displaydown.value=="result"){
		document.formgroup.displaydown.value="6";
	}
	else{
		document.formgroup.displaydown.value= document.formgroup.displaydown.value + "6";
	}
}
function number7(){
	if(document.formgroup.displaydown.value=="0" || document.formgroup.displaydown.value=="result"){
		document.formgroup.displaydown.value="7";
	}
	else{
		document.formgroup.displaydown.value= document.formgroup.displaydown.value + "7";
	}
}
function number8(){
	if(document.formgroup.displaydown.value=="0" || document.formgroup.displaydown.value=="result"){
		document.formgroup.displaydown.value="8";
	}
	else{
		document.formgroup.displaydown.value= document.formgroup.displaydown.value + "8";
	}
}
function number9(){
	if(document.formgroup.displaydown.value=="0" || document.formgroup.displaydown.value=="result"){
		document.formgroup.displaydown.value="9";
	}
	else{
		document.formgroup.displaydown.value= document.formgroup.displaydown.value + "9";
	}
}
function number0(){
	if(document.formgroup.displaydown.value=="0" || document.formgroup.displaydown.value=="result"){
		document.formgroup.displaydown.value="0";
	}
	else{
		document.formgroup.displaydown.value= document.formgroup.displaydown.value + "0";
	}
}

function opplus(){
	operation="+"
	firstnumber=parseInt(document.formgroup.displaydown.value);
	document.formgroup.displaydown.value=0;
	document.formgroup.displayup.value= firstnumber + operation;

}

function opminus(){
	operation="-"
	firstnumber=parseInt(document.formgroup.displaydown.value);
	document.formgroup.displaydown.value=0;
	document.formgroup.displayup.value= firstnumber + operation;
}

function opmulti(){
	operation="*"
	firstnumber=parseInt(document.formgroup.displaydown.value);
	document.formgroup.displaydown.value=0;
	document.formgroup.displayup.value= firstnumber + operation;
}

function opdiv(){
	operation="/"
	firstnumber=parseInt(document.formgroup.displaydown.value);
	document.formgroup.displaydown.value=0;
	document.formgroup.displayup.value= firstnumber + operation;
}
 function opclear(){
 	document.formgroup.displaydown.value=0;
 	document.formgroup.displayup.value="";
 	return;
 }
 function oppower(){
 	operation="^";
 	firstnumber=parseInt(document.formgroup.displaydown.value);
 	document.formgroup.displaydown.value="0";
 	document.formgroup.displayup.value= firstnumber + operation;
 }
 function opdozero(){
 	if(document.formgroup.displaydown.value==0 || document.formgroup.displaydown.value==result){
 		return;
 	}
 	else{
 		document.formgroup.displaydown.value=document.formgroup.displaydown.value + "00";
 		
 	}
 }

function opequal(){
	secondnumber=parseInt(document.formgroup.displaydown.value);
	if(operation=="+"){
		result= firstnumber+secondnumber;

	}
	else if (operation == "*"){  
    
  result = firstnumber * secondnumber;  
    
 }  
 else if (operation == "-"){  
    
  result = firstnumber - secondnumber;  
    
 }    
    else if (operation == "/"){  
    
  result = firstnumber / secondnumber;  
     
 }  
 else if(operation=="^"){
 	var result=1;
 	for(var i=1;i<=secondnumber;i++)
 	result=result*firstnumber;
 }




//document.formgroup.displaydown.value ="";  
 document.formgroup.displaydown.value = result;  
 document.formgroup.displayup.value = firstnumber + operation + secondnumber  
 return;  
}