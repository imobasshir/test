const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const {
    uploadAImage,
    uploadMultipleImages,
    getImages,
    deleteImages,
    deleteImage,
    getImage,
    updateImage,
} = require('../controllers/upload')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    },
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const uploadImage = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
})
// app.post('/') - Upload a file
// app.get('/') - Get all files
// app.delete('/') - Delete all files
router.route('/').post(uploadImage.single('image'), uploadAImage).get(getImages).delete(deleteImages)

// app.post('/multiple') - Upload multiple files
router.route('/multiple').post(uploadImage.array('image', 10), uploadMultipleImages)

// app.get('/:id') - Get a file
// app.delete('/:id') - Delete a file
// app.patch('/:id') - Update a file
router.route('/:id').get(getImage).delete(deleteImage).patch(uploadImage.single('image'), updateImage)

module.exports = router