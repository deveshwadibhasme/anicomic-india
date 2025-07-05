const mongoose = require("mongoose");
require('dotenv').config();

const SeriesInfoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    spotifyLink: { type: String, required: true },
    imagePortrait: { type: String, required: true },
    imageLandscape: { type: String, required: true },
    released: { type: Boolean, default: false },
    managingTeam: [{role: String, name: String}], 
    characterVoices:[{name: String, voiceBy: String}] ,
    characterImageUrls:[{character: String, url: String}] ,
    date: { type: Date, default: Date.now }
});
const SeriesInfo = mongoose.model("SeriesInfo", SeriesInfoSchema);

module.exports = SeriesInfo;