html = require("choo/html");
header = require("./header");

module.exports = function (state, emit) {
     emit('DOMTitleChange', 'Saxodrone | Contact')

  return html`
  <div>
      <form id="contact-form" action="https://formspree.io/f/xqkwendw" method="POST">
        <label for="yourname">
          Your Name
        </label>
        <input id="yourname" name="yourname"
          type="text"
          required
          pattern=".{1,64}"
          title="Must be between 1 and 64 characters long."
        >
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" cols="20" placeholder="" required>What's Up?</textarea>
        <button id="contact-button" type="submit" name="contact-button">Submit</button>
        
      </form>
  </div>
  `

  
  function onsubmit (e) {                                               // 1.
    e.preventDefault()
    var form = e.currentTarget
    var data = new FormData(form)                                       // 2.
    var headers = new Headers({ 'Content-Type': 'application/json' })   // 3.
    var body = {}
    for (var pair of data.entries()) body[pair[0]] = pair[1]            // 4.
    body = JSON.stringify(body)                                         // 5.
    fetch('/form/receiver', { method: 'POST', body, headers })              // 6.
      .then(res => {
        if (!res.ok) return console.log('oh no!')
        console.log('request ok \o/')
      })
      .catch(err => console.log('oh no!'))
  }
}
