const pool = require("../config/conexion");

exports.getcursos = (req, res) => {
  const sql = "SELECT * FROM cursos;";
  pool.query(sql, (err, result, fields) => {
    if(err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.getcursosById = (req, res) => {
  const ID = req.params.id;

  const sql = "SELECT * FROM cursos WHERE id=?";
  pool.query(sql,[ID], (err, result, fields) => {
    if(err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}
