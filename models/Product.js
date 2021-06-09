const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    imagePath: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    cadre: {
        type: String,
        
    },
    description: {
        type: String,
        required: true
    },
    collectionbook: {
        type: String,
        required: true
    },
    pages: {
        type: String,
        required: true
    },
    datePublished: {
        type: Date,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    voters: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}) ;




module.exports = mongoose.model ('Product' , productSchema) ;