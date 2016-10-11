'use strict'
const stc = require('stc');
const gbk = require('../lib/index')
const moveto = require('stc-moveto')

stc.config({
  include: ['template/', 'static/'],
  product: 'test',
  tpl: {
    engine: 'smarty',
    extname: 'tpl',
    ld: '{%',
    rd: '%}'
  }
})

stc.workflow({
  gbk2utf8: {plugin: gbk, include: {type: 'tpl'}, options: {cov: 'start'}},
  moveto: {
    plugin: moveto, include: {type: 'tpl'}, options: {
      debug: false
    }
  },
  gbkReback: {plugin: gbk, include: {type: 'tpl'}, options: {cov: 'end'}}
});

stc.start()
