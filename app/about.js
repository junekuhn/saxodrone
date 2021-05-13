html = require("choo/html")

module.exports = function (state, emit) {
   emit('DOMTitleChange', 'Saxodrone | About')
   
   return html`
      <div>
      <section class="about">
         <h1>ABOUT</h1>
         <!-- <img src="assets/closeup.png" alt="close-up on Cannonball tenor sax"> -->
         <p>This is the music that I play on a calm, Sunday afternoon, outside on my deck. The wind's blowing faintly, and every note echos between the trees. It's the music where I lose myself on a Wednesday evening, when no one's home and I can crank my Peavey to a deafening level. Drone loops have a spriritual pull for me, one that draws me and holds my attention until I awake.</p>
         <br>
         <p>The saxophone, like any wind instrument, is controlled by the breath.  I used to meditate all the time, focusing on my breath to center my attention from stress, anxiety, and frustration.  Playing Saxodrone feels similar, with every breath driving the flow of music.  </p>
      </section>
      </div>`
}