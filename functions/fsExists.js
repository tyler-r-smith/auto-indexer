import path from 'path'
import fs from 'fs'
import S from 'sanctuary'

export default (file) => {
  return fs.existsSync(path.resolve(__dirname, file))
    ? S.Right(file) : S.Left(file)
}
