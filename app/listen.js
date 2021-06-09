html = require("choo/html")

module.exports = function (state, emit) {
      emit('DOMTitleChange', 'Saxodrone | Listen')
   return html`
      <div>
      <section class="main-content">
         <div>
            <h1>Bandcamp Demos</h1>
            <div>
               <iframe scrolling="no" style="border: 0;width: 100%;height: 50px;" src="https://bandcamp.com/band_follow_button_deluxe/377006614"></iframe>
            </div>
            <div class="iframe-container">
               <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=346736679/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://saxodrone.bandcamp.com/album/demonstrations">Demonstrations by saxodrone</a></iframe>
            
            </div>
         </div>
         <div>
            <h1>Previous Projects</h1>
            <p>In a previous life, I played in a jazz-metal band called Megachrome.</p>
            <div class="iframe-container">
               <iframe style="border: 0; width: 350px; height: 621px;" src="https://bandcamp.com/EmbeddedPlayer/album=516790313/size=large/bgcol=ffffff/linkcol=e99708/transparent=true/" seamless><a href="https://megachrome.bandcamp.com/album/brackish-ep">Brackish EP by Megachrome</a></iframe>
            </div>
         </div>
      </section>
      </div>`
}