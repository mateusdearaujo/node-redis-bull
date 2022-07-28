import { UserController } from '../../../presentation/controllers/UserController'
import { Controller } from '../../../presentation/protocols'

export const makeUserController = (): Controller => new UserController()
