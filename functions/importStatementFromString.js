import S from 'sanctuary'
import path from 'path'

export default S.curry3((indexFile, folder, s) => `import ${s.split('.')[0]} from './${path.relative(path.dirname(indexFile), folder)}/${s}'`)
