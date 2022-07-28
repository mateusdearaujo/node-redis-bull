export interface EmailParams {
  name: string
  email: string
  password: string
}

export interface SendMail {
  send(params: EmailParams): Promise<void>
}
