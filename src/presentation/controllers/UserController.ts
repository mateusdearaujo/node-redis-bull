import { SendMail } from '../../domain/usecases/send-email'

import { Controller, HttpRequest, HttpResponse } from '../protocols'

export class UserController implements Controller {
  private readonly sendMail: SendMail

  constructor(sendMail: SendMail) {
    this.sendMail = sendMail
  }

  async handle(req: HttpRequest): Promise<HttpResponse> {
    const { name, email, password } = req.body

    const user = { name, email, password }

    await this.sendMail.send(user)

    return {
      statusCode: 200,
      body: { message: 'Your data will be processed sooon.' },
    }
  }
}
