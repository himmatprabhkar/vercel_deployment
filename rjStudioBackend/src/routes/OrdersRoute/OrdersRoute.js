const express = require('express');
const router = express.Router();
const authenticateToken =  require('../../middlewares/AuthMiddleware/authMiddleware');
const ordersController =  require('../../controllers/OrdersController/OrdersController')

const orders = [];

router.post('/create-orders',authenticateToken, ordersController.createOrder);

router.get('/orders', authenticateToken, (req, res) => {
    res.json(orders);
});

router.get('/orders/:id',authenticateToken, (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
});

router.put('/orders/:id', authenticateToken,  (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (order) {
        Object.assign(order, req.body);
        res.json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
});

router.delete('/orders/:id', authenticateToken, (req, res) => {
    const index = orders.findIndex(o => o.id === parseInt(req.params.id));
    if (index !== -1) {
        orders.splice(index, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
});

module.exports = router;