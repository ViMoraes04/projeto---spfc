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
// adicionando os acertos no quiz
function quiz(Quiz, idUsuario, acertos) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar(): ", Quiz, idUsuario, acertos);

    var instrucaoSql = 
    `INSERT INTO Opcao VALUES (${Quiz}, ${idUsuario}, ${acertos});`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    
    return database.executar(instrucaoSql)
}



module.exports = {
    autenticar,
    cadastrar,
    registro,
    listarJogadores,
    listarTitulos,
    listarIdolos,
    listaQtdUsuario,
    quiz  
};