import S from 'sanctuary'

export default S.pipe([
  S.map(S.pipe([
    S.stripSuffix('.js')
  ])),
  S.filter(S.isJust),
  S.sequence(S.Maybe),
  S.map(S.joinWith(', ')),
  S.map((s) => { return `export { ${s} }` })
])
