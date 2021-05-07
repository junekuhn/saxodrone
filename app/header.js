html = require('choo/html');

module.exports = function (state, emit) {
   var splash;
   if (state.route == "/" && state.splash) {
      splash = "none";
   } else {
      splash = "block";
   }
   
   return html`
      <header style="display: ${splash}">
         <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/listen">Listen</a>
            <a href="/watch">Watch</a>
            <a href="/fund">Fund</a>
         </nav>
      </header>
   `;
}