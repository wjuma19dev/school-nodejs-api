import db from '../database/conexion.js'
let query = ''

export const ListarProfesores = async (req, res) => {
  query = `SELECT * FROM profesores`;
  try {
    const rows = await db.query(query)
    res.json(rows[0])
  } catch(err) {
    res.status(500).json(err)
  }
  res.json({ message: 'LISTADO DE Profesores' })
}

export const Listarprofesor = async (req, res) => {
  query = `SELECT * FROM profesores WHERE id = ?`
  try {
    const rows = await db.query(query, [req.params.profesorId])
    res.json(rows[0])
  } catch (error) {
    res.status(500).json(error)
  }
}

export const CrearProfesores = async (req, res) => {
  const { email, nombre, apellido, dni, profesion, telefono } = req.body
  query = `INSERT INTO profesores (id, email, nombre, apellido, dni,profesion, telefono) VALUES (null,?,?,?,?,?,?)`
  try {
    const rows = await db.query(query, [email, nombre, apellido, dni,profesion, telefono])
    res.status(201).json({ id: rows[0].insertId })
  } catch (error) {
    res.status(500).json(error)
  }
}

export const ActualizarProfesores = async (req, res) => {
  const { email, nombre, apellido, dni, profesion, telefono } = req.body
  query = `UPDATE profesores SET email=?, nombre=?, apellido=?, dni=?, profesion=?, telefono=? WHERE id=?;`

  try {
    const rows = await db.query(query, [email, nombre, apellido, dni, profesion, telefono, req.params.profesorId])
    if(rows[0].affectedRows == 1) {
      res.status(200).json({ message: 'Profesor actualizado correctamente.' })
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

export const EliminarProfesores = async (req, res) => {
  query = `DELETE FROM school.profesores WHERE id=?;`;
  try {
    const rows = await db.query(query, [req.params.profesorId])
    if(rows[0].affectedRows == 1) {
      res.status(200).json({ message: 'Profesor eliminado correctamente.' })
    } else {
      res.status(400).json({ message: 'No se encontro un profesor con este id' })
    }
  } catch (error) {
    res.status(500).json(error)
  }
}