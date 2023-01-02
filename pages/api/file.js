
import fs from 'fs'
export default handler = (req,res) => {
let data = "Hello World"
fs.writeFile('test.json', data, err => {})
res.json({"name":"Saalim"})
}
