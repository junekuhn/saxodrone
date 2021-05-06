html = require("choo/html")

module.exports = function (state, emit) {
      emit('DOMTitleChange', 'Saxodrone | Watch')
   return html`
      <div>
      <section class=main-content>
         <h1>Watch</h1>
         <iframe width="907" height="510" src="https://www.youtube.com/embed/nz_wTz62b2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
      </div>`
}