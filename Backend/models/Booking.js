const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    maxGuests: {
        type: Number,
    },
    qnt: {
        type: Number,
        required: true
    },
    room:{
        type: mongoose.Schema.ObjectId,
        ref: "Room",
        required: true,
    }
})

const bookingSchema = new mongoose.Schema({
    place: {
        type: mongoose.Schema.ObjectId,
        ref: "Place",
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    userInfo: {
        fullName: {
            type: String,
        },
        phone: String,
        IdentifyCard: String
    },
    cart: [cartSchema],
    checkIn:{
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
      },
      paidAt: {
        type: Date,
        required: true,
      },

      orderStatus: {
        type: String,
        default: "Processing",
      },
    taxPrice: {
        type: Number,
        default: 0.0
    },
    totalPrice: {
        type: Number
    }

}, {timestamps: true});

module.exports = mongoose.model("booking", bookingSchema)