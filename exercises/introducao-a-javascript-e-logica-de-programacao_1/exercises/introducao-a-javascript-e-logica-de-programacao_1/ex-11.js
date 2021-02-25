let salarioBruto = 3000;
let aliquotaINSS;
let IR;
let salarioLiquido;
let salarioBase;
if (salarioBruto < 1556.96) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88
}
console.log("aliquotaINSS =", aliquotaINSS);

salarioBase = salarioBruto - aliquotaINSS

if (salarioBase <= 1903.98) {
  IR = 0;
} else if (salarioBase <= 2826.65) {
  IR = 0.075 * salarioBase - 142.80;
} else if (salarioBase <= 3751.05) {
  IR = 0.15 * salarioBase - 354.80;
} else if (salarioBase <= 4664.68) {
  IR = 0.225 * salarioBase - 636.13;
} else {
  IR = 0.275 * salarioBase - 869.36;
}
//conta
salarioBase = salarioBruto - aliquotaINSS
salarioLiquido = salarioBase - IR
console.log("salario liquido =", salarioLiquido);
console.log("salario base =", salarioBase)
console.log('Imposto de renda = ', IR);











