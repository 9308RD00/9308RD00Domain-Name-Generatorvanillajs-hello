/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //3 differents array
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".org", ".net"];
  //assign an empty variable or equal to 0.
  let result = 0;

  //nested 3 for of loop inside of each other to go into each array and get an element and create different sentence.
  //assign each array to a variable inside the for of loop:

  for (let pro of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let dom of domain) {
          //adding all the new varaible names together with some space to create a sentence and assign it to a single variable name result.
          document.querySelector(
            "#domain"
          ).innerHTML += ` <h2> ${pro} ${a} ${n} ${dom} </h2> `;
        }
      }
    }
  }

  //connect js with html to print the names on the screen.
};
