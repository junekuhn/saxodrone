html = require('choo/html');
raw = require('nanohtml/raw')

module.exports = function (state, emit) {
   var splash;
   
   if (state.route == "/" && state.splash) {
      splash = "none";
   } else {
      splash = "block";
   }

   const toggleMenu = function () {
      let myNav = document.getElementById("myNav")
      myNav.style.height = "100%";
      myNav.style.width = "100%";
   }

   const closeNav = function () {
       document.getElementById("myNav").style.height = "0%";
   }
   
   return html`
      <header style="display: ${splash}">
         <nav>
            <a href="/">Home</a>
                        <!-- hamburger menu -->
            <a href="javascript:void(0);" class="icon" onclick=${() => toggleMenu()}>
               <i class="fa fa-bars"></i>
            </a>
            <div id="myNav" class="overlay">
               <!-- close button -->
               <a href="javascript:void(0)" class="closebtn" onclick=${() => closeNav()}>x</a>
               <div class="overlay-content">
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/contact">Contact</a>
                  <a href="/listen">Listen</a>
                  <a href="/watch">Watch</a>
                  <a id="fund" href="https://www.buymeacoffee.com/justinkuhn" target="_blank">${raw('Fund -&gt;')}</a>
               </div>
               
            </div>

         </nav>
      </header>
   `;


}
