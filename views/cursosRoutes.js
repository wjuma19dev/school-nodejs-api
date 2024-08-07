import { Router } from 'express'
const router = Router()

import {
  ListarCursos,
  ListarCurso,
  CrearCursos,
  ActualizarCursos,
  EliminarCursos,
} from '../controllers/cursosController.js'


router.get('/', ListarCursos)
router.post('/', CrearCursos)

router.route('/:estudianteId')
  .get(ListarCurso)
  .put(ActualizarCursos)
  .delete(EliminarCursos)

export default router
