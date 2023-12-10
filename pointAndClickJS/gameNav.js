/* Trying to think of the simplest way you could do this without getting too complex but also, allows you to build out the gameplay
-- store everything in an array of objects: */

// each room name will correspond to a clickable area id

const gamePlay = [
  {
    room: "gate",
    html: `<img src="/pointAndClickImg/Gate.jpg" usemap="#image_map">
            <map name="image_map">
                <area id="entrance" class="game-nav" alt="gate" title="gate"
                coords="0,0,614,752" shape="rect">
            </map>`,
    actions: ["open"], // different options for this section, but you could store what happens when user interacts with
    // each room, maybe an array of objects ex [{open: "message to show user", travelTo: "Dungeon"}]
    initialMsg: "Welcome the ... adventure game", // set message area initially and change based on acitons maybe
  },
  {
    room: "entrance",
    html: `<img src="/pointAndClickImg/Entrance.jpg" usemap="#image_map">
            <map name="image_map">
                <area id="mainHall" class="game-nav" alt="gate" title="gate"
                coords="0,0,614,752" shape="rect">
            </map>`,
    actions: ["open"], // different options for this section, but you could store what happens when user interacts with
    // each room, maybe an array of objects ex [{open: "message to show user", travelTo: "Dungeon"}]
    initialMsg: "Welcome the main hall", // set message area initially and change based on acitons maybe
  },
];

export default gamePlay;
