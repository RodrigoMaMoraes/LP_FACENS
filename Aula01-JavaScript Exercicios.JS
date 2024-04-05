// exercicio 01

let a = 1;
let b = 1;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;

console.log(soma);
console.log(subtracao);
console.log( multiplicacao);
console.log(divisao);

//exercicio 2

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//exercicio 3

const texto = "Disciplina de Programação para web";

const quantidadeCaracteres = texto.length;

console.log("A quantidade de caracteres é:", quantidadeCaracteres);

//exercicio 4

const nome = "Rodrigo Mateus Moraes";

const partesNome = nome.toLowerCase().split(" ");

const primeiroNome = partesNome[0];

const ultimoNome = partesNome[partesNome.length - 1];

const email = `${primeiroNome}.${ultimoNome}@facens.br`;

console.log(email);

//exercicio 5

let numerosComTraco = '';

for (let i = 1; i <= 10; i++) {
    numerosComTraco += i;

    if (i !== 10) {
        numerosComTraco += ' - ';
    }
}

console.log(numerosComTraco);

//exercicio 6

function dobro(numero) {
    
    if (numero <= 0) {
        console.log("Só é aceito números positivos maiores que zero");
    } else {
       
        console.log("O dobro do número é:", numero * 2);
    }
}

dobro(6);  
dobro(-2); 
dobro(1);  

//exercicio 7

function inverterString(str) {
    return str.split("").reverse().join("");
}

const txtOriginal = "Olá, mundo! Vai chover hoje!";
const txtInvertido = inverterString(txtOriginal);
console.log("Texto original:", txtOriginal);
console.log("Texto invertido:", txtInvertido);

//exercicio 8

function contarVogais(str) {
    str = str.toLowerCase();

    let contadorVogais = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            contadorVogais++;
        }
    }

    return contadorVogais;
}

const texto = "Batata Frita é bom";
console.log("Número de vogais:", contarVogais(texto));

//exercicio 9

function validarEmail(email) {
    return email.includes('@') && email.includes('.') && email.lastIndexOf('.') > email.indexOf('@');
}

console.log(validarEmail('teste123@facens.br'));   // Deveria retornar true
console.log(validarEmail('ganso123@facens'));       // Deveria retornar false (falta o ponto após o '@')
console.log(validarEmail('lapis123.facens.br'));   // Deveria retornar false (falta o '@')
console.log(validarEmail('caneta123@facens.br'));      // Deveria retornar false (o ponto é o último caractere)
