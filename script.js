var printed = false;

function printPage(){
	if(printed){
		document.getElementById("butt1").innerHTML = "Not printed";
		window.print();
		printed = false;
	}else{
		document.getElementById("butt1").innerHTML = "Printing";
		printed = true;
	}
}
