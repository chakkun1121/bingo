const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/bingo" : "",
})