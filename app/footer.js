html = require("choo/html")

module.exports = function (state, emit) {
   return html`
      <footer>
      hand-made with
      <a href="https://choo.io">choo, </a>
      <a href="https://ojack.xyz">hydra synth, </a>
      and a little bit of free jazz. Creative Commons 2021 <a href="https://justinkuhn.media">Justin Kuhn Media</a>, forkable on <a href="https://github.com/justinkuhn/saxodrone">Github.</a>
      </footer>
   `
}