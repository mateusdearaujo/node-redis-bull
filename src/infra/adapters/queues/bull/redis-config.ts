export class RedisConfig {
  host = process.env.REDIS_HOST
  port = parseInt(process.env.REDIS_PORT)
  password = process.env.REDIS_PASS
}

export default new RedisConfig()
