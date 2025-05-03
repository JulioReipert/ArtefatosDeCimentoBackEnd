import connection from "./connection.js";

export async function listar() {
  const comando = ` SELECT id,
                          qtd,
                          pedido,
                          item
                     FROM item_pedido`;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function inserir(item_pedido) {
  const comando = `
      INSERT INTO item_pedido (qtd, pedido, item) 
                    VALUES (?, ?, ?) `;

  let [info] = await connection.query(comando, [item_pedido.qtd, item_pedido.pedido, item_pedido.item]);
  return info.insertId;
}

export async function alterar(id, item_pedido) {
  const comando = ` 
  UPDATE item_pedido
       SET qtd = ?,
       pedido = ?,
       item = ?
     WHERE id = ?`;

  let [info] = await connection.query(comando, [item_pedido.qtd, item_pedido.pedido, item_pedido.item, id]);
  return info.affectedRows;
}

export async function remover(id) {
  const comando = `
    DELETE FROM item_pedido
     WHERE id = ?`;

  let [info] = await connection.query(comando, [id]);
  return info.affectedRows;
}
