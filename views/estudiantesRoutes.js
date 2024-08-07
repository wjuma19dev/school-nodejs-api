import { Router } from 'express'
const router = Router()

import {
  ListarEstudiantes,
  ListarEstudiante,
  CrearEstudiantes,
  ActualizarEstudiantes,
  EliminarEstudiantes,
} from '../controllers/estudiantesController.js'


router.get('/', ListarEstudiantes)
router.post('/', CrearEstudiantes)

router.route('/:estudianteId')
  .get(ListarEstudiante)
  .put(ActualizarEstudiantes)
  .delete(EliminarEstudiantes)

export default router


