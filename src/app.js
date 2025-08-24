import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'Milhouse', 'Aliens'];
  let action = ['ate', 'peed', 'crushed', 'broke', 'hidden', 'stole', 'disintegrated'];
  let what = ['my homework', 'my phone', 'the car', 'my last pencil', 'my router', 'my laptop charger'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying', 'when I was in the loo'];
  
  function getRandomIx (array){
    return Math.floor(Math.random() * array.length);
  }

  let randomWho = who [getRandomIx(who)];
  let randomAction = action [getRandomIx(action)];
  let randomWhat = what [getRandomIx(what)];
  let randomWhen = when [getRandomIx(when)];

  let excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + ".";

  const excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = excuse;
  
  console.log(excuse)
};

