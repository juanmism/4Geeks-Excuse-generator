let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = () => {
  let quien = who[Math.floor(Math.random() * who.length)];
  let que = what[Math.floor(Math.random() * what.length)];
  let cuando = when[Math.floor(Math.random() * when.length)];

  let mensaje = quien + " " + que + " " + cuando;
  document.querySelector("#excuse").innerHTML = mensaje;
};
