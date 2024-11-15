// Smooth scroll to sections when nav link is clicked
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const sectionId = this.getAttribute('href').substring(1);
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  

 

  let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
  progressEndValue = 90,    
  speed = 100;
  
let progress = setInterval(() => {
  progressStartValue++;

  progressValue.textContent = `${progressStartValue}%`
  circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

  if(progressStartValue == progressEndValue){
      clearInterval(progress);
  }    
}, speed);




let circularProgresstwo = document.querySelector(".circular-progress2"),
progressValuetwo = document.querySelector(".progress-value2");

let progressStartValuetwo = 0,    
progressEndValuetwo = 75,    
speedtwo = 100;

let progresstwo = setInterval(() => {
progressStartValuetwo++;

progressValuetwo.textContent = `${progressStartValuetwo}%`
circularProgresstwo.style.background = `conic-gradient(#7d2ae8 ${progressStartValuetwo * 3.6}deg, #ededed 0deg)`

if(progressStartValuetwo == progressEndValuetwo){
    clearInterval(progresstwo);
}    
}, speedtwo);



let circularProgressthree = document.querySelector(".circular-progress3"),
progressValuethree = document.querySelector(".progress-value3");

let progressStartValuethree = 0,    
progressEndValuethree = 75,    
speedthree = 100;

let progressthree = setInterval(() => {
progressStartValuethree++;

progressValuethree.textContent = `${progressStartValuethree}%`
circularProgressthree.style.background = `conic-gradient(#7d2ae8 ${progressStartValuethree * 3.6}deg, #ededed 0deg)`

if(progressStartValuethree == progressEndValuethree){
    clearInterval(progressthree);
}    
}, speedthree);



let circularProgressfour = document.querySelector(".circular-progress4"),
progressValuefour = document.querySelector(".progress-value4");

let progressStartValuefour = 0,    
progressEndValuefour = 85,    
speedfour = 100;

let progressfour = setInterval(() => {
progressStartValuefour++;

progressValuefour.textContent = `${progressStartValuefour}%`
circularProgressfour.style.background = `conic-gradient(#7d2ae8 ${progressStartValuefour * 3.6}deg, #ededed 0deg)`

if(progressStartValuefour == progressEndValuefour){
    clearInterval(progressfour);
}    
}, speedfour);























