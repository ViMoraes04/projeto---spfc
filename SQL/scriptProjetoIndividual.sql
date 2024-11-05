CREATE DATABASE ProjetoIndividual;
USE ProjetoIndividual;


CREATE TABLE Jogadores (
idJogadores INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
posicao VARCHAR(20) NOT NULL,
nmr_camisa INT NOT NULL
);


CREATE TABLE Usuarios(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
dtNasc DATE NOT NULL, 
email VARCHAR(80) NOT NULL,
senha VARCHAR(45) NOT NULL,
fkFavoritos INT,
CONSTRAINT fkFavoritosUsuarios FOREIGN KEY(fkFavoritos) REFERENCES Jogadores(idJogadores)
);

CREATE TABLE Partidas(
idPartidas INT PRIMARY KEY AUTO_INCREMENT,
qtdAno INT NOT NULL,
qtdMes INT NOT NULL
);

CREATE TABLE Gols (
idGols INT,
qtdAno INT,
qtdMes INT,
fkJogadores INT,
fkPartidas INT,
CONSTRAINT pkComposta PRIMARY KEY (idGols, fkJogadores, fkPartidas),
CONSTRAINT fkJogadoresGols FOREIGN KEY(fkJogadores) REFERENCES Jogadores(idJogadores),
CONSTRAINT fkPartidasGols FOREIGN KEY(fkPartidas) REFERENCES Partidas(idPartidas)
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

