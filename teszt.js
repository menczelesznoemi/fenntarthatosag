
function $(elem) {
  return document.querySelectorAll(elem)
}
function ID(elem) {
  return document.getElementById(elem);
}
const gomb = document.getElementById('kovetkezo')

function init(tipus) {
    quiz="teszt.json";
    const adat="kerdesek";
    adatbeolvasas(quiz, tipus);
}

function kerdesvalogatas(){
    
    var e = document.getElementById("kerdes_tipus");
    var tipus = e.value;
    console.log("tipus: " + tipus);
    init(tipus);
}

function kiertekel(){
    var pont = 0;
    helyesValaszok = document.getElementsByClassName("helyesv");
    for (var i = 0; i < helyesValaszok.length; ++i) {
        var item = helyesValaszok[i];  
        console.log(item);
        if(item.checked){
            pont++;
        }
    }
    console.log("pontszam: " + pont);

    eredm = document.getElementById("eredm");
    eredm.innerHTML = "Végeredmény: " + pont + " pont";
}

function adatbeolvasas(quiz, tipus) {
  fetch(quiz)
    .then((response) => response.json())
    .then((data) => {
      feldolgoz(data.kerdesek, tipus)
    });
    
}
function feldolgoz(teszt, tipus) {
  console.log("feldolgoz running");
  var txt = ''
  var index = 0;
  teszt.forEach(function (kerdes) {
    var radioCsoport = "csoport";
    txt += '<ul>';

    for (const key in kerdes) {
        if(tipus == kerdes["tipus"]){
          if(key == "kerdes"){
              txt += `<span class="kerdesSzoveg"> ${kerdes[key]}</span>`;
          }
          else if(key == "v1" || key == "v2" || key == "v3"){
              if(key == kerdes["helyesv"]){
                txt += `<li><input type="radio" class="helyesv" name="${radioCsoport + index}"><span> ${kerdes[key]}</span></input></li>`;
              }
              else{
                txt += `<li><input type="radio" name="${radioCsoport + index}"><span> ${kerdes[key]}</span></input></li>`;
              }
              
          }
        }
        
        
        
    }
    index++;
    txt += '</ul>';
  })



$('.json_content')[0].innerHTML = txt;
}

