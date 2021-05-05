html = require('choo/html');

module.exports = function (state, emit) {
   return html`
      <header>
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