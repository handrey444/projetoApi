<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API</title>
</head>
<body>
    <h2> Como usar</h2>
<ol>
  <li>Clone este repositório com <code>git clone</code></li>
  <li>Instale as dependências com <code>npm install</code></li>
  <li>Crie um arquivo <code>.env</code> e adicione sua URI do MongoDB:
   
  </li>
  <li>Execute a API com o comando:
    <strong>node server.js</strong>
  </li>
</ol>
    <h1> APi para tratamento de informações sobre pessoas</h1>
    <h2> tecnologias usadas:</h2>
    <ul>
        <li>express</li>
        <li>node.js</li>
        <li>mongoDB + Mongoose</li>
        
    </ul>
    <h2> Rotas disponíveis</h2>

<h3>POST /novapessoa</h3>
<p>Cria uma nova pessoa no banco de dados.</p>

<h3>
    GET /pessoas
</h3>
<p>Mostra todas as pessoas do banco de dados.</p>
<h3> put /pessoas/:id</h3>
<p> Rota para atualizar uma pessoa. Obrigatório passar um id como parâmetro.</p>
<span>
JSON de exemplo:
{
  "cidade": "Rio de Janeiro",
  "telefone": 21999997777
}
</span>
<h3> DELETE /pessoas/:id</h3>
<p>deleta uma pessoa do banco de dados.</p>
</body>
</html>
