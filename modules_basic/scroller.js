const fs = require('fs')
const h = require('../h')

exports.gives = {
  build_scroller: true,
  mcss: true
}

exports.create = function (api) {
  return {
    build_scroller,
    mcss: () => fs.readFileSync(__filename.replace(/js$/, 'mcss'), 'utf8')
  }

  function build_scroller (children) {
    if (children.indexOf('content') < 0)
      console.error("build_scroller expected be told position of a 'content' element, instead got", children)

    var content = h('div.content')
    var container = h('Scroller',

      { style: { overflow: 'auto' } }, 
      [
        h('div.wrapper', children.map(child => child === 'content' 
          ? content
          : child
        ))
      ]
    )

    return {
      content,
      container
    }
  }
}

