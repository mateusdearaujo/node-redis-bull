import Mail from 'nodemailer/lib/mailer'

export interface EmailSender {
  send(options: Mail.Options): Promise<void>
}
