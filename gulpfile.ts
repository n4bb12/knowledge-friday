import browserSync from "browser-sync"
import gulp from "gulp"
import minimist from "minimist"
import path from "path"

import { buildProject, getFilesToWatch, getHtmlOutputPath } from "./build"

const { project } = minimist(process.argv.slice(2))

export async function build() {
  return buildProject(project)
}

export async function dev() {
  await build()

  const inputs = getFilesToWatch(project)
  const htmlOutput = getHtmlOutputPath(project)

  const bs = browserSync.create()
  bs.init({
    server: { baseDir: project },
    open: "local",
    startPath: path.basename(htmlOutput),
  })

  gulp.watch(inputs, build)
  gulp.watch(htmlOutput).on("change", bs.reload)
}
