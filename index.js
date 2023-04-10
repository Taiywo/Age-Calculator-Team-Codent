function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const birthYear = birthdate.getFullYear();
    const birthMonth = birthdate.getMonth() + 1;
    const birthDay = birthdate.getDate();
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();
    let ageYears = todayYear - birthYear;
    let ageMonths = todayMonth - birthMonth;
    let ageDays = todayDay - birthDay;
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
      }
      if (ageDays < 0) {
        const daysInLastMonth = new Date(todayYear, todayMonth - 1, 0).getDate();
        ageMonths--;
        ageDays += daysInLastMonth;
      }
    const ageText = "Your age is " + ageYears + " years, " + ageMonths + " months, and " + ageDays + " days.";
    let message;
    if (ageYears > 27) {
      message = "Sorry! You are too old for the job 😔.";
    } else if(ageYears < 21){
      message = "Sorry! You are too young for the job 😔.";
    }
    else{
      message = "Congratulations! You are qualified for the job👍.";
    }
    document.getElementById("age").textContent = ageText + " " + message;
  }
  
  