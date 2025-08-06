const db = require("../config/db.js");

async function listarQuerry() {
    const [rows] = await db.query("SELECT * FROM tarefas");
    return rows;
}

async function criarQuerry(titulo, descricao, status, prioridade, data_entrega) {
    await db.query(
        "INSERT INTO tarefas (titulo, descricao, status, prioridade, data_entrega) VALUES (?, ?, ?, ?, ?)",
        [titulo, descricao, status, prioridade, data_entrega]
    );
}

async function atualizarQuerry(id, titulo, descricao, status, prioridade, data_entrega) {
    const [resultado] = await db.query(
        "UPDATE tarefas SET titulo = ?, descricao = ?, status = ?, prioridade = ?, data_entrega = ? WHERE id = ?",
        [titulo, descricao, status, prioridade, data_entrega, id]
    );
    return resultado.affectedRows;
}

async function deletarQuerry(id) {
    const [resultado] = await db.query("DELETE FROM tarefas WHERE id = ?", [id]);
    return resultado.affectedRows;
}

module.exports = { listarQuerry, criarQuerry, atualizarQuerry, deletarQuerry };