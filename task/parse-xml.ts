const fs = require('fs')
const glob = require('glob')
const parser = require('xml2json')
const JsonToTS = require('json-to-ts')
const Case = require('case')
glob('XML/**/*.xml', {}, function (_er: any, files: string[]) {
  files.forEach(file => makeFile(file))
})

function generateTemplate (ts: string[]): string {
  let result: string = ''
  ts.forEach((el) => {
    result = result + `export ${el}
`
  })
  return result
}

function makeFile (file: string): void {
  const filename = file.split('.')[0].split('/')[1]
  const text: string = fs.readFileSync(file, 'utf-8')

  const json: string = parser.toJson(text)
  const jsonTemplate: string = `
const data: Xml${Case.pascal(filename)}.RootObject = ${json}
export default data
`
  fs.writeFileSync(`./assets/data/xml/${filename}.ts`, jsonTemplate)

  const ts: string[] = JsonToTS(JSON.parse(json))

  const exportTemplate = generateTemplate(ts)
  const tsTemplate = `
declare namespace Xml${Case.pascal(filename)} {
  ${exportTemplate}
}
`
  fs.writeFileSync(`./types/xml/Xml${Case.pascal(filename)}.d.ts`, tsTemplate)
}
