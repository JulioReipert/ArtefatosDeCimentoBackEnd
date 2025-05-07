import connection from "./connection.js";

export async function listar() {
  const comando = ` SELECT id,
                          nome,
                          quantidade
                     FROM materia_prima`;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function inserir(materia_prima) {
  const comando = `
      INSERT INTO materia_prima (nome, quantidade) 
                    VALUES (?, ?) `;

  let [info] = await connection.query(comando, [
    materia_prima.nome,
    materia_prima.quantidade,
  ]);
  return info.insertId;
}

export async function alterar(id, materia_prima) {
  const comando = ` 
  UPDATE materia_prima
       SET nome = ?,
           quantidade = ?
     WHERE id = ?`;

  let [info] = await connection.query(comando, [
    materia_prima.nome,
    materia_prima.quantidade,
    id,
  ]);
  return info.affectedRows;
}

export async function remover(id) {
  const comando = `
    DELETE FROM materia_prima
     WHERE id = ?`;

  let [info] = await connection.query(comando, [id]);
  return info.affectedRows;
}
