const mongoose = require('mongoose')

const UploadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
})

const Upload = mongoose.model('Upload', UploadSchema)
module.exports = Upload