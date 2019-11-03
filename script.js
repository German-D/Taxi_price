function calculator() {
var counting = document.getElementById('rate').selectedIndex;
var distance = document.getElementById('distance').value;
console.log(distance, counting);

var result;
switch (counting) {
	case 0:
	console.log('Эконом')
	result = distance * 3;
	break;
	case 1:
	console.log('Комфорт')
	result = distance * 5;
	break;
}
	
document.getElementById('conclusion').innerHTML = result;
return result;
}