// 60*60*3*1000 => Icrementa 3 horas / 60*60*24*1000 => Incrementa 1 dia.
/* 
const data = new Date();
console.log('Dia', data.getDate()); 
console.log('Mês', data.getMonth()); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log('Dia', data.getDate());
 */
function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const dia = zeroAEsquerda(data.getDate());
    const mes = data.getMonth();
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${meses[mes]}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);