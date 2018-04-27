"use strict";


let madLibrary = {
    pluralNoun1: "bears",
    adjective1: "pretty",
    noun: "street",
    typeOfFood: "mexican",
    articleOfClothing: "dickey",
    verbEndingIning: "wallowing",
    pluralNoun2: "trees",
    pluralNoun3: "lasers",
    numberVal: "113",
    celebrity: "Taylor Swift",
    color: "golden rod",
    verbEndingIning2: "licking",
    typeOfFood: "Italian sweets",
    pluralNoun: "concrete shoes",
    adjective2: "gloomy",
    adjective3: "claustrophobic"
 }


 if(!localStorage.getItem('madLibraryData')) {
  console.log("set data");
  populateStorage();
}else {
 getDb();
}


function populateStorage() {
 const dbObjToString = JSON.stringify(madLibrary);
 localStorage.setItem('madLibraryData', dbObjToString);
}


function getDb() {
 
  const db = localStorage.getItem('madLibraryData');
  const parseDB = JSON.parse(db);

  const unicorn = `Would it surprise you to learn that the most majestic ${parseDB.pluralNoun1} in the world eat garbage? Well, they do! Everything from ${parseDB.adjective1} soda cans to ${parseDB.noun}-stained ${parseDB.typeOfFood} boxes to used ${parseDB.articleOfClothing} - and more! Some have been spotted ${parseDB.verbEndingIning} dumpsters and then using their long ${parseDB.pluralNoun2} to spear as many bags of ${parseDB.pluralNoun3} as they can before being caught. According to an interview with the ${parseDB.numberVal} News, ${parseDB.celebrity} once came home to find a/an ${parseDB.color} unicorn ${parseDB.verbEndingIning2} up in the recycling bin. The poor thing had mistaken leftover ${parseDB.typeOfFood} for dried up ${parseDB.pluralNoun}. 'It was a ${parseDB.adjective2} mistake. I am a good cook!'`;

  document.getElementById("madlib").innerHTML = unicorn;
}
