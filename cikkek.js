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
  
  fetch("cikkek.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.cikkek)
      feldolgoz2(data.cikkek)
    });
}

function feldolgoz2(cikkek) {
  var txt2 = ''
  cikkek.forEach(function (cikk, index) {

    txt2 += '<ul>'
    for (const key in cikk) {
	console.log(key, ":", cikk[key]);
      txt2 += `<li><span>${key}:</span><span> ${cikk[key]}</span></li>`;
    }

    txt2 += '</ul>';
  });

  console.log(txt2);
  CLASS('cikkek')[0].innerHTML = txt2;

} 