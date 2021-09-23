const fs = require('fs')
const glob = require('glob')
const parser = require('xml2json')
const JsonToTS = require('json-to-ts')
const Case = require('case')
const jsonFormat = require('json-format')

const jsonConfig = {
  type: 'space',
  size: 2
}

const excludeFileName = ['eventStory', 'eventOption', 'bonus-event', 'audio', 'subject', 'bonus']

const isExclude = (fileName: string): boolean => {
  return !!excludeFileName.find(test => fileName === test)
}

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

  if (isExclude(filename)) {
    fs.writeFileSync(`./assets/data/xml/${filename}.json`, jsonFormat(JSON.parse(json)))
  } else {
    const jsonTemplate: string = `
    const data: Xml${Case.pascal(filename)}.RootObject = ${jsonFormat(JSON.parse(json), jsonConfig)}
    export default data
    `
    fs.writeFileSync(`./assets/data/xml/${filename}.ts`, jsonTemplate)
  }

  const ts: string[] = JsonToTS(JSON.parse(json))

  const exportTemplate = generateTemplate(ts)
  const tsTemplate = `
declare namespace Xml${Case.pascal(filename)} {
  ${exportTemplate}
}
`
  fs.writeFileSync(`./types/xml/Xml${Case.pascal(filename)}.d.ts`, tsTemplate)
}
