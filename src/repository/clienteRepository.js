import connection from "./connection.js";

export async function listar() {
  const comando = ` SELECT id,
                          nome,
                          email,
                          telefone,
                          celular,
                          tipo_documento,
                          numero_documento
                     FROM cliente`;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function inserir(cliente) {
  const comando = `
      INSERT INTO cliente (nome, email, telefone, celular, tipo_documento, numero_documento) 
                    VALUES (?, ?, ?, ?, ?, ?) `;

  let [info] = await connection.query(comando, [
    cliente.nome,
    cliente.email,
    cliente.telefone,
    cliente.celular,
    cliente.tipo_documento,
    cliente.numero_documento,
  ]);
  return info.insertId;
}

export async function alterar(id, cliente) {
  const comando = ` 
  UPDATE cliente
       SET nome = ?,
           email = ?,
           telefone = ?,
           celular = ?,
           tipo_documento = ?,
           numero_documento = ?
     WHERE id = ?`;

  let [info] = await connection.query(comando, [
    cliente.nome,
    cliente.email,
    cliente.telefone,
    cliente.celular,
    cliente.tipo_documento,
    cliente.numero_documento,
    id,
  ]);
  return info.affectedRows;
}

export async function remover(id) {
  const comando = `
    DELETE FROM cliente
     WHERE id = ?`;

  let [info] = await connection.query(comando, [id]);
  return info.affectedRows;
}
