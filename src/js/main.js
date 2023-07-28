
const submission=()=>{

    const floorCount = document.getElementById("numberOfFloors").value;
    const liftCount = document.getElementById("numberOfLifts").value;

    const val = inputValidation(floorCount, liftCount)
    if(val){
        hideDiv("formDiv");
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


function hideDiv(id) {
    const divToHide = document.getElementById(id);

    if (divToHide) {
        divToHide.style.display = "none";
    }
}
