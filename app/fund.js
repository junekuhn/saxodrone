html = require("choo/html")

module.exports = function (state, emit) {
      emit('DOMTitleChange', 'Saxodrone | Fund')
   return html`
      <div>
         <h1>FUND</h1>
         <section>
            <h2>What's in the works?</h2>
         </section>
         <section>
            <h2>Contribution Rewards</h2>
         </section>
         <section>
            <h2>Contribute</h2>
            <a href="https://www.buymeacoffee.com/justinkuhn">Buy Me a Coffee</a>
         </section>
         <section>
            <h2>Feedback</h2>
         </section>
      </div>`
}