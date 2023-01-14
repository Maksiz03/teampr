var count =0;
function closeModal(){
  var modal = document.getElementById('help1-5');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help1-4');
  modal2.classList.add("hidden")
  var modal3 = document.getElementById('help1-3');
  modal3.classList.add("hidden")
  var modal4 = document.getElementById('help1-2');
  modal4.classList.add("hidden")
  var modal5 = document.getElementById('help1');
  modal5.classList.add("hidden")
}

function shwoModal(){
  var modal = document.getElementById('help1-2');
  modal.classList.remove("hidden")
  var modal2 = document.getElementById('help1');
  modal2.classList.add("hidden")

}
function shwoModal2(){
  var modal = document.getElementById('help1-3');
  modal.classList.remove("hidden")
  var modal2 = document.getElementById('help1-2');
  modal2.classList.add("hidden")
  window.scroll(0, -500);
}
function shwoModal3(){
  var modal = document.getElementById('help1-4');
  modal.classList.remove("hidden")
  var modal2 = document.getElementById('help1-3');
  modal2.classList.add("hidden")
}
function shwoModal4(){
  var modal = document.getElementById('help1-5');
  modal.classList.remove("hidden")
  var modal2 = document.getElementById('help1-4');
  modal2.classList.add("hidden")
  window.scroll(0, 600);
  count+=1;
}
function onload() {
    if(localStorage.test==2){       //поменять на != чтобы не всплывала подсказка
    var modal = document.getElementById('help1');
    modal.classList.remove("hidden")
    localStorage.setItem('test', 2);
    
    }
};



// var modal = document.getElementById('help1'); // только для первого 
window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    closeModal()
  }
  if (event.target.classList.contains("modal1")) {
    closeModal1()
  }
  if (event.target.classList.contains("modal2")) {
    closeModal2()
  }
  if (event.target.classList.contains("modal3")) {
    closeModal3()
  }
  if (event.target.classList.contains("modal4")) {
    closeModal4()
  }
  if (event.target.classList.contains("cv-day")) {
    shwoModalTime()
  }
  if (event.target.classList.contains("modal5")) {
    closeModalTime()
  }
  if (event.target.classList.contains("modal6")) {
    closeModalDis()
  }
  if (event.target.classList.contains("modal7")) {
    closeModalmark()
  }
  if (event.target.classList.contains("modal8")) {
    closeModalres()
  }
  if (event.target.classList.contains("modal9")) {
    closeModalcalc()
  }
}

function shwoModal1Task(){
  var modal = document.getElementById('help2-1-task');
  modal.classList.remove("hidden")
  var modal2 = document.getElementById('help1-1-task');
  modal2.classList.add("hidden")
}


function closeModal1(){
  var modal = document.getElementById('help1-1-task');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help2-1-task');
  modal2.classList.add("hidden")
  var modal3 = document.getElementById('help3-1-task');
  modal3.classList.add("hidden")
  

}
function shwoModal2Task(){
  var modal = document.getElementById('help2-1-task');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help3-1-task');
  modal2.classList.remove("hidden")

}

function closeModal2(){
  var modal = document.getElementById('help1-1-team');
  modal.classList.add("hidden")

}
function closeModal3(){
  var modal = document.getElementById('help1-1-lenta');
  modal.classList.add("hidden")
}
function closeModal4(){
  var modal = document.getElementById('help1-1-doc');
  modal.classList.add("hidden")
  var modal1 = document.getElementById('help2-1-doc');
  modal1.classList.add("hidden")
}
function shwoModal1Doc(){
  var modal = document.getElementById('help1-1-doc');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help2-1-doc');
  modal2.classList.remove("hidden")

}

function closeModalTime(){
  var modal = document.getElementById('help1-1-time');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help2-1-time');
  modal2.classList.add("hidden")
  var modal3 = document.getElementById('help3-1-time');
  modal3.classList.add("hidden")
}
function closeModalTime2(){
  var modal = document.getElementById('help3-1-time');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help1-1-time');
  modal2.classList.add("hidden")

}

function shwoModalTime(){
  var modal = document.getElementById('help1-1-time');
  modal.classList.remove("hidden")
}

function shwoModal1Time(){
  var modal = document.getElementById('help2-1-time');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help3-1-time');
  modal2.classList.remove("hidden")
  var modal3 = document.getElementById('help1-1-time');
  modal3.classList.remove("hidden")
}

function shwoModal1Dis(){
  var modal = document.getElementById('help1-1-dis');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help2-1-dis');
  modal2.classList.remove("hidden")

}
function closeModalDis(){
  var modal = document.getElementById('help1-1-dis');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help2-1-dis');
  modal2.classList.add("hidden")
}


function shwoModal1mark(){
  var modal = document.getElementById('help1-1-mark');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help2-1-mark');
  modal2.classList.remove("hidden")

}
function shwoModal2mark(){
  var modal = document.getElementById('help2-1-mark');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help3-1-mark');
  modal2.classList.remove("hidden")

}

function closeModalmark(){
  var modal = document.getElementById('help1-1-mark');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help2-1-mark');
  modal2.classList.add("hidden")
  var modal3 = document.getElementById('help3-1-mark');
  modal3.classList.add("hidden")
}

function shwoModal1res(){
  var modal = document.getElementById('help1-1-res');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help2-1-res');
  modal2.classList.remove("hidden")
}
function shwoModal2res(){
  var modal = document.getElementById('help2-1-res');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help3-1-res');
  modal2.classList.remove("hidden")
}
function shwoModal3res(){
  var modal = document.getElementById('help3-1-res');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help4-1-res');
  modal2.classList.remove("hidden")
}
function shwoModal4res(){
  var modal = document.getElementById('help4-1-res');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help5-1-res');
  modal2.classList.remove("hidden")
}
function closeModalres(){
  var modal = document.getElementById('help1-1-res');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help2-1-res');
  modal2.classList.add("hidden")
  var modal3 = document.getElementById('help3-1-res');
  modal3.classList.add("hidden")
  var modal4 = document.getElementById('help4-1-res');
  modal4.classList.add("hidden")
  var modal5 = document.getElementById('help5-1-res');
  modal5.classList.add("hidden")
}





function closeModalcalc(){
  var modal = document.getElementById('help1-1-calc');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help2-1-calc');
  modal2.classList.add("hidden")
  var modal3 = document.getElementById('help3-1-calc');
  modal3.classList.add("hidden")
  var modal4 = document.getElementById('help4-1-calc');
  modal4.classList.add("hidden")
  var modal5 = document.getElementById('help5-1-calc');
  modal5.classList.add("hidden")
  var modal6 = document.getElementById('help6-1-calc');
  modal6.classList.add("hidden")
  var modal7 = document.getElementById('help7-1-calc');
  modal7.classList.add("hidden")
  var modal8 = document.getElementById('help8-1-calc');
  modal8.classList.add("hidden")
  var modal9 = document.getElementById('help9-1-calc');
  modal9.classList.add("hidden")
}

function closeModalcalc1(){
  var modal = document.getElementById('help1-1-calc');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help2-1-calc');
  modal2.classList.remove("hidden")
}

function closeModalcalc2(){
  var modal = document.getElementById('help2-1-calc');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help3-1-calc');
  modal2.classList.remove("hidden")
}
function closeModalcalc3(){
  var modal = document.getElementById('help3-1-calc');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help4-1-calc');
  modal2.classList.remove("hidden")
}
function closeModalcalc4(){
  var modal = document.getElementById('help4-1-calc');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help5-1-calc');
  modal2.classList.remove("hidden")
}
function closeModalcalc5(){
  var modal = document.getElementById('help5-1-calc');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help6-1-calc');
  modal2.classList.remove("hidden")
}
function closeModalcalc6(){
  var modal = document.getElementById('help6-1-calc');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help7-1-calc');
  modal2.classList.remove("hidden")
}
function closeModalcalc7(){
  var modal = document.getElementById('help7-1-calc');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help8-1-calc');
  modal2.classList.remove("hidden")
}
function closeModalcalc8(){
  var modal = document.getElementById('help8-1-calc');
  modal.classList.add("hidden")
  var modal2 = document.getElementById('help9-1-calc');
  modal2.classList.remove("hidden")
}