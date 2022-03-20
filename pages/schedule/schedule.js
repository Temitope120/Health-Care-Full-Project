
// Patient Appointment   
const url2 = "https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients";
let patientAppointment = document.querySelector("#patient_appointment")
console.log(patientAppointment)
fetch(url2)
    .then(response => response.json())
    .then(display => {
        let lists = display.appointments
        let appointmentCount = document.getElementById('appointmentCount').innerHTML = lists.length;
        console.log(appointmentCount)
        
        for(item of lists) {
            patientAppointment.innerHTML +=   `
            <div class="patients">
                <p class="time">9:00am</p>
                <div class="info">
                     <img src="../../images/patient-1.svg" alt=""/> 
                    <p class="name">${item.name}</p>
                    <img src="/images/toogle-img.svg" alt="">
                </div>
            </div
            `
        }        
        
    })



// Activity
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
                <img src="../../images/activity-img-5.svg" alt="" class="patient-img">
                  <p class="small-text-tab patient-1">${items.title}</p>
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

