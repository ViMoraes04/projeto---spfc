var database = require("../database/config")


function listaQtdUsuario(){
    var instrucaoSql = `SELECT COUNT(idUsuario) as usuarios FROM Usuario`
    return database.executar(instrucaoSql)
}

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email, senha FROM Usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha, fkFavoritos, fkTituloFavorito, fkIdolos) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, fkFavoritos, fkTituloFavorito, fkIdolos);
    
  
    var instrucaoSql = `
        INSERT INTO Usuario (nome, email, senha, fkFavoritos, fkTituloFavorito, fkIdolos) VALUES ('${nome}', '${email}', '${senha}', '${fkFavoritos}', '${fkTituloFavorito}', '${fkIdolos}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registro(fkFavoritos, fkTituloFavorito, fkIdolos, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registro():", fkFavoritos, fkTituloFavorito, fkIdolos, idUsuario);
    
   
    var instrucaoSql = `
        UPDATE Usuario SET fkFavoritos = ${fkFavoritos}, fkTituloFavorito = ${fkTituloFavorito}, fkIdolos = ${fkIdolos} WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarJogadores(){
    var instrucaoSql = `
        SELECT 
    j.nome AS nomeFavorito,
    COUNT(u.fkFavoritos) AS qtdFavoritos
FROM 
    Usuario u
LEFT JOIN 
    Jogadores j ON u.fkFavoritos = j.idJogadores
GROUP BY 
    j.nome
ORDER BY 
    qtdFavoritos DESC;
;`;
return database.executar(instrucaoSql);
}

// Aqui busca os jogadores mais e menos votados com base na contagem de votos na tabela usuário 31/01
function mostrarJogadores(){
    var instrucaoSql =
`SELECT j.nome, qtdFavoritos
FROM (
    SELECT 
        fkFavoritos, 
        COUNT(fkFavoritos) AS qtdFavoritos
    FROM Usuario
    GROUP BY fkFavoritos
) subquery
INNER JOIN Jogadores j ON subquery.fkFavoritos = j.idJogadores
WHERE 
    qtdFavoritos = (SELECT MAX(qtd) FROM (SELECT COUNT(fkFavoritos) AS qtd FROM Usuario GROUP BY fkFavoritos) max_sub)
    OR
    qtdFavoritos = (SELECT MIN(qtd) FROM (SELECT COUNT(fkFavoritos) AS qtd FROM Usuario GROUP BY fkFavoritos) min_sub);`
    return database.executar(instrucaoSql);
}

function listarTitulos(){
    var instrucaoSql = `
        SELECT 
    t.nome AS tituloFavorito,
    COUNT(u.fkTituloFavorito) AS qtdTitulosFavoritos
FROM 
    Usuario u
LEFT JOIN 
    Titulos t ON u.fkTituloFavorito = t.idTitulos
GROUP BY 
    t.nome
ORDER BY 
    qtdTitulosFavoritos DESC;
`;
return database.executar(instrucaoSql);
}

function listarIdolos(){
    var instrucaoSql = `
        SELECT 
    i.nome AS nomeIdolo,
    COUNT(u.fkIdolos) AS qtdIdolos
FROM 
    Usuario u
LEFT JOIN 
    Idolos i ON u.fkIdolos = i.idIdolos
GROUP BY 
    i.nome
ORDER BY 
    qtdIdolos DESC;
`;
return database.executar(instrucaoSql);
}

//Insere dados do quiz e usuário na tabela "Opcao" no banco de dados 09/01
// Adicionando os acertos no quiz 22/01
function quiz(fkUsuarioQuiz, idQuiz) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar(): ", fkUsuarioQuiz, idQuiz);

    var instrucaoSql = 
    `
        UPDATE Opcao SET fkUsuarioQuiz = ${fkUsuarioQuiz} WHERE idQuiz = ${idQuiz};
    `;;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    
    return database.executar(instrucaoSql)
}



module.exports = {
    autenticar,
    cadastrar,
    registro,
    listarJogadores,
    mostrarJogadores,
    listarTitulos,
    listarIdolos,
    listaQtdUsuario,
    quiz
};