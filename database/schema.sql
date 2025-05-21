CREATE DATABASE busquets;

use busquets;

CREATE TABLE login (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL,
  senha VARCHAR(100) NOT NULL
);

CREATE TABLE materia_prima (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  quantidade INT NOT NULL
);

CREATE TABLE produto (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  quantidade INT NOT NULL,
  comprimento DECIMAL(10,2) NOT NULL,
  altura DECIMAL(10,2) NOT NULL,
  largura DECIMAL(10,2) NOT NULL,
  cor VARCHAR(50) NOT NULL,
  peso DECIMAL(10,2) NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  materia_prima INT ,
  FOREIGN KEY (materia_prima) REFERENCES materia_prima(id)
);

CREATE TABLE cliente (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100),
  telefone VARCHAR(20),
  celular VARCHAR(20) NOT NULL,
  tipo_documento INT NOT NULL,
  numero_documento BIGINT NOT NULL
);

CREATE TABLE pedido (
  id INT PRIMARY KEY AUTO_INCREMENT,
  data_entrega DATE NOT NULL,
  cliente INT,
  endereco VARCHAR(200),
  emissao DATE NOT NULL

);

CREATE TABLE item_pedido (
  id INT PRIMARY KEY AUTO_INCREMENT,
  qtd INT NOT NULL,
  pedido INT,
  item INT,
  FOREIGN KEY (pedido) REFERENCES pedido(id),
  FOREIGN KEY (item) REFERENCES produto(id)
);