window.addEventListener('load', init)
function $(elem) {
  return document.querySelectorAll(elem)
}
function ID(elem) {
  return document.getElementById(elem);
}
const gomb = document.getElementById('kovetkezo')

function init() {
    quiz="teszt.json";
    const adat="kerdesek";
    adatbeolvasas(quiz);
}



function adatbeolvasas(quiz, adat) {
  fetch(quiz)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.kerdesek)
      feldolgoz(data.kerdesek)
    });
    
}
function feldolgoz(teszt) {
  var txt = ''
  var index = 0;
  teszt.forEach(function (kerdes) {
    var radioCsoport = "csoport";
    txt += '<ul>';

    for (const key in kerdes) {
        if(key == "kerdes"){
            txt += `<span class="kerdesSzoveg"> ${kerdes[key]}</span>`;
        }
        else if(key == "v1" || key == "v2" || key == "v3"){
            txt += `<li><input type="radio" name="${radioCsoport + index}"><span> ${kerdes[key]}</span></input></li>`;
        }
        
        
    }
    index++;
    txt += '</ul>';
  })



$('.json_content')[0].innerHTML = txt;
}

