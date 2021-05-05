html = require("choo/html")

module.exports = function () {
   return html`
      <div>
      <section class="main-content">
         <h1>Previous Projects</h1>
         <p>In a previous life, I played in a jazz-metal band called Megachrome.</p>
         <iframe style="border: 0; width: 350px; height: 621px;" src="https://bandcamp.com/EmbeddedPlayer/album=516790313/size=large/bgcol=ffffff/linkcol=e99708/transparent=true/" seamless><a href="https://megachrome.bandcamp.com/album/brackish-ep">Brackish EP by Megachrome</a></iframe>
      </section>
      </div>`
}