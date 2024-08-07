import db from '../database/conexion.js'

export const ListarEstudiantes = async (req, res) => {
  const query = `SELECT * FROM estudiantes`;
  try {
    const rows = await db.query(query)
    res.json(rows[0])
  } catch (error) {
    res.status(500).json(error)
  }
}

export const ListarEstudiante = async (req, res) => {
  const query = `SELECT * FROM estudiantes WHERE id = ?`;
  try {
    const rows = await db.query(query, [req.params.estudianteId])
    res.json(rows[0])
  } catch (error) {
    res.status(500).json(error)
  }
}

export const CrearEstudiantes = async (req, res) => {
  const { dni, nombre, apellido, email } = req.body;
  const query = `
    INSERT INTO estudiantes (id, dni, nombre, apellido, email)
    VALUES (null,?,?,?,?)
  `;
  try {
    // [
    //   {
    //     "fieldCount": 0,
    //     "affectedRows": 1,
    //     "insertId": 5,
    //     "info": "",
    //     "serverStatus": 2,
    //     "warningStatus": 0,
    //     "changedRows": 0
    //   },
    //   null
    // ]
    const rows = await db.query(query, [dni, nombre, apellido, email])
    res.status(201).json({ id: rows[0].insertId })
  } catch (error) {
    res.status(500).json(error)
  }
}

export const ActualizarEstudiantes = async (req, res) => {

  // [
  //   {
  //     "fieldCount": 0,
  //     "affectedRows": 1,
  //     "insertId": 0,
  //     "info": "Rows matched: 1  Changed: 1  Warnings: 0",
  //     "serverStatus": 2,
  //     "warningStatus": 0,
  //     "changedRows": 1
  //   },
  //   null
  // ]

  const { dni, nombre, apellido, email } = req.body;
  const query = `UPDATE school.estudiantes
                SET dni=?, nombre=?, apellido=?, email=?
                WHERE id=?;`;

  try {
    const rows = await db.query(query, [dni, nombre, apellido, email, req.params.estudianteId])

    if(rows[0].affectedRows == 1) {
      res.status(200).json({ message: 'Estudiante actualizado correctamente.' })
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

export const EliminarEstudiantes = async (req, res) => {

  // [
  //   ResultSetHeader {
  //     fieldCount: 0,
  //     affectedRows: 1,
  //     insertId: 0,
  //     info: '',
  //     serverStatus: 2,
  //     warningStatus: 0,
  //     changedRows: 0
  //   },
  //   undefined
  // ]
  

  const query = `DELETE FROM school.estudiantes WHERE id=?;`;

  try {
    const rows = await db.query(query, [req.params.estudianteId])

    if(rows[0].affectedRows == 1) {
      res.status(200).json({ message: 'Estudiante eliminado correctamente.' })
    } else {
      res.status(400).json({ message: 'No se encontro un estudiante con este id' })
    }

  } catch (error) {
    res.status(500).json(error)
  }

  
}


