<?php
switch ($_POST['type']){
	case "provincias":
		echo json_encode(array('Madrid','Torrejón de Ardoz','Coslada','San Fernando','Alcala de Henares'));
		break;
	case "poblacion":
		echo json_encode(array('12345','34567','56789','49585'));
		break;
}