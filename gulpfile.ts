import browserSync from "browser-sync"
import gulp from "gulp"
import minimist from "minimist"

import { buildProject, getFilesToWatch, getHtmlOutputPath } from "./build"

const { project } = minimist(process.argv.slice(2))

if (!project) {
  throw new Error("Please set a project via --project <project>")
}

export async function build() {
  return buildProject(project)
}

export async function dev() {
  await build()

  const inputs = getFilesToWatch(project)
  const htmlOutput = getHtmlOutputPath(project)

  const bs = browserSync.create()
  bs.init({
    server: {
      baseDir: ".",
      directory: true,
    },
    single: true,
    startPath: htmlOutput,
    open: "local",
  })

  gulp.watch(inputs, build)
  gulp.watch(htmlOutput).on("change", bs.reload)
}
