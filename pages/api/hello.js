// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
export default (req, res) => {
  let data = "Hello World"
  fs.writeFile("/tmp/test.json", data, err => {})
  res.statusCode = 200
  res.json({ name: 'Saalim Zafar' })
  
}
