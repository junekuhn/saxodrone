// import choo's template helper
var html = require("choo/html");
var Hydra = require('./hydra-canvas.js')
var header = require('./header');
var footer = require('./footer')
var about = require('./about');
var contact = require('./contact')
var watch = require('./watch')
var listen = require('./listen')
var fund = require('./fund')

module.exports = function (state, emit) {

   return html`
   <div>
      ${header()}
      <div>
         ${state.cache(Hydra, 'my-hydra').render()}
      </div>
      ${contentMap()}
      ${footer()}
   </div>
      `
   
   function contentMap() {
      switch (state.params.content) {
         case 'about':
            return about();
         case 'contact':
            return contact();
         case 'fund':
            return fund();
         case 'listen':
            return listen();
         case 'watch':
            return watch();
         case undefined:
            return home();
         default:
            console.log(state.params.content)
            return html`
               <h1>404 Error!!!!! oh  nooooo</h1>
            `;
      }
   }
};
   
const home = function (state, emit) {
   return html`
      <div>
         <h1>home page</h1>
      </div>
   `
}