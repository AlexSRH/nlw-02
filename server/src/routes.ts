import { Router } from 'express'
import { ClassesController } from './controllers/ClassesController'
import { ConnectionsController } from './controllers/ConnectionsController'

const router = Router()
const classesController = new ClassesController()
const connectionsController = new ConnectionsController()

router.get('/classes', classesController.index)
router.post('/classes', classesController.create)

router.get('/connections', connectionsController.index)
router.post('/connections', connectionsController.create)

export { router }
