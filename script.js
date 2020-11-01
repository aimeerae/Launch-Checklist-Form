// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!

*/

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){

      response.json().then(function(json){
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[3].name}</li>
            <li>Diameter: ${json[3].diameter}</li>
            <li>Star: ${json[3].star}</li>
            <li>Distance from Earth: ${json[3].distance}</li>
            <li>Number of Moons: ${json[3].moons}</li>
         </ol>
         <img src="${json[3].image}">
            `;
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");
      let faultyItems = document.getElementById("faultyItems");
      
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("Invalid input. All fields required.");
         event.preventDefault();
      }
       if (!isNaN (pilotNameInput.value)) {
         alert("Invalid input. Pilot name must consist of only letters.")
         event.preventDefault();
      }
       if (!isNaN (copilotNameInput.value)) {
         alert("Invalid input. Co-Pilot name must consist of only letters.")
         event.preventDefault();
      }
      
       if (isNaN(fuelLevelInput.value)) {
         alert("Invalid input. Fuel level must be valid number.");
         event.preventDefault();
      }
      
      if (isNaN (cargoMassInput.value)) {
         alert("Invalid input. Cargo mass must be valid number.");
         event.preventDefault();

      }
      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
      copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} Ready`;
      if (fuelLevelInput.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level too low for launch";
         launchStatus.innerHTML = "Shuttle Not Ready For Launch";
         launchStatus.style.color =  "red";
         event.preventDefault();
      } else if (cargoMassInput.value > 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Cargo mass too high for launch";
         launchStatus.innerHTML = "Shuttle Not Ready For Launch";
         launchStatus.style.color =  "red";
         event.preventDefault();
      } else { 
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
         event.preventDefault();
      }

   });


});

