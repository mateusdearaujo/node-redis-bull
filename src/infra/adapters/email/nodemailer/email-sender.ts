import nodemailer from 'nodemailer'
import { Transporter } from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

import { EmailSender } from '../../../protocols/email-sender'

import Config from './config'

export class NodemailerEmailSenderAdapter implements EmailSender {
  private readonly transporter: Transporter

  constructor() {
    this.transporter = nodemailer.createTransport(Config)
  }

  async send(options: Mail.Options): Promise<void> {
    await this.transporter.sendMail(options)
  }
}
