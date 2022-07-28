import 'dotenv/config'

const serve = async () => {
  const app = (await import('./main/config/app')).default
  app.listen(3333, () => console.log(`Server running at http://localhost:3333`))
}

serve()
