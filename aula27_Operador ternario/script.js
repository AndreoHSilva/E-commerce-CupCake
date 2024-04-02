// ?:
const pontuacaoUsuario = 1001;
//                          
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao);
/* 
if (pontuacaoUsuario >= 1000){
    console.log('Usuário VIP');
}else {
    console.log('Usuário Normal');
}
*/