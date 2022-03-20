//  let displayNavLinks = () => {
//     var navLinks = document.getElementById("nav-links");
//     console.log(navLinks)
//     navLinks.classList.toggle("dsp-none")
// }
// displayNavLinks()




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


// // Patient Appointment   
// const url2 = "https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients";
// let patientAppointment = document.querySelector("#patient_appointment")
// console.log(patientAppointment)
// fetch(url2)
//     .then(response => response.json())
//     .then(display => {
//         let lists = display.appointments
//         // console.log(lists);
//         let d = new Date(item.createdAt);
//         let hour, mainHour, minute, timeFrame;
//         if(d.getHours() > 11){
//             hour = d.getHours() - 12;
//             timeFrame = 'pm'
//             if(hour <= 9){
//                 mainHour = '0' + hour;
//             } else {
//                 mainHour = hour;
//             }
//         } else {
//             hour = d.getHours();
//             timeFrame = 'am'
//             if(hour <= 9){
//                 mainHour = '0' + hour;
//             } else {
//                 mainHour = hour;
//             }
//         }
//         if(d.getMinutes() <= 9){
//             minute = '0' + d.getMinutes()
//         } else {
//             minute = d.getMinutes()
//         }

//         time.textContent = `${mainHour}:${minute}${timeFrame}`;
//         console.log(`${mainHour}:${minute}${timeFrame}`);
//         for(item of lists) {
//             patientAppointment.innerHTML +=   `
//             <div class="patients">
//                 <p>${item.d}</p>
//                 <div class="info">
//                     <img src="../../images/patient-1.svg" alt="" />
//                     <p class="name">${item.name}</p>
//                     <img src="/images/toogle-img.svg" alt="">
//                 </div>
//             </div
//             `
//         }        
        
//     })


//  // Activity
// const url3 = 'https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites';
// let activity = document.getElementById("activity")
// console.log(activity);

// fetch(url3)
//     .then(response => response.json())
//     .then(display => {
//         let list = display.activities
//         console.log(display)
//         for (items of list) {
//             if (items.type === 'report') {
//                 activity.innerHTML +=`
//                 <div class="activity-log">
//                 <img src="../../images/activity-img-5.svg" alt="">
//                   <p>${items.title}</p>
//                 </div>
//                 `
//             }
//             else if (items.type === 'interview') {
//                 activity.innerHTML +=
//                     `
//                     <div class="activity-log">
//                     <img src="../../images/activity-img-2.svg" alt="">
//                       <p>${items.title}</p>
//                     </div>
//                 `

//             }

//         }
//     })


    // Schedule Page
    // let url4 = 'https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites'
    // fetch(url4)
    // .then(response => response.json())
    // .then(data=>{
    //     console.log(data)
    //     data.activities.forEach(element => {
    //         document.querySelector('.activities').innerHTML += `
    //             <div class="vec-mich">
    //                    <div class="vec-mich-img">
    //                        <img src="/Images/AdminPage/Group 9005.svg" alt="">
    //                    </div>
    //                    <div class="mich"> 
    //                        ${element.title}
    //                    </div>
    //                </div>
    //         `
    //         console.log(element.title)


    // document.getElementById('appointmentCount').innerHTML = data.scheduledAppointments
    //     });
    // })