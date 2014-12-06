var provincias;
var poblacion;
var cp;
window.onload = function() {
	provincias = document.getElementById('provincias');
	poblacion = document.getElementById('poblacion');
	cp = document.getElementById('cp');
	
	/*EVENTOS*/
	provincias.onchange = event;
	poblacion.onchange = event;
}

function event(e){
	ajax(this.id);
}

function ajax(idElement){
	var xmlHttp;
	
	xmlHttp = (window.XMLHttpRequest)? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			paintResult(JSON.parse(xmlHttp.response),idElement);
		}
	}
	
	xmlHttp.open('POST','datos.php',true);
	xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlHttp.send('type='+idElement);
}

function paintResult(result,idElement){
	switch (idElement) {
	case 'provincias':
		poblacion.innerHTML = '<option>Seleccione...</option>';
		for (var int = 0; int < result.length; int++) {
			poblacion.innerHTML += '<option value="'+result[int]+'">'+result[int]+'</option>';
			//console.log(result[int]);
		}
		break;
	case 'poblacion':
		cp.innerHTML = '<option>Seleccione...</option>';
		for (var int = 0; int < result.length; int++) {
			cp.innerHTML += '<option value="'+result[int]+'">'+result[int]+'</option>';
			//console.log(result[int]);
		}
		break;
	}
}