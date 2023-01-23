function daysLeftForExam() {
    let daysLeft = document.querySelector('.days-left');
    let countDownDate = new Date("Feb 9, 2023 12:00:00 GMT+0545").getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    daysLeft.innerHTML = `${days} days for exams`;
  
    if (distance < 0) {
      daysLeft.innerHTML = "Exams Started";
    }
  }

function clock() {
    const timeNow = document.querySelector('.time-now');
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    timeNow.innerHTML = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

setInterval(clock, 1000);
daysLeftForExam();