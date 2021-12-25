import { promises as fs } from 'fs'
const glob = require('glob')
const parser = require('xml2json')
const JsonToTS = require('json-to-ts')
const Case = require('case')
const jsonFormat = require('json-format')

const jsonConfig = {
  type: 'space',
  size: 2,
}

const excludeFileName = ['eventStory', 'eventOption', 'bonus-event', 'audio', 'subject', 'bonus']

const isExclude = (fileName: string): boolean => {
  return !!excludeFileName.find((test) => fileName === test)
}

const assetsPath = './assets/data/xml/'

async function exec() {
  await fs.rm(assetsPath, { recursive: true, force: true })
  await fs.mkdir(assetsPath)

  glob('XML/**/*.xml', {}, function (_er: any, files: string[]) {
    files.forEach((file) => makeFile(file))
  })
}

exec()

function generateTemplate(ts: string[]): string {
  let result: string = ''
  ts.forEach((el) => {
    result =
      result +
      `export ${el}
`
  })
  return result
}

async function makeFile(file: string) {
  const dirName = file.split('.')[0].split('/')[1]
  if (dirName !== 'Infos') return
  const filename = file.split('.')[0].split('/')[2]
  const text: string = await fs.readFile(file, 'utf-8')

  const json: string = parser.toJson(text)

  if (isExclude(filename)) {
    await fs.writeFile(`${assetsPath + filename}.json`, jsonFormat(JSON.parse(json)))
  } else {
    const jsonTemplate: string = `
    const data: Xml${Case.pascal(filename)}.RootObject = ${jsonFormat(JSON.parse(json), jsonConfig)}
    export default data
    `
    await fs.writeFile(`${assetsPath + filename}.ts`, jsonTemplate)
  }

  const ts: string[] = JsonToTS(JSON.parse(json))

  const exportTemplate = generateTemplate(ts)
  const tsTemplate = `
declare namespace Xml${Case.pascal(filename)} {
  ${exportTemplate}
}
`
  await fs.writeFile(`./types/xml/Xml${Case.pascal(filename)}.d.ts`, tsTemplate)
}
