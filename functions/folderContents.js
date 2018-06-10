import path from 'path'
import fs from 'fs'

export default (folder) => {
  return fs.readdirSync(path.resolve(process.cwd(), folder))
}
