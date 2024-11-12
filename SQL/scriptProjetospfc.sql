CREATE DATABASE ProjetoIndividual;
USE ProjetoIndividual;


CREATE TABLE Jogadores (
idJogadores INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
posicao VARCHAR(20) NOT NULL,
nmr_camisa INT NOT NULL
);

CREATE TABLE Titulos(
idTitulos INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
qtdTitulos INT
);


CREATE TABLE Usuarios(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
dtNasc DATE NOT NULL, 
email VARCHAR(80) NOT NULL,
senha VARCHAR(45) NOT NULL,
fkFavoritos INT,
fkTituloFavorito INT,
CONSTRAINT fkFavoritosUsuarios FOREIGN KEY(fkFavoritos) REFERENCES Jogadores(idJogadores),
CONSTRAINT fkTituloFavorito_Usuario FOREIGN KEY(fkTituloFavorito) REFERENCES Titulos(idTitulos)
);


INSERT INTO Jogadores VALUES
(default, 'Rafael', 'Goleiro', 23),
(default, 'Arboldeda', 'Zagueiro', 5),
(default, 'Pablo Maia', 'Volante', 29),
(default, 'Rafinha', 'Lateral', 13),
(default, 'Alisson', 'Meia', 25),
(default, 'Wellington Rato', 'Meia', 27),
(default, 'Nestor', 'Meia', 11),
(default, 'Ferreira', 'Ponta', 47),
(default, 'Lucas','Ponta', 7),
(default, 'Luciano', 'Atacante', 10),
(default, 'Calleri', 'Centroavante', 9);


select * from Usuarios;

INSERT INTO Usuarios (nome, email, senha, fkFavoritos, fkTitulos) VALUES (); 

ALTER TABLE Usuarios 
DROP COLUMN dtNasc;
select * from Titulos;
INSERT INTO Titulos VALUES
(default, 'Copa Libertadores', 3),
(default, 'Mundial de Clubes', 3),
(default, 'Copa do Brasil', 1),
(default, 'Copa Sul-Americana', 1),
(default, 'Campeonato Paulista', 22),
(default, 'Campeonato Brasileiro', 6);