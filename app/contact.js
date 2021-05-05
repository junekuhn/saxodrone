html = require("choo/html");
header = require("./header");

module.exports = function(state, emit) {

  return html`
  <div>
      <form id="contact-form" action="/contact">
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
        <button id="contact-button" onclick=${ () => emit('submitform')} type="button" name="contact-button">Submit</button>
        
      </form>
  </div>
  `
}