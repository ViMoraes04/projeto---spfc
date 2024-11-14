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

CREATE TABLE Usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
email VARCHAR(80) NOT NULL,
senha VARCHAR(30) NOT NULL,
fkFavoritos INT,
fkTituloFavorito INT,
CONSTRAINT fkFavoritos_Usuario FOREIGN KEY(fkFavoritos) REFERENCES Jogadores(idJogadores),
CONSTRAINT fkTituloFavorito_Usuario FOREIGN KEY(fkTituloFavorito) REFERENCES Titulos(idTitulos)
);

INSERT INTO Jogadores VALUES
(default, 'Calleri', 9),
(default, 'Lucas', 7);

INSERT INTO Titulos VALUES
(default, 'Copa Libertadores', 3),
(default, 'Mundial de Clubes', 3);

INSERT INTO Usuario (nome, email, senha, fkFavoritos, fkTituloFavorito) VALUES 
()

select * from Usuario;