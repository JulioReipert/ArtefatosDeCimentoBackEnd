import connection from "./connection.js";

export async function listar() {
  const comando = ` SELECT id,
                          data_entrega,
                          cliente,
                          endereco,
                          emissao
                     FROM pedido`;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function inserir(pedido) {
  const comando = `
      INSERT INTO pedido (data_entrega, cliente, endereco, emissao) 
                    VALUES (?, ?, ?, ?) `;

  let [info] = await connection.query(comando, [
    pedido.data_entrega,
    pedido.cliente,
    pedido.endereco,
    pedido.emissao,
  ]);
  return info.insertId;
}

export async function alterar(id, pedido) {
  const comando = ` 
  UPDATE pedido
       SET data_entrega = ?,
       cliente = ?,
       endereco = ?
     WHERE id = ?`;

  let [info] = await connection.query(comando, [
    pedido.data_entrega,
    pedido.cliente,
    pedido.endereco,
    id,
  ]);
  return info.affectedRows;
}

export async function remover(id) {
  const comando = `
    DELETE FROM pedido
     WHERE id = ?`;

  let [info] = await connection.query(comando, [id]);
  return info.affectedRows;
}
