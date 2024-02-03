const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
// import {nanoid} from 'nanoid';

// Schema
const urlSchema = new mongoose.Schema({
    longURL: { type: String, required: true, trim: true },
    shortURL: { type: String, required: true, trim: true, default: nanoid(10) },
    clicksCount: { type: Number, required: true, trim: true, default: 0 },
});

// Model
const urlModel = new mongoose.model('urlShortener', urlSchema);

module.exports = urlModel;