import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

// Excerpt is supported, but currently not used in the templates
export default () => {
  function readFrontMatter(file: string, parentDir: string, cache: Map<any, any>) {
    const fullPath = path.join(parentDir, file)
    const timestamp = fs.statSync(fullPath).mtimeMs

    const cached = cache.get(fullPath)
    if (cached && timestamp === cached.timestamp)
      return cached.post

    const src = fs.readFileSync(fullPath, 'utf-8')
    return matter(src, { excerpt: true })
  }

  function folderDir(name: string): string {
    const articlesPath = 'articles'
    // @ts-expect-error: import.meta is supported
    const dirname = path.dirname(fileURLToPath(import.meta.url))
    return path.resolve(dirname, `../../../${articlesPath}/${name}`)
  }

  function mainLevelDir(name: string): string {
    // @ts-expect-error: import.meta is supported
    const dirname = path.dirname(fileURLToPath(import.meta.url))
    return path.resolve(dirname, `../../../${name}`)
  }

  return { folderDir, readFrontMatter, mainLevelDir }
}
