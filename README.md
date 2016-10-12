# stc-gbk

<!--[![Build Status](https://travis-ci.org/stcjs/stc-gbk.svg?branch=master)](https://travis-ci.org/stcjs/stc-gbk/branches)-->
[![dependencies Status](https://david-dm.org/stcjs/stc-gbk/status.svg)](https://david-dm.org/stcjs/stc-gbk)
[![devDependencies Status](https://david-dm.org/stcjs/stc-gbk/dev-status.svg)](https://david-dm.org/stcjs/stc-gbk?type=dev)
<!--[![NPM version](https://img.shields.io/npm/v/stc-helper.svg?style=flat-square)](http://badge.fury.io/js/stc-helper)-->
<!--[![Coverage Status](https://coveralls.io/repos/github/stcjs/stc-helper/badge.svg?branch=master&v=1)](https://coveralls.io/github/stcjs/stc-helper?branch=master)-->
<!--[![codecov](https://codecov.io/gh/stcjs/stc-gbk/branch/master/graph/badge.svg)](https://codecov.io/gh/stcjs/stc-gbk)-->

## Install

```sh
npm install stc-gbk
```

## How to use

```
const gbk = require('stc-gbk')

stc.workflow({
  gbk2utf8: {plugin: gbk, include: {type: 'tpl'}, options: {cov: 'start'}},
  // ...
  // all other work
  // ...
  gbkReback: {plugin: gbk, include: {type: 'tpl'}, options: {cov: 'end'}}
});

```
