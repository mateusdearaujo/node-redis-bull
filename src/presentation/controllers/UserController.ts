import Queue from '../../lib/Queue'

import { Controller, HttpRequest, HttpResponse } from '../protocols'

export class UserController implements Controller {
  async handle(req: HttpRequest): Promise<HttpResponse> {
    const { name, email, password } = req.body

    const user = { name, email, password }

    await Queue.add('RegistrationMail', { user })

    return {
      statusCode: 200,
      body: {},
    }
  }
}
