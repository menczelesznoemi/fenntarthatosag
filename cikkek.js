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
  
  valasztas();
}

function valasztas(event) {
  ID("cikk1").onclick = function () {
      console.log("katt");
      beolvaso("cikk1");

  };

  ID("cikk2").onclick = function () { 
      console.log("katt");
      beolvaso("cikk2");
  }
  ID("cikk3").onclick = function () {
      console.log("katt");
      beolvaso("cikk3");
  }

}

function beolvaso(key) {

  
  fetch("cikkek.json")
      .then((response) => response.json())
      .then((data) => {

          cikkek = data[key];
          feldolgoz(data[key]);

      });

}

function feldolgoz(cikkek) {
  
  var txt = '';
  
  cikkek.forEach(function (cikk) {

    
    for (const key in cikk) {
      if(key.includes("cikkcim") || key.includes("cim")){
      
        console.log(key, ":", cikk[key]);
      
      txt += `<h1><span> ${cikk[key]}</span></h1>`;
    }
    else if(key.includes("bekezdes") || key.includes("pelda") || key.includes("szerzo")){
      txt += `<p><span> ${cikk[key]}</span></p>`;
    }
    
    }

    
    
  });

  

  
  console.log(txt);
  CLASS('cikkek')[0].innerHTML = txt;
} 



