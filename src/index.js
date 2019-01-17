import { createServer } from 'http'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const port = process.env.PORT || 3000

createServer(async (req, res) => {
  await delay(500);
  res.end('ok')
})
  .listen(port, () => console.log(`Server running on port ${port}`))
