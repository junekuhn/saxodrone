// import choo's template helper
var html = require("choo/html");
var Hydra = require('./hydra-canvas.js')
var header = require('./header');

module.exports = function(state, emit) {
   return html`
   <div>
      ${header()}
      <div>
         ${state.cache(Hydra, 'my-hydra').render()}
      </div>
      <footer>

      </footer>
   </div>
      `

   };