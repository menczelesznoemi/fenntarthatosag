window.addEventListener('load', init)
function $(elem) {
  return document.querySelectorAll(elem)
}
function ID(elem) {
  return document.getElementById(elem);
}
function CLASS(elem) {
  return document.getElementsByClassName(elem);
}

function init() {
  fetch("kerdes.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.kerdesek)
      feldolgoz(data.kerdesek)
    })
}

function feldolgoz(kerdesek) {
  var txt = ''
  kerdesek.forEach(function (kerdes) {

    txt += '<ul>'
    for (const key in kerdes) {
      txt += `<li><span>${key}:</span><span> ${kerdes[key]}</span></li>`

    }

    txt += '</ul>'
  })

}