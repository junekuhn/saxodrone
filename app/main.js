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
   <div id="wrapper">
      <div id="main">
      ${header(state, emit)}
      <div>
         ${state.cache(Hydra, 'my-hydra').render()}
      </div>
      ${contentMap()}
      </div>
      <div style="display:block;"></div>
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
         ${state.splash ? splash(state, emit) : noSplash(state, emit)}
   `
}

const splash = function (state, emit) {

   return html`
   <div id="splash-container" class=${state.fadeOut}>
      <div id="play-container">
         <button id="play" class="linktree" onclick=${() => emit("play")}>Enter (Play Audio)</button>
          <button id="skip" class="linktree" onclick=${() => emit("skip")}>Skip To Home</button>
          <button class="linktree"><a href="https://saxodrone.bandcamp.com/album/live-at-spanners-bit-crush-3">Live Recording (Bandcamp)</a></button>
          <button class="linktree"><a href="https://instagram.com/saxodr.one">Instagram</a></button>
          <button class="linktree"><a href="https://www.youtube.com/watch?v=R8YnwFOsjxg">Live Video</a></button>
      </div>
   </div>
   `
}

const noSplash = function (state, emit) {

   return html`
   <div id="home-container" >
      <div class="content-container">
         <h1>SAXODRONE</h1>
         <img id="horn" src="/assets/DSC00038.png">
         <h3>
         Based in London, UK
         </h3>
      </div>
   </div>
   `;
};
