import express from 'express'
const app = express()

import estudiantesRoutes from './views/estudiantesRoutes.js'
import profesoresRoutes from './views/profesoresRoutes.js'
import cursosRoutes from './views/cursosRoutes.js'

app.use(express.json())

app.use('/estudiantes', estudiantesRoutes)
app.use('/profesores', profesoresRoutes)
app.use('/cursos', cursosRoutes)

app.listen(
  3000,
  () => console.log('Server is running on port 3000')
)