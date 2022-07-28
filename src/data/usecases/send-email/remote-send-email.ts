import { EmailParams, SendMail } from '../../../domain/usecases/send-email'
import { EmailQueue } from '../../protocols/EmailQueue'

export class RemoteSendEmail implements SendMail {
  private readonly emailQueue: EmailQueue

  constructor(emailQueue: EmailQueue) {
    this.emailQueue = emailQueue
  }

  async send(params: EmailParams): Promise<void> {
    await this.emailQueue.add({
      from: 'Queue Teste <queue@queue.com.br>',
      to: `${params.name} <${params.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${params.name}, bem-vindo.`,
    })
  }
}
