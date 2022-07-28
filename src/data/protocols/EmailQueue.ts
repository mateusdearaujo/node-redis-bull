import Mail from 'nodemailer/lib/mailer'

export interface EmailQueue {
  add(data: Mail.Options): Promise<void>
}
