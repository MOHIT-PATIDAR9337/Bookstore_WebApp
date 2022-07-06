const express = require("express");
const router = express.Router();

const Book =require("../model/Book");

const booksController = require("../controller/books-controller");

router.get("/", booksController.getAllBooks);
    // This route will provide all of the books
router.post("/",booksController.addBook);
 router.get("/:id", booksController.getById);   
router.put("/:id", booksController.updateBook);
router.delete("/:id",booksController.deleteBook);
module.exports = router;