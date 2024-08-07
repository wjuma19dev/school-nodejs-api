import { Router } from 'express'
const router = Router()

import {
  ListarProfesores,
  Listarprofesor,
  CrearProfesores,
  ActualizarProfesores,
  EliminarProfesores,
} from '../controllers/profesoresController.js'

router.get('/', ListarProfesores)
router.post('/', CrearProfesores)

router.route('/:profesorId')
  .get(Listarprofesor)
  .put(ActualizarProfesores)
  .delete(EliminarProfesores)

export default router
