
function mostraSenha(a){
	var alt = a;
	
	if(alt=='senha-off'){
		document.getElementById('btnPass').alt="senha-on";
		document.getElementById('btnPass').src="img/icon-senha-on.png";
		document.getElementById('inputSenha').type="text";
	}
	else{
		document.getElementById('btnPass').alt="senha-off";
		document.getElementById('btnPass').src="img/icon-senha-off.png";
		document.getElementById('inputSenha').type="password";
	}
}




function validaLogin(formLogin){
	
	if (formLogin.login.value == ""){ 
		//alert("Informe seu nome!");
		document.getElementById('alerta').style.display="block";
		document.getElementById('alerta').innerHTML="Informe o seu login!";
		formLogin.login.focus();
		return (false); 
	}
	if (formLogin.senha.value == ""){ 
		document.getElementById('alerta').style.display="block";
		document.getElementById('alerta').innerHTML="Informe a sua senha!";
		formLogin.senha.focus();
		return (false); 
	}

}

function limpaAlerta(){
	document.getElementById('alerta').style.display="none";
	document.getElementById('alerta').innerHTML="";	
}
