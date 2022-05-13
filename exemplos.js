// == promise ==

// exemplo 1 dando erro:
const timeout = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}

timeout(2000).then(() => console.log('certo'));

// exemplo 2 dando erro:
function getTodosOsUsuarios() {
    return new Promise((resolve, reject) => {
        reject(new Error('Não foi possível recuperar a lista de usuários'))
    })
}

getTodosOsUsuarios().then(() => console.log('pegou')).catch((erro) => console.log(erro));


// Async-await

// Headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
// Headers.set('Access-Control-Allow-Credentials', 'true');

function getUser(userId) {
    let response = fetch(`https://www.ifpb.edu.br/imagens/logotipos/ifpb-1`);
    console.log(`passou`);
    return 1; // não é necessário o await no return
}

console.log(getUser(1));


async function getUserSincrono(userId) {
    let response = await fetch(`https://www.ifpb.edu.br/imagens/logotipos/ifpb-1`);
    console.log(`passou2`);
    return 1; // não é necessário o await no return
}

console.log(getUserSincrono(1).then(v => console.log(v)));

// == observables
// Diferenças:
//
//     - 1 evento por vez
//
// A Promise lida com um evento quando uma operação assíncrona é concluída ou falha.
//     Nota: Existem Promise bibliotecas por aí que oferecem suporte ao cancelamento, mas o ES6 Promiseainda não.
//
// Já observable:
// - 1 ou + eventos
// - pode ser cancelado
// - operadores de map, reduce etc

rxjs.of(10, 20, 30)
    .subscribe(
        next => console.log('next:', next),
        err => console.log('error:', err),
        () => console.log('the end'),
    );
