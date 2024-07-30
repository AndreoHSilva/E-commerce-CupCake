const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
 app.get('/', (req, res) => {
    res.send(`
    <form action="/" method= "POST">
    Nome do Cliente: <input type="text" name="nome">
    <button>Enviar Formulário</button>
    </form>
    `);
 });

 // para utilizar um paramentro inserir :nomeParametro?  
 // o sinal de interrogação informa que o partametro é opcional
 app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
   console.log(req.params);
   console.log(req.query);
   res.send(req.params);
 })

 app.post('/', (req,res) => {
   console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
 })

 app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato com a gente.')
 })

 app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
 });