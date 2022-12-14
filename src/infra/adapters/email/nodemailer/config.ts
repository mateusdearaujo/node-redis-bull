import { TransportOptions } from 'nodemailer'

export class Config {
  host = process.env.MAIL_HOST
  port = process.env.MAIL_PORT
  auth = {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  }
  secure = false
  requireTLS = true
}

export default new Config() as TransportOptions
