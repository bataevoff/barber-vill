const { model, Schema } = require("mongoose");

const barberSchema = new Schema({
    lastname: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    desc: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        required: true
    },
    telegram: {
        type: String
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
    location: {
        lng: {
            type: Number,
            required: true
        },
        lat: {
            type: Number,
            required: true
        }
    }
});

module.exports.Barber = model("Barber", barberSchema);