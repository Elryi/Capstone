const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const roomMessage = document.getElementById("room-message");
const backButton = document.getElementById("back-button");
const visitedRooms = ["room1"];
//To do list: turn rooms into json
const rooms = {
  room1: {
    backgroundImage: "/pointAndClickImg/gatePixel.png",
    doors: [
      {
        originalX: 650,
        x: 650,
        originalY: 520,
        y: 520,
        originalWidth: 600,
        width: 600,
        originalHeight: 400,
        height: 400,
        target: "room2",  
      },
    ],
    items: [
      {
        //itemImageOne: "/pointAndClickImg/keyPixel.png",
        // itemImageTwo: "/pointAndClickImg/keyPixel.png",
        // itemImageThree: "/pointAndClickImg/keyPixel.png",
      },
    ],
    areas: [
      {
        name: "box1",
        originalX: 500,
        x: 500,
        originalY: 100,
        y: 100,
        originalWidth: 200,
        width: 200,
        originalHeight: 400,
        height: 400,
        message: "A scary green box",
      },
    ],
    message: "You stand before a gate",
  },
  room2: {
    backgroundImage: "/pointAndClickImg/frontDoorPixel.png",
    doors: [
      {
        originalX: 500,
        x: 500,
        originalY: 100,
        y: 100,
        originalWidth: 800,
        width: 800,
        originalHeight: 850,
        height: 850,
        target: "room3",
      },
    ],
    areas: [
      {
        name: "box2",
        originalX: 500,
        x: 500,
        originalY: 300,
        y: 300,
        originalWidth: 100,
        width: 100,
        originalHeight: 100,
        height: 100,
        message: "",
      },
    ],
    message: "You stand before a door entering the castle.",
  },
  room3: {
    backgroundImage: "/pointAndClickImg/mainHallPixel.png",
    doors: [
      {
        originalX: 150,
        x: 150,
        originalY: 620,
        y: 620,
        originalWidth: 236,
        width: 236,
        originalHeight: 375,
        height: 375,
        target: "room4",
      },
      {
        originalX: 900,
        x: 900,
        originalY: 440,
        y: 440,
        originalWidth: 230,
        width: 230,
        originalHeight: 170,
        height: 170,
        target: "room6",
      },
      {
        originalX: 1600,
        x: 1600,
        originalY: 670,
        y: 670,
        originalWidth: 210,
        width: 210,
        originalHeight: 355,
        height: 335,
        target: "room5",
      },
    ],
    areas: [
      {
        name: "box3",
        originalX: 500,
        x: 500,
        originalY: 300,
        y: 300,
        originalWidth: 100,
        width: 100,
        originalHeight: 100,
        height: 100,
        message: "",
      },
    ],
    message: "You are a main hall.",
  },
  room4: {
    backgroundImage: "/pointAndClickImg/dungeonRoomPixel.png",
    doors: [
      {
        originalX: 500,
        x: 500,
        originalY: 470,
        y: 470,
        originalWidth: 780,
        width: 780,
        originalHeight: 450,
        height: 450,
        target: "blank",
      },
    ],
    areas: [
      {
        name: "box4",
        originalX: 500,
        x: 500,
        originalY: 300,
        y: 300,
        originalWidth: 100,
        width: 100,
        originalHeight: 100,
        height: 100,
        message: "",
      },
    ],
    message: "You are in the dungeon.",
  },
  room5: {
    backgroundImage: "/pointAndClickImg/potionsRoomPixel.png",
    doors: [
      {
        originalX: 500,
        x: 500,
        originalY: 470,
        y: 470,
        originalWidth: 780,
        width: 780,
        originalHeight: 450,
        height: 450,
        target: "room4",
      },
    ],
    areas: [
      {
        name: "box5",
        originalX: 500,
        x: 500,
        originalY: 300,
        y: 300,
        originalWidth: 100,
        width: 100,
        originalHeight: 100,
        height: 100,
        message: "",
      },
    ],
    message: "You are in the potions room.",
  },
  room6: {
    backgroundImage: "/pointAndClickImg/hallwayPixel.png",
    doors: [
      {
        originalX: 150,
        x: 150,
        originalY: 370,
        y: 370,
        originalWidth: 200,
        width: 200,
        originalHeight: 575,
        height: 575,
        target: "blank",
      },
      {
        originalX: 490,
        x: 490,
        originalY: 440,
        y: 440,
        originalWidth: 100,
        width: 100,
        originalHeight: 360,
        height: 360,
        target: "blank",
      },
      {
        originalX: 895,
        x: 895,
        originalY: 525,
        y: 525,
        originalWidth: 110,
        width: 110,
        originalHeight: 145,
        height: 145,
        target: "blank",
      },
      {
        originalX: 1270,
        x: 1270,
        originalY: 450,
        y: 450,
        originalWidth: 100,
        width: 100,
        originalHeight: 350,
        height: 350,
        target: "blank",
        
      },
      {
        originalX: 1500,
        x: 1500,
        originalY: 410,
        y: 410,
        originalWidth: 235,
        width: 235,
        originalHeight: 530,
        height: 530,
        target: "blank",
      },
    ],
    areas: [
      {
        name: "box5",
        originalX: 500,
        x: 500,
        originalY: 300,
        y: 300,
        originalWidth: 100,
        width: 100,
        originalHeight: 100,
        height: 100,
        message: "",
      },
    ],
    message: "You are in a hallway room.",
  },
};

let currentRoom = "room1";

canvas.addEventListener("click", function (event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  const clickedDoor = rooms[currentRoom].doors.find((door) => {
    return (
      clickX >= door.x &&
      clickX <= door.x + door.width &&
      clickY >= door.y &&
      clickY <= door.y + door.height
    );
  });

  if (clickedDoor) {
    changeRoom(clickedDoor.target);
  } else {
    const clickedArea = rooms[currentRoom].areas.find((area) => {
      return (
        clickX >= area.x &&
        clickX <= area.x + area.width &&
        clickY >= area.y &&
        clickY <= area.y + area.height
      );
    });

    if (clickedArea) {
      displayAreaMessage(clickedArea.message);
    }
  }
});

backButton.addEventListener("click", function () {
  if (visitedRooms.length > 1) {
    visitedRooms.pop();
    const previousRoom = visitedRooms.pop();
    if (previousRoom) {
      changeRoom(previousRoom);
    }
  }
});

function changeRoom(room) {
  visitedRooms.push(room);
  console.log(visitedRooms); // took me long enough to figure out why I couldn't go back to room 1
  currentRoom = room;
  resizeDoorsAndAreas();
  drawRoom();
  displayRoomMessage(rooms[currentRoom].message);
}

function drawRoom() {
  const room = rooms[currentRoom];

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const background = new Image();
  background.src = room.backgroundImage;
  background.onload = function () {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  };
  //////////////////////////////testing keys
  // const itemImage = new Image();
  // itemImage.src = room.items[0].itemImageOne;
  // itemImage.onload = function() {
  //   ctx.drawImage(itemImage, 400, 800, canvas.width / 15, canvas.height / 15)
  // }
///////////////////////////////////////////////testing keys above
  room.doors.forEach((door) => {
    ctx.fillStyle = "rgba(255, 0, 0, 0)";
    ctx.fillRect(door.x, door.y, door.width, door.height);
  });

  room.areas.forEach((area) => {
    ctx.fillStyle = "rgba(0, 255, 0, 0)";
    ctx.fillRect(area.x, area.y, area.width, area.height);
  });
}

function displayRoomMessage(message) {
  roomMessage.textContent = message;
}

function displayAreaMessage(message) {
  roomMessage.textContent = message;
}

function resizeDoorsAndAreas() {
  const originalWidth = 1920;
  const originalHeight = 1080;

  rooms[currentRoom].doors.forEach((door) => {
    const scaleX = canvas.width / originalWidth;
    const scaleY = canvas.height / originalHeight;

    door.x = door.originalX * scaleX;
    door.y = door.originalY * scaleY;
    door.width = door.originalWidth * scaleX;
    door.height = door.originalHeight * scaleY;
  });

  rooms[currentRoom].areas.forEach((area) => {
    const scaleX = canvas.width / originalWidth;
    const scaleY = canvas.height / originalHeight;

    area.x = area.originalX * scaleX;
    area.y = area.originalY * scaleY;
    area.width = area.originalWidth * scaleX;
    area.height = area.originalHeight * scaleY;
  });

  

  drawRoom();
}

function resizeCanvasAndElements() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  resizeDoorsAndAreas();
}

resizeCanvasAndElements();

window.addEventListener("resize", resizeCanvasAndElements);

