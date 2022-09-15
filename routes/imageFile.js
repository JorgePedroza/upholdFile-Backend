import express from 'express'
import { guardarImagen, obtenerImagenes } from '../controllers/imageFileControllers.js'
import multer from '../middleware/multerMiddleware.js'


const router = express.Router()


router.post('/image',multer, guardarImagen)

router.get('/image', obtenerImagenes)


export default router