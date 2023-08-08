function showFloorNumber(button, direction){
    const floorDiv = button.parentElement.nextElementSibling.nextElementSibling;
    const floorNumber = floorDiv.querySelector('.floorName div').textContent.trim();
    const numericFloor = floorNumber.replace(/\D/g, ''); // Remove non-digit characters

    if (direction === 'up') {
        alert(`Clicked "up" button on floor ${numericFloor}`);
    } else if (direction === 'down') {
        alert(`Clicked "down" button on floor ${numericFloor}`);
    }
    return numericFloor;
}


element = document.getElementById("lift1")
var rect = element.getBoundingClientRect();
console.log("top",rect.top, "right",rect.right, "bottom" ,rect.bottom,"left", rect.left);




// function findPosition(id){
//     element = document.getElementById(id)
//     var rect = element.getBoundingClientRect();
//     console.log(rect.bottom);
//     return rect.bot;
// }

findPosition("floor2");


// var x = findPosition("lift1")

// window.onload = function(){
//     var moveLift = document.getElementById("lift1");

//     setInterval(function()
//     {
//         while(x!=findPosition("floor2"))
//             x--;
//     },10);
// }

// function moveLiftToFloor(floorNumber) {
//     const lift = document.querySelector('.lift');
//     console.log("const lift",lift)
//     const liftBottom = lift.getBoundingClientRect().bottom;
//     console.log("const ")
//     const floorElement = document.getElementById(`floor${floorNumber}`);
//     const floorBottom = floorElement.getBoundingClientRect().bottom;

//     const translationDistance = floorBottom - liftBottom;
//     lift.style.transition = 'transform 1s'; // Add a transition for smooth movement
//     lift.style.transform = `translateY(${translationDistance}px)`;
// }

// moveLiftToFloor(2); // Move the lift to floor 2


function showFloorNumber(button, direction){
    const floorDiv = button.parentElement.nextElementSibling.nextElementSibling;
    const floorNumber = floorDiv.querySelector('.floorName div').textContent.trim();
    const numericFloor = floorNumber.replace(/\D/g, ''); // Remove non-digit characters

    return numericFloor;
}


function moveLift(button, direction)
{

    if(direction =="up" || direction=="down"){
        const floorNumber = showFloorNumber(button, direction);
        const liftElement = document.querySelector('.lift');
        console.log(typeof(floorNumber), floorNumber)
        
        liftElement.style.transform = `translateY(${-(floorNumber-1)*101.5}px)`;
        liftElement.style.transition = 'transform 2s ease-in-out';
        
        // doorOpen();

        
    }   
    
    
}




