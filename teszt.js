window.addEventListener('load', init)
function $(elem) {
  return document.querySelectorAll(elem)
}
function ID(elem) {
  return document.getElementById(elem);
}

function init() {
  fetch("teszt.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.teszt)
      feldolgoz(data.teszt)
    })
}

function feldolgoz(teszt) {
  var txt = ''
  teszt.forEach(function (kerdes) {

    txt += '<ul>'
    for (const key in kerdes) {
      txt += `<li><span>${key}:</span><span> ${kerdes[key]}</span></li>`

    }

    txt += '</ul>'
  })

}