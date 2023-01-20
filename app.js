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

  daysLeftForExam();