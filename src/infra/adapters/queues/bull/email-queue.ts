import Queue, { Queue as IQueue } from 'bull'

import { EmailQueue } from '../../../../data/protocols/EmailQueue'
import { EmailSender } from '../../../protocols/email-sender'

import RedisConfig from './redis-config'

export class BullEmailQueueAdapter implements EmailQueue {
  private emailQueue: IQueue
  private readonly emailSender: EmailSender

  constructor(emailSender: EmailSender) {
    this.emailSender = emailSender
    this.emailQueue = new Queue('RegistrationMail', { redis: RedisConfig })
    this.emailQueue.process(async job => await this.emailSender.send(job.data))
  }

  async add<T>(data: T): Promise<void> {
    this.emailQueue.add(data)
  }
}
