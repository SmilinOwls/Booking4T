const Booking = require("../models/Booking");
const Room = require("../models/Room");


const BookingControllers = {
    createOrder: async(req, res) => {
        const {
            userInfo,
            cart,
            paymentMethod,
            taxPrice,
            totalPrice,
        } = req.body
        try {
            const order = await Booking({
                userInfo,
                cart,
                //user: req.user.id,
                user: "644ba104cbfc09c11fdcc176",
                paymentMethod,
                taxPrice,
                totalPrice,
                checkIn: Date.now(),
                checkOut: Date.now() + 10,
                paidAt: Date.now()
            });
            const newOrder = await order.save();
            res.status(201).json(newOrder);
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

module.exports = BookingControllers
