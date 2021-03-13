
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
