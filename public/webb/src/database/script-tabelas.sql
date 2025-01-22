CREATE DATABASE ProjetoIndividual;
USE ProjetoIndividual;

CREATE TABLE Jogadores(
idJogadores INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
nmrCamisa INT
);

CREATE TABLE Titulos(
idTitulos INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
qtdTitulos INT
);

CREATE TABLE Idolos(
idIdolos INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45)
);

CREATE TABLE Quiz(
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100)
);


CREATE TABLE Usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(80) NOT NULL,
senha VARCHAR(30) NOT NULL,
fkFavoritos INT,
fkTituloFavorito INT,
fkIdolos INT,
CONSTRAINT fkFavoritos_Usuario FOREIGN KEY(fkFavoritos) REFERENCES Jogadores(idJogadores),
CONSTRAINT fkTituloFavorito_Usuario FOREIGN KEY(fkTituloFavorito) REFERENCES Titulos(idTitulos),
CONSTRAINT fkIdolos_Usuario FOREIGN KEY(fkIdolos) REFERENCES Idolos(idIdolos)
);

CREATE TABLE Opcao(
idOpcao INT,
fkUsuario INT,
fkQuiz INT,
CONSTRAINT fkUsuario_Opcao FOREIGN KEY(fkUsuario) REFERENCES Usuario(idUsuario),
CONSTRAINT fkQuiz_Opcao FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz),
CONSTRAINT pkOpcao PRIMARY KEY(idOpcao, fkUsuario, fkQuiz)
);
-- Adicionando uma coluna referente ao acertos do quiz 22/01
ALTER TABLE Opcao ADD COLUMN acertos INT;

INSERT INTO Jogadores VALUES
(default, 'Calleri', 9),
(default, 'Lucas', 7),
(default, 'Luciano', 10),
(default, 'Alisson', 25),
(default, 'Pablo Maia', 29),
(default, 'Rafinha', 13),
(default, 'Wellington Rato', 27),
(default, 'Ferreira', 47),
(default, 'Nestor', 11),
(default, 'Arboleda', 5),
(default, 'Rafael', 23);

INSERT INTO Idolos VALUES
(default, 'Rogério Ceni'),
(default, 'Tele Santana'),
(default, 'Raí'),
(default, 'Leônidas'),
(default, 'Zetti'),
(default, 'Muricy Ramalho');

select * from Jogadores;
select * from Titulos;
select * from Idolos;

INSERT INTO Titulos VALUES
(default, 'Copa Libertadores', 3),
(default, 'Mundial de Clubes', 3),
(default, 'Campeonato Brasileiro', 6),
(default, 'Copa do Brasil', 1),
(default, 'Campeonato Paulista', 22),
(default, 'Copa Sul-Americana', 1);


INSERT INTO Usuario (nome, email, senha, fkFavoritos, fkTituloFavorito) VALUES 
()

select * from Usuario;
