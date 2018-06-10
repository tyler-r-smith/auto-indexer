import S from 'sanctuary'

export default S.curry2((x, y = '') => {
  console.log(x, y)
  return y
})
