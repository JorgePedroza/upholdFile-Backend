

export const guardarImagen = async (req, res) => {
  const {filename} = req.file;
  try {
      console.log(req.file)
    return res.json({
      status: '200',
      message:'imagen guardada',
      url: `http://localhost:3000/api/media/image/${filename}`,
    })
  } catch (error) {
    return res.status(400).json({
      status:'400',
      error
    })
  }
}

export const obtenerImagenes = async (req, res) => {
  try {
    return res.json('Se regresan todas las imagenes')
  } catch (error) {
    return errorRequest(req, res, GET_HOME_PAGE, error)
  }
}

