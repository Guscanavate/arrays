let value = prompt ('Ingrese el número de su vehículo --1.Toyota Rav --2.Citroën C Elysee--3.Ford Mondeo--4.Chevrolet Onix--5.Volkswagen UP!--6.Citroën C4 Lounge--7.Fiat Mobi--8.DS7 Crossback');

let kms = prompt ('Ingrese los kms recorridos en el período');

let consVeh = [6.30,6.35,6.8,7,7.05,7.3,7.5,7.55];

let combus = [1,2,1,1,1,2,1,2];


if (value ==1) { tc = combus [0]}
else if (value == 2) {tc = combus [1]}
else if (value == 3) {tc = combus [2]}
else if (value == 4) {tc = combus [3]}
else if (value == 5) {tc = combus [4]}
else if (value == 6) {tc = combus [5]}
else if (value == 7) {tc = combus [6]}
else if (value == 8) {tc = combus [7]}
else alert ('Debe seleccionar un vehículo de las lista');
// Seleccionamos el tipo de combustible desde el array


if (value ==1) { cpm = consVeh [0]}
else if (value == 2) {cpm = consVeh [1]}
else if (value == 3) {cpm = consVeh [2]}
else if (value == 4) {cpm = consVeh [3]}
else if (value == 5) {cpm = consVeh [4]}
else if (value == 6) {cpm = consVeh [5]}
else if (value == 7) {cpm = consVeh [6]}
else if (value == 8) {cpm = consVeh [7]}
else alert ('Debe seleccionar un vehículo de las lista');
// Seleccionamos el consumo desde el array


const n = 2.38 ;
// Emisiones en Kg de CO2 por litro de nafta consumido
const d = 2.61 ;
// Emisiones en Kg de CO2 por litro de gasoil consumido

let consumo = (cpm*kms)/100;
// consumo es el consumo de combustible en litros


if ( tc == '1' ) { 
    alert ("El consumo estimado de combustible es de :" + parseInt (consumo)  +" litros de nafta y las emisiones del período son de : "+ parseInt(consumo*n) +"Kgs de CO2")}
else { alert ("El consumo estimado de combustible es de :" + parseInt (consumo)  +" de gasoil y las emisiones del período son de : "+ parseInt(consumo*d) +"Kgs de CO2")
        };