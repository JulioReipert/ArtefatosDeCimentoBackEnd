import connection from "./connection.js";

export async function listar() {
  const comando = ` SELECT id,
                          email,
                          senha 
                     FROM login`;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function inserir(login) {
  const comando = `
      INSERT INTO login (email, senha) 
                    VALUES (?, ?) `;

  let [info] = await connection.query(comando, [login.email, login.senha]);
  return info.insertId;
}

export async function alterar(id, login) {
  const comando = ` 
  UPDATE login
       SET email = ?,
           senha = ?
     WHERE id = ?`;

  let [info] = await connection.query(comando, [login.email, login.senha, id]);
  return info.affectedRows;
}

export async function remover(id) {
  const comando = `
    DELETE FROM login
     WHERE id = ?`;

  let [info] = await connection.query(comando, [id]);
  return info.affectedRows;
}
