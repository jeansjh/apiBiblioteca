const pool = require("../config/conexion");

exports.getdocentes = (req, res) => {
  const sql = "SELECT d.id,d.nombre, d.apellido, c.nom_curso,d.url_foto FROM docente d INNER JOIN cursos c on d.id_curso = c.id;";
  pool.query(sql, (err, result, fields) => {
    if(err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.getdocenteById = (req, res) => {
  const ID = req.params.id;

  const sql = "SELECT d.id,d.nombre, d.apellido, c.nom_curso,d.url_foto FROM docente d INNER JOIN cursos c on d.id_curso = c.id WHERE d.id=?";
  pool.query(sql,[ID], (err, result, fields) => {
    if(err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}
