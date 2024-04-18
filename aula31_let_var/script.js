const verdadeira = true;

//Let tem escopo de bloco {...bloco}
//VAR só tem escopo de função

let nome = 'Andreo';  //criando
let nome2 = 'Silva';

if (verdadeira){
    let nome = 'Vitor'; //criando
    console.log(nome, nome2);
    
    if (verdadeira){
        let nome = 'Miguel';
        console.log(nome);
    }
}
console.log(nome);

var fala = 'Oi';
console.log(fala);

if (verdadeira){
    var fala = 'Hello World!';
    console.log(`agora estou falando ${fala}`);
    if (verdadeira){
        var fala = 'Viu como var não é bom utilizar';
    console.log(`${fala} Posso redeclarar a qualquer momento veja.`);
    }
}
console.log(fala)