import Plugin from 'stc-plugin'
import isUTF8 from 'is-utf8'
import iconv from 'iconv-lite'

let cache = {}

export default class GbkPlugin extends Plugin {
  async run() {
    let content = await this.getContent()

    if (this.options.cov === 'start') {
      if (isGBK(content)) {
        cache[this.file.path] = true
        content = iconv.decode(content, 'gbk')
      }

      return content
    }


    if (this.options.cov === 'end') {
      let rawIsGBK = cache[this.file.path]
      if (!rawIsGBK) return content

      content = iconv.encode(content, 'gbk')
      return content
    }
  }

  async update(content) {
    this.setContent(content)
  }

  static cluster() {
    return false
  }

  static cache() {
    return false
  }
}

function isGBK(content) {
  return !isUTF8(content)
}
