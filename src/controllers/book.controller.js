const pool = require("../config/conexion");

exports.getBooks = (req, res) => {
  const sql = "SELECT l.id,l.titulo,l.autor,c.nom_curso,l.desc1,l.desc2,l.url_img,l.url_libro FROM libro l INNER JOIN cursos c ON l.id_curso = c.id;";
  pool.query(sql, (err, result, fields) => {
    if(err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.getBookById = (req, res) => {
  const ID = req.params.id;

  const sql = "SELECT l.id,l.titulo,l.autor,c.nom_curso,l.desc1,l.desc2,l.url_img,l.url_libro FROM libro l INNER JOIN cursos c ON l.id_curso = c.id WHERE l.id=?";
  pool.query(sql,[ID], (err, result, fields) => {
    if(err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.createBook = (req, res) => {
  const values = Object.values(req.body)

  const sql = "  INSERT INTO libro(id,titulo, autor, id_curso, desc1, desc2, url_img, url_libro) VALUES(NULL, ?, ?, 1, ?, ?,? , ?)";
  pool.query(sql, values, (err, result, fields) => {
    if(err) {
      res.json({ message: "Error al guardar en BD" });
    }
    res.json({message: "Nuevo libro agregado"})
  })
}

exports.updateBookById = (req, res) => {
  const values = Object.values(req.body);
  const ID = req.params.id;

  const sql = "UPDATE libro SET titulo=?, autor=?, desc1=?, desc2=?, url_img=?, url_libro=? WHERE id=?";
  pool.query(sql, [...values, ID], (err, result, fields) => {
    if(err) {
      res.json({ message: "Error al actualizar" });
    }
    res.json({message: "Libro actualizado"})
  })
}

exports.deleteBookById = (req, res) => {
  const ID = req.params.id;

  const sql = "DELETE FROM libro WHERE id=?";
  pool.query(sql, ID, (err, result, fields) => {
    if(err) {
      res.json({ message: "Error al eliminar" });
    }
    res.json({message: "Un libro eliminado"})
  })
}