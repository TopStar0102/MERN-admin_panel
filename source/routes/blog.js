/* eslint-disable no-underscore-dangle */
const router = require('express').Router();

const {
  create,
  findAll,
  findOne,
  update,
  deleteOne,
  deleteAll,
} = require('../controllers/blogController');

router.post("/", create);
router.get("/", findAll);
router.get("/:id", findOne);
router.put("/:id", update);
router.delete("/:id", deleteOne);
router.delete("/", deleteAll);

module.exports = router;
