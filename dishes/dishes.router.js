const router = require("express").Router();
const { listDishes, createDish, getDish, updateDish } = require("./dishes.controller");
const error405 = require("../errors/error405");

// TODO: Implement the /dishes routes needed to make the tests pass
router
	.route("/")
	.get(listDishes)
	.post(createDish)
	.all(error405);

router
	.route("/:dishId")
	.get(getDish)
	.put(updateDish)
	.all(error405);

module.exports = router;