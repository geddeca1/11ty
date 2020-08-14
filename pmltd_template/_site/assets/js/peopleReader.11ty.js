
//If file is local
// var json = JSON.parse('students');

//Using free place holder data for now from
//https://jsonplacehold
//returns promise that resolves to jsoner.typicode.com/

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    var count = 0;
    data.forEach(obj => {
      makeCard(obj.id, obj.name);
      count++;
      setStats(count);
   });
  })

// Create a student card and write data to it.
function makeCard(id, studentName){
  var div = document.createElement('div');
  div.classList.add("student");
  const parent = document.getElementById('card-holder')
  const name = `
    <span className="student-name">
      <button id="${id}" className="see-student">✖</button>
    </span>
    <p>${studentName}</p>`;
  div.innerHTML = name;
  parent.append(div);

  //click call back method for button
  document.getElementById(id).addEventListener('click', ()=> {
  //check if element exists - for toggle.
  var idString = id+"dets";
  var element = document.getElementById(idString);

  //If it isn't "undefined" and it isn't "null", then it exists.
  if(typeof(element) != 'undefined' && element != null){
    var toRemove = document.getElementById(idString);
    toRemove.remove(); // Removes the div with the 'div-02' id
  } else{

      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => {
          const details = `<p>User name: ${data.username} <br>
          Email: ${data.email} <br> Phone: ${data.phone} <br> Address: ${data.address.street}, ${data.address.city}</p>`;

          const parent = document.getElementById(id).parentElement.parentElement;
          var detailsDiv = document.createElement('div');

          detailsDiv.id = idString;
          detailsDiv.classList.add("student-details");
          detailsDiv.innerHTML = details;
          parent.appendChild(detailsDiv);
        })
    }//end if else
  }); // end event listener
}

//setStats writes record count to screen
function setStats(num){
  const stats = document.getElementById('stats');
   stats.innerHTML = "Count: "+num;
}
