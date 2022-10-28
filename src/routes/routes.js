const express = require('express');
const router = express();

const bookController = require('../controllers/book.controller');
const docenteController = require('../controllers/docente.controller');
const cursoController = require('../controllers/curso.controller');

module.exports = () => {
    router.get('/libros', bookController.getBooks);
    router.get('/libros/:id', bookController.getBookById);
    router.post('/libros', bookController.createBook);
    router.put('/libros/:id', bookController.updateBookById);
    router.delete('/libros/:id', bookController.deleteBookById);
    /*docente*/
    router.get('/docentes', docenteController.getdocentes);
    router.get('/docentes/:id', docenteController.getdocenteById);

    /*Cursos*/
    router.get('/cursos', cursoController.getcursos);
    router.get('/cursos/:id', cursoController.getcursosById);
    

    return router;
}