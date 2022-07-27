import Mail from '../lib/Mail'

interface Job {
  key: string
  handle: ({ data }) => Promise<void>
  options: {
    delay: number
    attemps: number
  }
}

class RegistrationMailJob implements Job {
  key = 'RegistrationMail'
  options = {
    delay: 500,
    attemps: 3,
  }

  async handle({ data }) {
    const { user } = data

    await Mail.sendMail({
      from: 'Queue Teste <queue@queue.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${user.name}, bem-vindo.`,
    })
  }
}

export default new RegistrationMailJob()
