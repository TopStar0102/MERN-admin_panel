/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
const {
  verifiedFunction: ensureAuth,
  checkAdmin
} = require('./verifyJwtToken');

const {
  create,
  findAll,
  findOne,
  update,
  deleteOne,
  deleteAll,
} = require('../controllers/roleController');

// router.post("/", [ensureAuth, checkAdmin], create);
// router.get("/", [ensureAuth, checkAdmin], findAll);
// router.get("/:id", [ensureAuth, checkAdmin], findOne);
// router.put("/:id", [ensureAuth, checkAdmin], update);
// router.delete("/:id", [ensureAuth, checkAdmin], deleteOne);
// router.delete("/", [ensureAuth, checkAdmin], deleteAll);
router.post("/", create);
router.get("/", findAll);
router.get("/:id", findOne);
router.put("/:id", update);
router.delete("/:id", deleteOne);
router.delete("/", deleteAll);

module.exports = router;
