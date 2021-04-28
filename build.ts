import { marpCli } from "@marp-team/marp-cli"
import dayjs from "dayjs"
import { readFile, readJson, writeFile } from "fs-extra"
import globby from "globby"
import path from "path"
import prettier from "prettier"

function posixify(input: string) {
  return input.replace(/\\/g, "/")
}

function join(...inputs: string[]) {
  return posixify(path.join(...inputs))
}

async function getPrettierConfig() {
  const prettierConfig = await readJson("./.prettierrc")
  return { ...prettierConfig, parser: "markdown" }
}

function getThemePath() {
  return join(__dirname, "theme.html")
}

export function getMarkdownOutputPath(project: string) {
  return join(project, "index.md")
}

export function getHtmlOutputPath(project: string) {
  return join(project, "index.html")
}

export function getFilesToWatch(project: string) {
  return [
    join(project, `**/*`),
    getThemePath(),
    "!" + getMarkdownOutputPath(project),
    "!" + getHtmlOutputPath(project),
  ]
}

function getPragma() {
  const date = dayjs().format("DD.MM.YYYY")
  return `
---
marp: true
---

<!-- paginate: true -->
<!-- headingDivider: 1 -->
<!-- footer: '[Abraham Schilling](https://github.com/n4bb12), ${date}' -->
  `
}

async function findFiles(project: string, name: string) {
  return globby([join(project, name) + ".{md,html}"])
}

async function getFile(project: string, name: string) {
  const files = await findFiles(project, name)
  if (files.length < 1) {
    throw new Error(`Not found: "${name}"`)
  }
  if (files.length > 1) {
    throw new Error(`Ambiguous: "${name}"`)
  }
  return files[0]
}

async function readBaseTheme() {
  return readFile(getThemePath(), "utf8")
}

async function readToc(project: string) {
  const file = join(project, "toc")
  return readFile(file, "utf8")
}

async function readInputFile(input: string) {
  const name = path.basename(input, path.extname(input))
  const content = await readFile(input, "utf8")

  if (content.startsWith("<style>") || content.startsWith("#")) {
    return content
  }

  return `# ${name}\n\n` + content
}

export async function buildProject(project: string) {
  const toc = await readToc(project)

  const inputs = await Promise.all(
    toc
      .split(/[\r\n]/g)
      .filter(Boolean)
      .map((name) => getFile(project, name)),
  )

  if (!inputs.length) {
    console.log("No inputs.")
    return
  }

  const contents = await Promise.all([
    getPragma(),
    readBaseTheme(),
    ...inputs.map(readInputFile),
  ])

  const merged = contents.map((content) => content.trim()).join("\n\n")
  const prettierConfig = await getPrettierConfig()
  const formatted = prettier.format(merged, prettierConfig)
  const mdOutput = getMarkdownOutputPath(project)

  await writeFile(mdOutput, formatted, "utf8")
  await marpCli([mdOutput, "--html"])
}
