// const colorChangeElement = document.querySelector('.color-change-element');
// const changeColorButton = document.getElementById('changeColorButton');

// let isGreen = false;

// function changeColor() {
//   isGreen = !isGreen;
//   colorChangeElement.classList.toggle('green', isGreen);
// }

// changeColorButton.addEventListener('click', changeColor);


const door = document.querySelector('.door');
const toggleDoorButton = document.getElementById('toggleDoorButton');
let isDoorOpen = false;

function toggleDoor() {
  isDoorOpen = !isDoorOpen;
  door.classList.toggle('opened', isDoorOpen);
}

toggleDoorButton.addEventListener('click', toggleDoor);
