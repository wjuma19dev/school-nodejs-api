import db from '../database/conexion.js'


export const ListarCursos = async (req, res) => {


  res.json({ query })
}

export const ListarCurso = (req, res) => {
  res.json({ message: 'LISTANDO CURSO: ' + req.params.estudianteId })
}

export const CrearCursos = (req, res) => {
  res.json({ message: 'CREAR DE CURSOS' })
}

export const ActualizarCursos = (req, res) => {
  res.json({ message: 'ACTUALIZANDO DE CURSOS: '+ req.params.estudianteId })
}

export const EliminarCursos = (req, res) => {
  res.json({ message: 'ELIMINANDO DE CURSOS: '+ req.params.estudianteId })
}


