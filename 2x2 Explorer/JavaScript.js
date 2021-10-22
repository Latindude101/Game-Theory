/*
function mixedNash() {
  console.log("happy")
  var a = document.getElementById("TL1").valueAsNumber
  var b = document.getElementById("BL1").valueAsNumber
  var c = document.getElementById("TR1").valueAsNumber
  var d = document.getElementById("BR1").valueAsNumber
  console.log(a)
  console.log(b)
  console.log(c)
  var alpha = document.getElementById("TL2").value
  var beta = document.getElementById("BL2").value
  var gamma = document.getElementById("TR2").value
  var delta = document.getElementById("BR2").value
  
  var pprobability = (d - c)/(a - b - c + d)
  console.log(pprobability)
} */
/*
function pureNash() {

  var a = document.getElementById("TL1").value;
  var b = document.getElementById("TR1").value;
  var c = document.getElementById("BL1").value;
  var d = document.getElementById("BR1").value;
  var alpha = document.getElementById("TL2").value;
  var beta = document.getElementById("BL2").value;
  var gamma = document.getElementById("TR2").value;
  var delta = document.getElementById("BR2").value;  
  if (((a >= b) && (c > d)) || ((a > b) && (c >= d))){
      console.log("Dominant");
  }
  if {
      console.log("Dominant");
  } 
}
*/
 
document.getElementById("mixedNash").onclick = function(){
  var a = document.getElementById("TL1").valueAsNumber
  var b = document.getElementById("BL1").valueAsNumber
  var c = document.getElementById("TR1").valueAsNumber
  var d = document.getElementById("BR1").valueAsNumber

  var alpha = document.getElementById("TL2").valueAsNumber
  var beta = document.getElementById("BL2").valueAsNumber
  var gamma = document.getElementById("TR2").valueAsNumber
  var delta = document.getElementById("BR2").valueAsNumber

  var pprobability = (d - c)/(a - b - c + d)
  var qprobability = (delta - beta)/(alpha + delta - beta - gamma)
  console.log(qprobability)
  console.log(pprobability)
  /* Change to switch statement */
  if (pprobability <= 0){
      document.getElementById("pprop").innerText = 0
  }
  else if (pprobability >= 1){
      document.getElementById("pprop").innerText = 1
  }
 /* else if (pprobability == Infinity){
      document.getElementById("pprop").innerText = 1
  } */
  else {
      document.getElementById("pprop").innerText = pprobability
  }
    if (qprobability <= 0){
      document.getElementById("qprop").innerText = 0
  }
  else if (qprobability >= 1){
      document.getElementById("qprop").innerText = 1
  }
/*  else if (qprobability == Infinity){
      document.getElementById("qprop").innerText = 1
  } */
  else {
      document.getElementById("qprop").innerText = qprobability
  }
  
  //Calculate payoffs
  var pP = pprobability
  var qP = qprobability
  var colPay = (pP * qP * alpha) + ((qP - (pP * qP)) * gamma) + ((pP - (pP * qP)) * beta) + ((1 + (pP * qP) - qP - pP) * delta)
  console.log('Probabilities')
  console.log(pP)
  console.log(qP)
  console.log((pP * qP * alpha))
  console.log( ((qP - (pP * qP)) * gamma))
  console.log(((pP - (pP * qP)) * beta))
  console.log(((1 + (pP * qP) - qP - pP) * delta))
  var rowPay = (pP * qP * a) + ((qP - (pP * qP)) * c) + ((pP - (pP * qP)) * b) + ((1 + (pP * qP) - qP - pP) * d)
  document.getElementById("columnPayoff").innerText = colPay
  document.getElementById("rowPayoff").innerText = rowPay
  
  /* dealing with Prisoner's Dilemma Payoffs */
  if (pP == Infinity){
    document.getElementById("rowPayoff").innerText = (qP * alpha) + ((1 - qP) * beta)
  }
  if (pP == -Infinity){
    document.getElementById("rowPayoff").innerText = (qP * gamma) + ((1 - qP) * delta)
  }
  if (qP == Infinity){
    document.getElementById("columnPayoff").innerText = (pP * gamma) + ((1 - pP) * delta)
  }
  if (qP == -Infinity){
    document.getElementById("columnPayoff").innerText = (pP * gamma) + ((1 - pP) * delta)
  }
};

document.getElementById("BoS").onclick = function(){
  document.getElementById("TL1").value = 2
  document.getElementById("BL1").value = 0
  document.getElementById("TR1").value = 0
  document.getElementById("BR1").value = 1
  document.getElementById("TL2").value = 1
  document.getElementById("BL2").value = 0
  document.getElementById("TR2").value = 0
  document.getElementById("BR2").value = 2
};

document.getElementById("stagHunt").onclick = function(){
  document.getElementById("TL1").value = 2,
  document.getElementById("BL1").value = 1,
  document.getElementById("TR1").value = 0,
  document.getElementById("BR1").value = 1,
  document.getElementById("TL2").value = 2,
  document.getElementById("BL2").value = 0,
  document.getElementById("TR2").value = 1,
  document.getElementById("BR2").value = 1
};

document.getElementById("prisonersDilemma").onclick = function(){
  document.getElementById("TL1").value = 2,
  document.getElementById("BL1").value = 3,
  document.getElementById("TR1").value = 0,
  document.getElementById("BR1").value = 1,
  document.getElementById("TL2").value = 2,
  document.getElementById("BL2").value = 0,
  document.getElementById("TR2").value = 3,
  document.getElementById("BR2").value = 1
};

document.getElementById("matchingPennies").onclick = function(){
  document.getElementById("TL1").value = 1,
  document.getElementById("BL1").value = -1,
  document.getElementById("TR1").value = -1,
  document.getElementById("BR1").value = 1,
  document.getElementById("TL2").value = -1,
  document.getElementById("BL2").value = 1,
  document.getElementById("TR2").value = 1,
  document.getElementById("BR2").value = -1
};

document.getElementById("hawkDove").onclick = function(){
  document.getElementById("TL1").value = -2,
  document.getElementById("BL1").value = 0,
  document.getElementById("TR1").value = 4,
  document.getElementById("BR1").value = 2,
  document.getElementById("TL2").value = -2,
  document.getElementById("BL2").value = 4,
  document.getElementById("TR2").value = 0,
  document.getElementById("BR2").value = 2
};
