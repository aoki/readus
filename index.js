function switchTheme(cssFile) {
    document.getElementById('pagestyle').setAttribute('href', 'themes/'+cssFile);
}

(() => {
  const fs = require('fs');
  const cssparser = require('cssparser');
  const parser = new cssparser.Parser();
  fs.readFile('themes/dark.css', 'utf8', (err, data) => {
    console.log(data);
    const css = parser.parse(data);
    const body = css.rulelist.filter((e) => { if (e.selector === 'body') return true; })[0];
    console.dir(body);
    console.log(body.declarations['background-color']);
    console.log(body.declarations.color);
  });
  console.log('foo');

})();

(() => {
  Array.apply(null, document.querySelectorAll('.timeline>li>a')).foreach((e) => {
    e.addEventListener("mouseleave", function( event ) {
    // highlight the mouseleave target
    event.target.style.color = "purple";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
  });
})();
