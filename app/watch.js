html = require("choo/html")

module.exports = function (state, emit) {
      emit('DOMTitleChange', 'Saxodrone | Watch')
   return html`
      <div>
      <section class=main-content>
         <h1>Watch</h1>
         <div class="iframe-container">
            <iframe width="700" height="400" src="https://www.youtube.com/embed/R8YnwFOsjxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
      </section>
      </div>`
}