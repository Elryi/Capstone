// pointAndClickJS
import gameNav from "./gameNav.js";

// set initial scene to first scene of gameNav
let currentScene = "gate";
let currentSceneIndex = 0;

// load initial scene
document.querySelector(".main-frame").innerHTML = gameNav[0].html;
document.querySelector(".game-text").innerHTML = gameNav[0].initialMsg;

// add an event listener for game navigation clicks:
document
  .querySelector(".game-nav")
  .addEventListener("click", (e) => changeNav(e));

// this grabs the value of the id from each area clicked
function changeNav(e) {
  console.log("change scene");
  console.log(e.target.id);
  // update current scene with new value:
  currentScene = e.target.id;
  loadScene();
}

function loadScene() {
  // Think of how you can use the currentScene name as a way to find
  // the index of what you need to load next. once you have the correct index
  // you can set the values needed.

  // after doing the above you will need to add a new event listener for the game-nav
  // class since it is a new element rendered to the dom.
}

/* <img id="gate" src="/pointAndClickImg/Gate.jpg" usemap="#image_map">
                <!--map commented out so the function will work
            <map name="image_map">
                <area id="entrance" alt="gate" title="gate" href="/pointAndClickImg/Entrance.jpg"
                coords="42,16,614,752" shape="rect">
            </map>
        -->
        <img id="entrance" src="/pointAndClickImg/Entrance.jpg" onclick="">
        <img id="main-hall" src="/pointAndClickImg/Main Hall.jpg" onclick="">
        <img id="dungeon" src="/pointAndClickImg/Dungeon.jpg" onclick="">
        <img id="potions-room" src="/pointAndClickImg/Potions Room.jpg" onclick="">
        <img id="library" src="/pointAndClickImg/Library.jpg" onclick="">
        <img id="spell-tome" src="/pointAndClickImg/Spell tome.jpg" onclick=""></img> */

// export function changeThis() {
//   console.log(gameNav);
//   document.getElementById("gate").src = "/pointAndClickImg/Main Hall.jpg";
// }
// document.getElementById("gate").addEventListener("click", changeThis);

// Add this code to attach the click event listener

//Same thing as above + extra step?
/*
function gateToMainHall() {
    let gate = document.getElementById('gate');
    gate.src = "/pointAndClickImg/Main Hall.jpg";
}
*/

/* some ideas
switch (stage) {
    case 1:
      //clicking left goes to this area
      document.getElementById("this picture ID src")
      break;
    case 2:
      //clicking the stairs leads to this area
      document.getElementById("this picture ID src")
      break;
    case 3:
     // clicking right leads to this area
      document.getElementById("this picture ID src")
      break;
    default:
      break;
  }
  */

/* some more ideas...
  function changeLevel(imageID, imageMap, newLevel) {
    let stairsChoice = document.getElementById("upstairs-room");
    let leftChoice = document.getElementById("dungeon");
    let rightChoice = document.getElementById("potions-room")
    if ()
  }
  */
