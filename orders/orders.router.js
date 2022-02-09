const router = require("express").Router();
const { listOrders, createOrder, getOrder, updateOrder, deleteOrder } = require("./orders.controller");
const error405 = require("../errors/error405");

// TODO: Implement the /orders routes needed to make the tests pass
router
	.route("/")
	.get(listOrders)
	.post(createOrder)
	.all(error405);

router
	.route("/:orderId")
	.get(getOrder)
	.put(updateOrder)
	.delete(deleteOrder)
	.all(error405);

module.exports = router;
