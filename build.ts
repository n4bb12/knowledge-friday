import fs, { writeFile } from "fs-extra"
import globby from "globby"
import path from "path"
import dayjs from "dayjs"
import { marpCli } from "@marp-team/marp-cli"

const [, , project] = process.argv

function posixify(input: string) {
  return input.replace(/\\/g, "/")
}

function join(...inputs: string[]) {
  return posixify(path.join(...inputs))
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

async function main() {
  const theme = join(__dirname, "theme.md")
  const mdFiles = await globby([join(project, `/**/*.md`)])
  const bundleFile = join(project, path.basename(project) + ".md")
  const fragments = mdFiles.filter((file) => file !== bundleFile)

  if (!fragments.length) {
    console.log("No inputs.")
    return
  }

  const contents = await Promise.all([
    generatePragma(),
    fs.readFile(theme, "utf8"),
    ...fragments.sort().map((input) => fs.readFile(input, "utf8")),
  ])

  const merged = contents.map((content) => content.trim()).join("\n\n")

  await writeFile(bundleFile, merged, "utf8")
  await marpCli([bundleFile])
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
