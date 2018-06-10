/*
*
* Watcher for Lib
*
*
*/
import S from 'sanctuary'
import chalk from 'chalk'

import {
  fsExists,
  fsWriteFile,
  folderContents,
  log,
  importStatementFromString
} from '../index.js'

const exportStatementFromArray = S.pipe([
  S.map(S.pipe([
    S.stripSuffix('.js')
  ])),
  S.filter(S.isJust),
  S.sequence(S.Maybe),
  S.map(S.joinWith(', ')),
  S.map((s) => { return `export { ${s} }` })
])

const indexJsFromArray = S.curry3((indexFile, folder, a) => S.pipe([
  S.map(importStatementFromString(indexFile)(folder))
])(a))

const ifAisBReturnC = S.curry3((a, b, c) => {
  return a === b ? S.of(S.Either)(c) : S.Left(S.Nothing)
})

const importStatementForFolder = S.curry2((file, folder) => S.pipe([
  folderContents,
  indexJsFromArray(file)(folder),
  S.unlines
])(folder))

const writeIndexForFolder = S.curry3((indexFile, folder, file) =>
  S.pipe([
    folderContents,
    exportStatementFromArray,
    S.map(S.concat(importStatementForFolder(indexFile)(folder))),
    S.map(fsWriteFile(indexFile)),
    log(chalk`{green Wrote {yellow ${indexFile}} from: {yellow ${folder}}:} `)
  ])(folder)
)
const ifFileWriteIndexForfolder = S.curry2((indexFile, folder) => S.pipe([
  S.map(S.concat(folder)),
  writeIndexForFolder(indexFile)(folder)
]))

export {
  exportStatementFromArray,
  indexJsFromArray,
  ifAisBReturnC,
  importStatementForFolder,
  ifFileWriteIndexForfolder,
  writeIndexForFolder
}
