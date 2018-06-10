import minify from 'rollup-plugin-minify-es'

export default {
  input: 'src/bin.js',
  output: {
    file: 'bin.js',
    format: 'cjs',
    banner: '#!/usr/bin/env node'
  },
  plugins: [minify()],
  external: [ 'fs', 'path', 'sanctuary', 'commander' ] // <-- suppresses the warning
}
