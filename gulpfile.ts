import browserSync from "browser-sync"
import gulp from "gulp"
import minimist from "minimist"
import path from "path"

import { buildProject, getHtmlOutputPath, getMarkdownInputGlobs } from "./build"

const { project } = minimist(process.argv.slice(2))

export async function build() {
  return buildProject(project)
}

export async function dev() {
  const bs = browserSync.create()

  const mdInputs = getMarkdownInputGlobs(project)
  const htmlOutput = getHtmlOutputPath(project)

  bs.init({
    server: { baseDir: project },
    open: "local",
    startPath: path.basename(htmlOutput),
  })

  gulp.watch(mdInputs, build)
  gulp.watch(htmlOutput).on("change", bs.reload)
}
