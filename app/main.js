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
      ${header(state, emit)}
      <div>
         ${state.cache(Hydra, 'my-hydra').render()}
      </div>
      ${contentMap()}
      ${footer(state, emit)}
   </div>
      `

      
   
   
   function contentMap() {
      switch (state.params.wildcard) {
         case 'about':
            return about(state, emit);
         case 'contact':
            return contact(state, emit);
         case 'fund':
            return fund(state, emit);
         case 'listen':
            return listen(state, emit);
         case 'watch':
            return watch(state, emit);
         case undefined:
            return home(state, emit);
         default:
            console.log(state.params.content)
            return html`
               <h1>404 Error!!!!! oh  nooooo</h1>
            `;
      }
   }
};
   
const home = function (state, emit) {
   emit('DOMTitleChange', 'Saxodrone')

   return html`
      <div>
         ${state.splash ? splash(state, emit) : noSplash(state, emit)}
      </div>
   `
}

const splash = function (state, emit) {

   return html`
   <div style="width: 100%; height: 25%"></div>
   <button onclick=${() => emit("play")}>Play</button>
   <img id="saxBell" src="assets/bell.png" alt="brown tenor saxophone">
   <button onclick=${() => emit("skip")}>Skip</button>
   <div style="width: 100%; height: 25%"></div>
   `
}

const noSplash = function (state, emit) {

   return html`
    <h1>home page</h1>
   `;
};