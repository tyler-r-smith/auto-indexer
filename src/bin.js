import { ifFileWriteIndexForfolder, ifAisBReturnC, writeIndexForFolder } from './watcher.js'
import program from 'commander'
import fs from 'fs'
import path from 'path'

program
  .version('0.0.1')
  .option('-f --folder [text]', 'Folder to watch')
  .option('-i --index [text]', 'index file to write')
  .parse(process.argv)

const {index, folder} = program
writeIndexForFolder(path.resolve(process.cwd(), index))(path.resolve(process.cwd(), folder))('')
fs.watch(path.resolve(process.cwd(), folder), (event, filename) => {
  ifFileWriteIndexForfolder(path.resolve(process.cwd(), index))(folder)((ifAisBReturnC('rename')(event)(filename)))
})
