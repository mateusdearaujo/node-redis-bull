import Queue from '../../lib/Queue'

import { Request, Response } from 'express'

export default {
  async store(req: Request, res: Response) {
    const { name, email, password } = req.body

    const user = { name, email, password }

    await Queue.add('RegistrationMail', { user })

    return res.json(user)
  },
}
