import initializeBasicAuth from 'nextjs-basic-auth'
import type { IncomingMessage, ServerResponse } from 'http'

const users = [
  {
    user: process.env.BASIC_AUTH_USERNAME!,
    password: process.env.BASIC_AUTH_PASSWORD!,
  },
]

const basicAuth = async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> => {
  await initializeBasicAuth({ users })(req, res)

  if (res.statusCode === 401) {
    return res.end('<html>Unauthorized</html>')
  }
}

export default basicAuth
