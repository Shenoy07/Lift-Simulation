
// const body = document.querySelector("body");

// //div1
// const div1 = document.createElement("div")


// div1.setAttribute("class","class1")

// body.appendChild(div1);
// //---------------div1 appended//

// //---------form begin----------
// const form = document.createElement("form")
// const q1input = document.createElement("LABEL")
// const input1 = document.createElement("input")
// const q2input = document.createElement("LABEL")
// const input2 = document.createElement("input")
// const break1 = document.createElement("br")
// const break2 = document.createElement("br")
// const break3 = document.createElement("br")
// const break4 = document.createElement("br")

// const formButton = document.createElement("BUTTON")
// q1input.textContent = "Enter Number of floors";
// q2input.textContent = "Enter Number of Lifts";
// formButton.textContent = "SUBMIT";


// div1.appendChild(form)
// form.setAttribute("class","flexClass");
// form.setAttribute("id","formDiv")
// form.appendChild(q1input);
// form.appendChild(break1);
// form.appendChild(input1);
// form.appendChild(break2);
// form.appendChild(q2input);
// form.appendChild(break3);
// form.appendChild(input2);
// form.appendChild(break4);
// form.appendChild(formButton);
// formButton.style.backgroundColor= "red"


// //-----------form appended---------------------

// //--------Submit form------------
// formButton.addEventListener('click',(event)=>{

//     const numberOfFloors = input1.value;
//     const numberOfLifts = input2.value;
//     // const validity = inputValidation(numberOfFloors,numberOfLifts)
//     console.log(validity)
//     console.log(numberOfFloors)
//     console.log(numberOfLifts)
//     event.preventDefault()
    
// });







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
        alert("Number of lifts cannot be more than floors");
        return false;
    }
    else{
        return true;
    } 
}


const body1 = document.querySelector("body")
// body1.style.backgroundColor = "red"

// const form1 = document.getElementsByClassName("flexClass")

console.log(1)

// form1.style.back


// formButton.addEventListener('click',(event)=>{

//     //     const numberOfFloors = input1.value;
//     //     const numberOfLifts = input2.value;
//     //     // const validity = inputValidation(numberOfFloors,numberOfLifts)
//     //     console.log(validity)
//     //     console.log(numberOfFloors)
//     //     console.log(numberOfLifts)
//     //     event.preventDefault()
        
//     // });


const button1 = document.querySelector(".formButton");
const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")


button1.addEventListener('click',(event)=>{

        const numberOfFloors = input1.value;
        const numberOfLifts = input2.value;
        console.log(numberOfFloors)
        console.log(numberOfLifts)
        if(inputValidation(numberOfFloors,numberOfLifts)){
            loadpage(numberOfFloors,numberOfLifts)
            const bb = document.querySelector('body');
            const form = document.querySelector(".flexClass");
            form.style.display = "none"

        }

        // bb.removeChild(form);
        event.preventDefault();
        

})


//------------layout begins-------------------


function loadpage(numberOfFloors, numberOfLifts){

    const section1 = document.createElement("SECTION");
    section1.setAttribute("id","layoutDiv");
    const body2 = document.querySelector("body");

    const bbdiv = document.createElement("div");
    body2.appendChild(bbdiv);

    const backButton = document.createElement("BUTTON");
    backButton.textContent = "Reset";
    backButton.setAttribute("class","backbut");
    // backButton.setAttribute("class","upAndDown")
    bbdiv.appendChild(backButton)
    bbdiv.setAttribute("class","backbutton")


    backButton.addEventListener('click',()=>{
    const bb = document.querySelector('body');
    bb.removeChild(section1);
    const form = document.querySelector(".flexClass");
    const input1 = document.querySelector(".input1")
    const input2 = document.querySelector(".input2")
    input1.value = ''; 
    input2.value = '';
    form.style.display = "block";
    backButton.style.display = "none";
    });



    // section1.style.backgroundColor ="red"
    body2.appendChild(section1);
    
            // --------------------------------------------------------------------------------------------------

            // /------------------------------------------------------------------------------------------------

    
    for(let i = numberOfFloors; i >=1;i-- ){
        const floor = document.createElement("div"); //creating floor div
        section1.appendChild(floor);                //appending floor to section
        floor.setAttribute("class","floors");
        floor.setAttribute("data-floorNo",i)       //setting the class for the floors

        const upAndDown = document.createElement("div") //creating a upAndDown div for the floor
        upAndDown.setAttribute("class","upAndDown")     //setting the class for the upAnd Down div where the buttons will go
        floor.appendChild(upAndDown);                        //appending the upAndDown div for the floor 
        
        
        if(i == numberOfFloors)                                         //if floor is the top floor, which it will be because we start                  
        {                                                               //the loop from top floor and we need only one down button
            const buttonDown = document.createElement("BUTTON");
            buttonDown.textContent = "Down";
            buttonDown.setAttribute("class","Btn");
            buttonDown.setAttribute("data-buttonFloor",i);
            upAndDown.appendChild(buttonDown);
            // upAndDown.style.backgroundColor = "yellow"
        }
        else if(i == 1 )                                                // if floor is ground floor, we only need the up button 
        {
            const buttonUp = document.createElement("BUTTON");
            buttonUp.textContent = "Up";
            buttonUp.setAttribute("class","Btn");
            buttonUp.setAttribute("data-buttonFloor",i);
            upAndDown.appendChild(buttonUp);
        }
        else
        {                                                                   // in all other cases we need 2 buttons
            const buttonUp = document.createElement("BUTTON");
            buttonUp.setAttribute("class","Btn");
            buttonUp.setAttribute("data-buttonFloor",i);
            const buttonDown = document.createElement("BUTTON");
            buttonDown.setAttribute("class","Btn");
            buttonDown.setAttribute("data-buttonFloor",i);
            buttonUp.textContent = "Up";
            buttonDown.textContent = "Down";
            upAndDown.appendChild(buttonUp);
            upAndDown.appendChild(buttonDown);
        }
        
        const liftContainer = document.createElement("div");
        liftContainer.setAttribute("class","liftContainer")
        // liftContainer.style.backgroundColor= "green";
        floor.appendChild(liftContainer);


        const fn = document.createElement("div");
        fn.setAttribute("class","floorName");
        fn.textContent = "floor"
        // fn.style.backgroundColor = "blue"
        floor.appendChild(fn);
        fno = document.createElement("div");
        fno.textContent = i;
        fn.appendChild(fno);


        if(i == 1)
        {
            for(let j = 1; j <= numberOfLifts;j++  )
            {
                const lift = document.createElement("div");
                lift.setAttribute("class","lift");
                lift.setAttribute("data-liftno",j);
                lift.setAttribute("data-liftfloor",i);
                lift.setAttribute("data-liftAvailability","Available");
                liftContainer.appendChild(lift);

                const door1 = document.createElement("div");
                const door2 = document.createElement("div");
                door1.setAttribute("class","door-left");
                door2.setAttribute("class","door-right");
                lift.appendChild(door1);
                lift.appendChild(door2);


            }
        }



        const buttonPush = document.querySelectorAll(".Btn");
        

        buttonPush.forEach(butt => {
            butt.addEventListener('click', () => {

                const liftElement = document.querySelectorAll('.lift');
                const liftArray = Array.from(liftElement)

                const floorNumber = butt.getAttribute("data-buttonFloor");
                console.log("Button pushed on floor:", floorNumber);




                for (let l = 0; l < numberOfLifts; l++) {
                    const currentfloor = liftArray[l].getAttribute("data-liftfloor");
                    console.log(currentfloor)
                    if(floorNumber==currentfloor && liftArray[l].getAttribute("data-liftAvailability") !== "busy")
                    {
                        
                        const floorDiff = Math.abs(floorNumber - currentfloor);
                        
                        setTimeout(() => {
                            liftArray[l].setAttribute("data-liftAvailability", "busy");
                            openDoors(liftArray, l);
                          }, floorDiff * 2000);
                      
                          setTimeout(() => {
                            closeDoors(liftArray, l);
                            // liftArray[l].setAttribute("data-liftAvailability", "Available");
                          }, floorDiff * 2000 + 2500);
                          setTimeout(()=>{
                            liftArray[l].setAttribute("data-liftAvailability", "Available");
                          },5000)
                          
                          break;
                    }

                    else if (liftArray[l].getAttribute("data-liftAvailability") !== "busy") {
                      const floorDiff = Math.abs(floorNumber - currentfloor);
                  
                      setTimeout(() => {
                        liftArray[l].setAttribute("data-liftAvailability", "busy");
                        liftArray[l].style.transition = `transform ${floorDiff * 2}s ease-in-out`;
                        liftArray[l].style.transform = `translateY(${-(floorNumber - 1) * 100}px)`;
                        liftArray[l].setAttribute("data-liftfloor", floorNumber);
                      }, 0);
                  
                      setTimeout(() => {
                        openDoors(liftArray, l);
                      }, floorDiff * 2000);
                  
                      setTimeout(() => {
                        closeDoors(liftArray, l);
                        // liftArray[l].setAttribute("data-liftAvailability", "Available");
                      }, floorDiff * 2000 + 2500);
                      setTimeout(()=>{
                        liftArray[l].setAttribute("data-liftAvailability", "Available");
                      },(floorDiff*2000)+5000)
                      break;
                    }
                  }
                  
                  
            });
        });
    }


}


function openDoors(liftArray,l){
    liftArray[l].children[0].style.transform=`translateX(${-100}%)`;
    liftArray[l].children[1].style.transform=`translateX(${100}%)`;
    liftArray[l].children[0].style.transition=`transform 2.5s`;
    liftArray[l].children[1].style.transition=`transform 2.5s`;
}

function closeDoors(liftArray,l){
    liftArray[l].children[0].style.transform=`translateX(${0}%)`;
    liftArray[l].children[1].style.transform=`translateX(${0}%)`;
    liftArray[l].children[0].style.transition=`transform 2.5s`;
}

//-----------layout ends------------------------------




//const navButtons = document.querySelector("")

//------------------------------------------------------------------------------------------

