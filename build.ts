import { marpCli } from "@marp-team/marp-cli"
import dayjs from "dayjs"
import fs, { writeFile } from "fs-extra"
import globby from "globby"
import path from "path"

function posixify(input: string) {
  return input.replace(/\\/g, "/")
}

function join(...inputs: string[]) {
  return posixify(path.join(...inputs))
}

export function getMarkdownInputGlobs(project: string) {
  return [join(project, `**/*.md`), "!" + getMarkdownOutputPath(project)]
}

export function getMarkdownOutputPath(project: string) {
  return join(project, path.basename(project) + ".md")
}

export function getHtmlOutputPath(project: string) {
  return join(project, path.basename(project) + ".html")
}

function generatePragma() {
  const date = dayjs().format("DD.MM.YYYY")
  return `
---
marp: true
---

<!-- paginate: true -->
<!-- headingDivider: 3 -->
<!-- footer: '[Abraham Schilling](https://github.com/n4bb12), ${date}' -->
  `
}

export async function buildProject(project: string) {
  const theme = join(__dirname, "theme.md")
  const mdInputGlobs = getMarkdownInputGlobs(project)
  const mdOutput = getMarkdownOutputPath(project)
  const mdInputs = await globby(mdInputGlobs)

  if (!mdInputs.length) {
    console.log("No inputs.")
    return
  }

  const contents = await Promise.all([
    generatePragma(),
    fs.readFile(theme, "utf8"),
    ...mdInputs.sort().map((input) => fs.readFile(input, "utf8")),
  ])

  const merged = contents.map((content) => content.trim()).join("\n\n")

  await writeFile(mdOutput, merged, "utf8")
  await marpCli([mdOutput])
}
