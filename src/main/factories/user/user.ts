import { RemoteSendEmail } from '../../../data/usecases/send-email/remote-send-email'
import { NodemailerEmailSenderAdapter } from '../../../infra/adapters/email/nodemailer/email-sender'
import { BullEmailQueueAdapter } from '../../../infra/adapters/queues/bull/email-queue'
import { UserController } from '../../../presentation/controllers/UserController'
import { Controller } from '../../../presentation/protocols'

export const makeUserController = (): Controller => {
  const nodemailerEmailSenderAdapter = new NodemailerEmailSenderAdapter()

  const bullEmailQueueAdapter = new BullEmailQueueAdapter(
    nodemailerEmailSenderAdapter,
  )

  const remoteSendEmail = new RemoteSendEmail(bullEmailQueueAdapter)

  return new UserController(remoteSendEmail)
}
