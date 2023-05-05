let HT;
let VH;
let PD;
let TD;
let SB;
let SL ;

HT = prompt('Digite as horas trabalhadas ' , ' informe aqui ');
VH = prompt('Entre com valor da hora' , ' informe aqui ');
PD = prompt('informe o percentual de desconto ' , ' em porcentagem ');
SB = parseInt(HT)*parseFloat(VH);
TD = parseFloat(PD)*SB/100;
SL = SB - TD ;

document.write('salario = ' , SL);
