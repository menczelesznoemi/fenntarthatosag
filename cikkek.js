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
  var txt2 = '';
  var txt = '';
  
  cikkek.forEach(function (cikk) {

    
    for (const key in cikk) {
      if(key.includes("cikkcim") || key.includes("cim")){
      
        console.log(key, ":", cikk[key]);
      
      txt2 += `<h1><span> ${cikk[key]}</span></h1>`;
    }
    else if(key.includes("bekezdes") || key.includes("pelda")){
      txt2 += `<p><span> ${cikk[key]}</span></p>`;
    }
    else if(key.includes("kep")){
      txt += `<img src="${cikk[key]}"><img>`;
    }
    }

    
    
  });

  console.log(txt2);
  console.log(txt);
  CLASS('cikkek')[0].innerHTML = txt2;
  CLASS('kepek')[0].innerHTML = txt;
} 