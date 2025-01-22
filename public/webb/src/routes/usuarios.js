var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");



//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/registro", function (req, res) {
    usuarioController.registro(req, res);
});

router.get("/listarJogadores", function (req,res){
    usuarioController.listarJogadores(req,res)
})

router.get("/listarTitulos", function (req,res){
    usuarioController.listarTitulos(req,res)
})

router.get("/listarIdolos", function (req,res){
    usuarioController.listarIdolos(req,res)
})
router.get("/listaQtdUsuario", function (req,res){
    usuarioController.listaQtdUsuario(req,res)
})

// Rota para enviar os dados do quiz ao controlador 09/01
router.post("/quiz", function (req, res) {
    usuarioController.quiz(req, res);
})

// Rota para enviar os dados do ranking ao controlador 22/01
router.post("/ranking", function (req, res) {
    usuarioController.ranking(req, res);
})

module.exports = router;