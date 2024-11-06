const Order = require('../../models/Orders/Orders');
const { orderValidation } = require('../../validation/OrdersValidation/OrdersValidation');
const { validationError } = require('../../error/error');
const { sendEmailProductOrder, sendNewOrder } = require('../../services/SMTP/sendMail');


exports.createOrder = async (req, res) => {
    try {
        const isValid = orderValidation.validate(req.body);


        if (isValid.error) {
            return res.status(200).send(validationError(isValid.error.details[0].message))
        }

        const { value } = isValid

        await sendEmailProductOrder('shashikumarreddy023@gmail.com', 'himmat kumar', '33', '443344')
        // await sendNewOrder('rakeshraki871@gmail.com', 'Himmat kumar', '33', '34343')
        
        const order = new Order(value);
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.log('eeeeee', error)
        res.status(500).json({ message: 'Error creating order', error });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving orders', error });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving order', error });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedOrder) {
            res.json(updatedOrder);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating order', error });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (deletedOrder) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error });
    }
};
