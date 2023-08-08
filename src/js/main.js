
const submission=()=>{

    const floorCount = document.getElementById("numberOfFloors").value;
    const liftCount = document.getElementById("numberOfLifts").value;

    const val = inputValidation(floorCount, liftCount)
    if(val){
        // hideDiv("formDiv");
        hideDivv("formDiv","layoutDiv")
    }
    
}


// Validating input from form
// 1. only positive numbers
// 2. number of lifts should be <= floors always
// 3. they cannot be zero
// 4. Cannot input blank numbers
const inputValidation =(floorCount, liftCount)=>{
    
    if(floorCount === "" || liftCount === ""){
        alert("Input cannot be empty")
        return false;
    }
    else if(floorCount <= 0 || liftCount <=0){
        alert("Numbers should be positive and also greater than zero");
        return false;
    }
    else if(floorCount < liftCount){
        alert("Number of lifts cannot be more thanm floors");
        return false;
    }
    else{
        return true;
    } 
}


function hideDivv(id1,id2) {
    const divToHide1 = document.getElementById(id1);
    const divToHide2 = document.getElementById(id2)
    if (divToHide1.style.display !=='none') {
        divToHide1.style.display = "none";
        divToHide2.style.display = "block";
    }else{
        divToHide1.style.display = 'block';
        divToHide2.style.display = 'none';
    }
}

function showFloorNumber(button, direction){
    const floorDiv = button.parentElement.nextElementSibling.nextElementSibling;
    const floorNumber = floorDiv.querySelector('.floorName div').textContent.trim();
    const numericFloor = floorNumber.replace(/\D/g, ''); // Remove non-digit characters

    if (direction === 'up') {
        alert(`Clicked "up" button on floor ${numericFloor}`);
    } else if (direction === 'down') {
        alert(`Clicked "down" button on floor ${numericFloor}`);
    }
}