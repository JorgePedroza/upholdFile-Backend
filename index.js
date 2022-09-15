import express from 'express'
import path from 'path'

import imageFile from './routes/imageFile.js'

const app = express()
const port = 3000

app.use(express.json({ extended: true }))


// Routing
app.use('/api', imageFile)

//static path
/** Los documentos y carpetas dentro se hacen validos para verse en los navegadores 
 * pero la carpeta raiz y no 
ejemplo: //http:localhost:3000/api/media/image/img.jpeg
*/
app.use(express.static(path.join('D:/Documentos/public')))

//serve
app.listen(port, () => console.log(`El servidor está funcionando en el puerto ${port}`))
