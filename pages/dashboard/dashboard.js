// Dashboard
let url ="https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients"
fetch(url)
    .then(response => response.json())
    .then(data=> {
        let appointments = document.getElementById('appointments').innerHTML = data.appointments.length;
        let appointment = document.getElementById('appointment').innerHTML = data.appointments.length;
       let patients =  document.getElementById('patients').innerHTML = data.totalPatients;
       let totalPatients= document.getElementById('totalPatients').innerHTML = data.totalPatients
       console.log(totalPatients)
      let waitRoom = document.getElementById('waitRoom').innerHTML = data.waitinfRoom
        console.log(waitRoom)
})


// Patient Appointment   
const url2 = "https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients";
let patientAppointment = document.querySelector("#patient_appointment")
console.log(patientAppointment)
fetch(url2)
    .then(response => response.json())
    .then(display => {
        let lists = display.appointments
        // console.log(lists);
        
        
        for(item of lists) {
            patientAppointment.innerHTML +=   `
            <div class="patients">
                <p class="current-time">9:00am</p>
                <div class="info">
                    <img src="../../images/patient-1.svg" alt="" />
                    <p class="name">${item.name}</p>
                    <img src="/images/toogle-img.svg" alt="">
                </div>
            </div
            `
        }        
        
    })




//  // Activity
const url3 = 'https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites';
let activity = document.getElementById("activity")
console.log(activity);

fetch(url3)
    .then(response => response.json())
    .then(display => {
    let list = display.activities
    console.log(display)
    for (items of list) {
        if (items.type === 'report') {
            activity.innerHTML +=`
            <div class="activity-log">
            <img src="../../images/activity-img-5.svg" alt="">
                <p>${items.title}</p>
            </div>
            `
        }
        else if (items.type === 'interview') {
            activity.innerHTML +=
                `
                <div class="activity-log">
                <img src="../../images/activity-img-2.svg" alt="">
                    <p>${items.title}</p>
                </div>
            `

        }

    }
})


// Sidebar Mobile toggle
// display-sidebar

let toggleIcon = document.getElementById("toggle")
console.log(toggleIcon);

let sideBar = document.querySelector(".sidebar");
console.log(sideBar)

toggleIcon.addEventListener("click", () =>{
    sideBar.classList.toggle("display-sidebar")
})


// close button
var closebtn = document.querySelector(".close");
closebtn.style.color= "white";
closebtn.style.fontSize = "18px"
var i;
  closebtn.addEventListener("click", function() {
    this.parentElement.style.display = 'block';
  });
// }