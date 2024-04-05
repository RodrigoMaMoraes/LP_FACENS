// Exercício 1

class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const usuarios = [
    new Usuario('Pedro', 20),
    new Usuario('Tiago', 25),
    new Usuario('João', 30)
];

const nomesEmMaiusculo = usuarios.map(usuario => usuario.nome.toUpperCase());
console.log(nomesEmMaiusculo);

// Exercício 2

const usuariosMaioresDe18Anos = usuarios.filter(usuario => usuario.idade > 18);
console.log(usuariosMaioresDe18Anos);

// Exercício 3

const usuarioEntre25e30 = usuarios.find(usuario => usuario.idade >= 25 && usuario.idade <= 30);
console.log(usuarioEntre25e30);

// Exercício 4

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosParesDobro = numeros.filter(numero => numero % 2 === 0).map(numero => numero * 2);
console.log(numerosParesDobro);

// Exercício 5

class Animal {
    emitirSom() {
        console.log('O animal está emitindo um som');
    }

    correr() {
        console.log('O animal está correndo');
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log('O cachorro está uivando');
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log('O gato está ronronando');
    }
}

const cachorro = new Cachorro();
const gato = new Gato();
cachorro.emitirSom();
gato.emitirSom();

// Exercício 6

class Livro {
    constructor(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
}

const livros = [
    new Livro('Harry Potter', 200),
    new Livro('Jogos Vorazes', 400),
    new Livro('A lenda de Aang', 250)
];

const livrosMaisDe300Paginas = livros.filter(livro => livro.paginas > 300);
console.log(livrosMaisDe300Paginas);

// Exercício 7

class Carro {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}

const carros = [
    new Carro('Toyota', 2015),
    new Carro('Ford', 2012),
    new Carro('Toyota', 2020)
];

const primeiroToyotaFabricadoApos2010 = carros.find(carro => carro.marca === 'Toyota' && carro.ano > 2010);
console.log(primeiroToyotaFabricadoApos2010);

// Exercício 8

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

const produtos = [
    new Produto('Porta', 50),
    new Produto('Janela', 100),
    new Produto('Cadeado', 150)
];

const produtosComPrecoAumentado = produtos.map(produto => {
    produto.preco *= 1.1;
    return produto;
});
console.log(produtosComPrecoAumentado);

// Exercício 9

const produtoCaro = produtos.find(produto => produto.preco > 100);
if (produtoCaro) {
    produtoCaro.nome = 'Produto Super Caro';
}
console.log(produtoCaro);

// Exercício 10

const numerosDivisiveisPor3 = numeros.filter(numero => numero % 3 === 0).map(numero => numero ** 2);
console.log(numerosDivisiveisPor3);
