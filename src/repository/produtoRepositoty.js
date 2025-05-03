import connection from "./connection.js";

export async function listar() {
  const comando = ` SELECT id,
                          nome,
                          quantidade,
                          comprimento,
                          altura,
                          largura,
                          cor,
                          peso,
                          valor,
                          materia_prima
                     FROM produto`;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function inserir(produto) {
  const comando = `
      INSERT INTO produto (nome, quantidade, comprimento, altura, largura, cor, peso, valor, materia_prima) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) `;

  let [info] = await connection.query(comando, [produto.nome, produto.quantidade, produto.comprimento, produto.altura, produto.largura, produto.cor, produto.peso, produto.valor, produto.materia_prima]);
  return info.insertId;
}

export async function alterar(id, produto) {
  const comando = ` 
  UPDATE produto
       SET nome = ?,
           quantidade = ?,
           comprimento = ?,
           altura = ?,
           largura = ?,
           cor = ?,
           peso = ?,
           valor = ?,
           materia_prima = ?
     WHERE id = ?`;

  let [info] = await connection.query(comando, [produto.nome, produto.quantidade, produto.comprimento, produto.altura, produto.largura, produto.cor, produto.peso, produto.valor, produto.materia_prima, id]);
  return info.affectedRows;
}

export async function remover(id) {
  const comando = `
    DELETE FROM produto
     WHERE id = ?`;

  let [info] = await connection.query(comando, [id]);
  return info.affectedRows;
}
