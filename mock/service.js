const app = require('koa')()
const router = require('koa-router')()
const koaBody = require('koa-body')()

router.get('/api', function *(next) {
  this.body = 'test data'
})
router.get('/api/getHotSearch', function *(next) {
  this.body = require('./hotSearch.json')
})
router.get('/api/getBanner', function *(next) {
  this.body = require('./banner.json')
})
router.get('/api/getLive', function *(next) {
  this.body = require('./tv.json')
})
router.get('/api/getFree', function *(next) {
  this.body = require('./free.json')
})
router.get('/api/getBookRadio', function *(next) {
  this.body = require('./tingshu.json')
})

router.post('/api/post', koaBody, function *(next) {
  this.body = JSON.stringify(this.request.body)
})

app.use(router.routes()).use(router.allowedMethods())
console.log('listen on http://localhost:3000')

app.listen(3000)
