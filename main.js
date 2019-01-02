// Object short syntax

const nome = 'Thomas';
const idade = 23;

const usuario = {
    nome,
    idade,
    empresa: 'SNR Sistemas'
}

console.log(usuario);

// Template literals
/* 
const nome = 'Thomas';
const idade = 23;

//console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');

console.log(`Meu nome é ${nome} e tenho ${idade} anos`); */

// SPREAD

/* const usuario1 = {
    nome: 'Thomas',
    idade: 23,
    empresa: 'SNR Sistemas'
};

const usuario2 = {...usuario1, nome: 'Gabriel'};

console.log(usuario1, usuario2); */


/* const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3); */


// REST

/* function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 5)); */

/* const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c); */

/* const usuario = {
    nome: 'Thomas',
    idade: 23,
    empresa: 'SNR Sistemas'
}

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto); */

//Desestruturação

/* const usuario = {
    nome: 'Thomas',
    idade: 23,
    endereco: {
        cidade: 'City',
        estado: 'CE'
    }
}

function mostraNome({ nome } ){
    console.log(nome);
}

mostraNome(usuario);
 */
//const {nome, idade, endereco: { cidade }} = usuario;

/* console.log(nome);
console.log(idade);
console.log(cidade);
 */

// arrow functions

/* const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item =>  item * 2);

console.log(newArr);

const teste = () => {
    return 'teste';
}

console.log(teste()); */


// operações em array
/* const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
    return item === 4;
});

console.log(find);
 */
/* class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor () {
        super();

        this.usuario = 'Thomas';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario(); */

// pode fazer métodos static, onde não é preciso instanciar para executar, porém, não pode utilizar propriedades da classe ou outras funções dentro