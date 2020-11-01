// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!

*/

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         const div = document.getElementById("missionTarget");
         let i = Math.floor(Math.random()*json.length);
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[i].name}</li>
            <li>Diameter: ${json[i].diameter}</li>
            <li>Star: ${json[i].star}</li>
            <li>Distance from Earth: ${json[i].distance}</li>
            <li>Number of Moons: ${json[i].moons}</li>
         </ol>
         <img src="${json[i].image}">
            `;
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
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
      }
       if (!isNaN (pilotNameInput.value)) {
         alert("Invalid input. Pilot name must consist of only letters.");
      }
       if (!isNaN (copilotNameInput.value)) {
         alert("Invalid input. Co-Pilot name must consist of only letters.");
      }
      
       if (isNaN(fuelLevelInput.value)) {
         alert("Invalid input. Fuel level must be valid number.");
      }
      
      if (isNaN (cargoMassInput.value)) {
         alert("Invalid input. Cargo mass must be valid number.");
      }
      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
      copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} Ready`;
      if (fuelLevelInput.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level too low for launch";
         launchStatus.innerHTML = "Shuttle Not Ready For Launch";
         launchStatus.style.color =  "red";
      } else if (cargoMassInput.value > 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Cargo mass too high for launch";
         launchStatus.innerHTML = "Shuttle Not Ready For Launch";
         launchStatus.style.color =  "red";
      } else { 
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
      }

   });


});

