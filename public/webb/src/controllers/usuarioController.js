var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json(resultadoAutenticar[0])
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    console.log(req.body)
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var fkFavoritos = req.body.fkFavoritosServer;
    var fkTituloFavorito = req.body.fkTituloFavoritoServer;
    var fkIdolos = req.body.fkIdolosServer;


    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        usuarioModel.cadastrar(nome, email, senha, fkFavoritos, fkTituloFavorito, fkIdolos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function registro(req, res) {

    console.log(req.body)
    var fkFavoritos = req.body.fkFavoritosServer;
    var fkTituloFavorito = req.body.fkTituloFavoritoServer;
    var fkIdolos = req.body.fkIdolosServer;
    var idUsuario = req.body.idUsuario;
    var idVisita = req.body.idVisita;

    usuarioModel.registro(fkFavoritos, fkTituloFavorito, fkIdolos, idUsuario, idVisita)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        );
}
function listarJogadores(req, res) {
    usuarioModel.listarJogadores(req, res).then((resultado => {
        res.status(200).json(resultado)
    }))
}

function listarTitulos(req, res) {
    usuarioModel.listarTitulos(req, res).then((resultado => {
        res.status(200).json(resultado)
    }))
}

function listarIdolos(req, res) {
    usuarioModel.listarIdolos(req, res).then((resultado => {
        res.status(200).json(resultado)
    }))
}
function listaQtdUsuario(req, res) {
    usuarioModel.listaQtdUsuario(req, res).then((resultado => {
        res.status(200).json(resultado)
    }))
}

// Definindo a função quiz 09/01
function quiz(req, res) {
    var Quiz = req.body.QuizServer;
    var idUsuario = req.body.idUsuarioServer;

    quizModel.quiz(Quiz, idUsuario, acertos)
        .then(function (resultado) {
            res.status(201).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar a inserção do quiz! Erro: ", erro);
            res.status(500).json({ error: erro.sqlMessage });
        })
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
}