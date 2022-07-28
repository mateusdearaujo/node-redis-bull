import { Express, Router } from 'express'

import { ExpressRouteAdapter } from '../adapters/express-route-adapter'
import { makeUserController } from '../factories/user/user'

export default (app: Express): void => {
  const router = Router()

  app.use('/api', router)

  router.post('/users', ExpressRouteAdapter(makeUserController()))
}
