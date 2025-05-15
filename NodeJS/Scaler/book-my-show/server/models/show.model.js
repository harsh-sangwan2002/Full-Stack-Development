const mongoose = require('mongoose');

const showSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movies",
        required: true,
    },
    ticketPrice: {
        type: Number,
        required: true,
    },
    totalSeats: {
        type: Number,
        required: true,
    },
    bookedSeats: {
        type: Array,
        default: [],
    },
    theatre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'theatres'
    }
}, { timestamps: true })

const showModel = mongoose.model("shows", showSchema);
module.exports = showModel