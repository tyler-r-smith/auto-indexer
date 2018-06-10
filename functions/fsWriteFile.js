import path from 'path'
import fs from 'fs'
import S from 'sanctuary'

export default S.curry2((file, string) => {
  return fs.writeFileSync(path.resolve(__dirname, file), string)
})
