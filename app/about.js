html = require("choo/html")

module.exports = function (state, emit) {
   emit('DOMTitleChange', 'Saxodrone | About')
   
   return html`
      <div>
      <section>
         <h1>About</h1>
         <p>It's really about the journey. Sound transports the mind to a place where it had never been before. From myself as the performer, to you, the listener, the connection music creates is not one that can be easily broken.</p>
         <br>
         <p>The saxophone, like any wind instrument, is controlled by the breath.  And with digital effects that breath comes to life. </p>
      </section>
      </div>`
}