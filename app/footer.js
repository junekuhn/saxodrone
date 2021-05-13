html = require("choo/html")

module.exports = function (state, emit) {

   var splash;
   if (state.route == "/" && state.splash) {
      splash = "none";
   } else {
      splash = "block";
   }
   
   return html`
      <footer style="display: ${splash}">
      hand-made with
      <a href="https://choo.io">choo, </a>
      <a href="https://hydra.ojack.xyz">hydra synth, </a>
      and a little bit of free jazz. Creative Commons 2021 <a href="https://justinkuhn.media">Justin Kuhn Media</a>, forkable on <a href="https://github.com/justinkuhn/saxodrone">Github.</a>
      </footer>
   `
}