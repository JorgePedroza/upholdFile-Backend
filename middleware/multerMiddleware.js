import multer from "multer";
import path from "path";

/** Configuracion de almacenamiento local en servidor, es necesario que la carpeta
    tenga los permisos necesarios de escritura y lectura para verse desde la web */
const storage = multer.diskStorage({
    //carpeta destino
    destination: (req, file, cb) => {
        cb(null, 'D:/Documentos/public/api/media/image')
    },
    //Nombre creado para las imagenes cargadas
    filename: (req, file, cb) => {
        cb(null, 'img' + '-' + Date.now() + path.extname(file.originalname).toLocaleLowerCase())
    },
})

/** Estableder el tamaño maximo del archivo, el valor se mide en bytes y esto es 
    iguala 10 megabytes */
const limits = { fileSize: 10485760 } 

/** Hacer filtro para validar que los archivos cargados sean unicamente imagenes
  y no documentos de texto u otro formato */
const fileFilter = (req, file, cb) => {
    //expresion regular para aceptar formatos de imagen
    const tiposArchivosPermitidos = /jpeg|jpg|png|gif/
    //obtener formato de la informacion de la imagen y comparar con los formatos permitidos
    const myTipoArchivo = tiposArchivosPermitidos.test(file.mimetype)
    //Puede ocurrir el caso donde la informacion enviada en los parametros sea incorrecta o no sea
    //suficiente, es mejor validar ambos, obtengo el formato directamente de la imagen original  
    const extensionNombre = tiposArchivosPermitidos.test(path.extname(file.originalname).toLocaleLowerCase())
    if (myTipoArchivo && extensionNombre) {
        return cb(null, true)
    }
    return cb("error: imagen invalida")
}

/** cargar configuraciones al multer */
export default multer({
    storage,
    limits,
    fileFilter

}).single('image') //al poneser single solo se puede subir una imagen al mismo tiempo 


