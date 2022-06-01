let value = prompt ('Ingrese el número de su vehículo');

let kms = prompt ('Ingrese los kms recorridos en el período');

if ( tc == 1 ) { alert ('Las emisiones del período son de : ' + cpm*n)} 
else { alert ('Las emisiones del período son de : '+ cpm*d )};


let consVeh = [6.30,6.35,6.8,7,7.05,7.3,7.5,7.55];

let combus = [1,2,1,1,1,2,1,2];


if (value ='1') { tc = combus [0]}
else if (value = '2') {tc = combus [1]}
else if (value = '3') {tc = combus [2]}
else if (value = '4') {tc = combus [3]}
else if (value = '5') {tc = combus [4]}
else if (value = '6') {tc = combus [5]}
else if (value = '7') {tc = combus [6]}
else if (value = '8') {tc = combus [7]}
else alert ('Debe seleccionar un vehículo de las lista');
// Seleccionamos el tipo de combustible desde el array


if (value ='1') { cpm = consVeh [0]}
else if (value = '2') {cpm = consVeh [1]}
else if (value = '3') {cpm = consVeh [2]}
else if (value = '4') {cpm = consVeh [3]}
else if (value = '5') {cpm = consVeh [4]}
else if (value = '6') {cpm = consVeh [5]}
else if (value = '7') {cpm = consVeh [6]}
else if (value = '8') {cpm = consVeh [7]}
else alert ('Debe seleccionar un vehículo de las lista');
// Seleccionamos el consumo desde el array


const n = 2.38 ;
// Emisiones en Kg de CO2 por litro de nafta consumido
const d = 2.61 ;
// Emisiones en Kg de CO2 por litro de gasoil consumido

let consumo = (cpm*kms)/100;
// consumo es el consumo de combustible en litros


if ( tc == 1 ) { alert ('El consumo estimado de combustible es de :' +consumo +'y las emisiones del período son de : '+ cpm*n) } 
else { alert ('El consumo estimado de combustible es de :' +consumo + 'y las emisiones del período son de : '+ cpm*d )};