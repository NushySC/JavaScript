const clockUpdate = (clock) => {
  hoursDigits = document.querySelector('#digits-hours');
  minutesDigits = document.querySelector('#digits-minutes');
  ampm = document.querySelector('#ampm');

  hoursDigits.innerHTML = clock.hours;
  minutesDigits.innerHTML = clock.minutes;
  ampm.innerHTML = clock.ampm;
}

document.addEventListener('DOMContentLoaded', () => {
  let clock = {
    hours: 10,
    minutes: 57,
    ampm: 'AM'
   }

  clockUpdate(clock);
  
  btnHoursUp = document.querySelector('#btn-hours-up');
  btnHoursUp.addEventListener('click', () => {

    if(clock.ampm === 'AM') {
         if(clock.hours < 12) {
           clock.hours++;  
         } else {
           clock.hours = 1;
           clock.ampm = 'PM';
         }
       } else {
         if(clock.hours < 11) {
           clock.hours++;  
         } else {
           clock.hours = 0;
           clock.ampm = 'AM';
         }
       }

    // if (clock.hours < 11) {
    //   clock.hours++;
    // } else if (clock.hours > 11 && clock.hours < 23 ) {
    //   clock.hours = clock.hours - 12;
    //   clock.ampm = 'PM';
    // } else if (clock.hours === 12 || clock.hours == 00 || clock.hours == 24 ) {
    //   clock.hours = 12;
    //     if (clock.ampm === 'AM') {
    //       clock.ampm = 'PM';
    //     } else {
    //       clock.ampm = 'AM';
    //     }  
    //   }
      
    
    clockUpdate(clock);
  });

  btnHoursDown = document.querySelector('#btn-hours-down');
  btnHoursDown.addEventListener('click', () => {

    if(clock.hours > 1) {
         clock.hours--;  
       } else {
         clock.hours = 12;
         if (clock.ampm === 'AM'){
          clock.ampm === 'PM';
         } else if (clock.ampm === 'PM'){
          clock.ampm === 'AM';
         }
       }

    // if (clock.hours < 11) {
    //   clock.hours++;
    // } else {
    //   // clock.hours = 12;
    //   clock.ampm = 'PM';
    // }
    clockUpdate(clock);
  });

  btnMinutesUp = document.querySelector('#btn-minutes-up');
  btnMinutesUp.addEventListener('click', () => {
    if(clock.minutes < 59) {
        clock.minutes++;  
      } else {
        clock.minutes = 0;
    }
    clockUpdate(clock);
  });

  btnMinutesDown = document.querySelector('#btn-minutes-down');
  btnMinutesDown.addEventListener('click', () => {
    if(clock.minutes > 1) {
      clock.minutes--;  
    } else {
      clock.minutes = 59;
  }
    clockUpdate(clock);
  });

  amtopm = document.querySelector('#ampm-btn');
  amtopm.addEventListener('click', () => {
   if (clock.ampm === 'AM') {
       clock.ampm = 'PM';
    }
      else {
      clock.ampm = 'AM';
     }
     clockUpdate(clock);
   });


});