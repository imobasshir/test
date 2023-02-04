const Upload = require('../models/upload')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', true)
const dbConnect = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


const uploadAImage = async (req, res) => {
    try {
        let newUpload = new Upload({
            name: req.body.name,
            image: {
                data: req.file.filename,
                contentType: req.file.mimetype,
            }
        })

        newUpload = await newUpload.save()

        res.status(201).json({ newUpload })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

const uploadMultipleImages = async (req, res) => {
    try {
        const files = req.files
        const uploadFiles = []

        for (let file of files) {
            let newUpload = new Upload({
                name: req.body.name,
                image: {
                    data: file.filename,
                    contentType: file.mimetype,
                }
            })

            newUpload = await newUpload.save()
            uploadFiles.push(newUpload)
        }

        res.status(201).json({ uploadFiles })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

const getImages = async (req, res) => {
    try {
        const uploads = await Upload.find({})
        res.status(200).json({ uploads, })
    } catch (error) {
        res.status(500).json({ error: error.message, })
    }
}

const deleteImages = async (req, res) => {
    try {
        await Upload.deleteMany({})
        res.status(200).json({ msg: 'All files deleted', })
    } catch (error) {
        res.status(500).json({ error: error.message, })
    }
}

const deleteImage = async (req, res) => {
    try {
        const deleteImg = await Upload.findByIdAndDelete(req.params.id)
        if (!deleteImg) {
            return res.status(404).json({ msg: 'File not found', })
        }
        res.status(200).json({ msg: 'File deleted', })
    } catch (error) {
        res.status(500).json({ error: error.message, })
    }
}

const getImage = async (req, res) => {
    try {
        const getImg = await Upload.findById(req.params.id)
        if (!getImg) {
            return res.status(404).json({ msg: 'File not found', })
        }
        res.status(200).json({ upload, })
    } catch (error) {
        res.status(500).json({ error: error.message, })
    }
}

const updateImage = async (req, res) => {
    try {
        // update image by id
        const updateImg = Upload.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            image: {
                data: req.file.filename,
                contentType: req.file.mimetype,
            }
        }, { new: true })
        if (!updateImg) {
            return res.status(404).json({ msg: 'File not found', })
        }
        res.status(200).json({ upload, })
    } catch (error) {
        res.status(500).json({ error: error.message, })
    }
}

module.exports = {
    dbConnect,
    uploadAImage,
    uploadMultipleImages,
    getImages,
    deleteImages,
    deleteImage,
    getImage,
    updateImage,
}