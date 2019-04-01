class Clock {
    constructor(hours, minutes, zulu) {
      this.hours = hours;
      this.minutes = minutes;
      this.zulu = zulu;
    }
  
    render() {
      this.element = document.createElement('div');
      this.element.className = 'clock';
      this.element.innerHTML = `
        <div class="control">
          <button id="btn-hours-up" class="digit-btn">+</button>
          <div id="digits-hours" class="digits hours">${this.hours}</div>
          <button id="btn-hours-down" class="digit-btn">-</button>
        </div>
        <div class="separator">:</div>
        <div class="control">
          <button id="btn-minutes-up" class="digit-btn">+</button>
          <div id="digits-minutes" class="digits minutes">${this.minutes}</div>
          <button id="btn-minutes-down" class="digit-btn">-</button>
        </div>
        <div id="ampm" class="ampm">${this.zulu}</div>
      `;
  
      return this.element;
    }
  
    mount(parent) {
      parent.appendChild(this.render());
    }
  
    update() {
      let hoursDigits = this.element.querySelector('#digits-hours');
      let minutesDigits = this.element.querySelector('#digits-minutes');
      let zuluElm = this.element.querySelector('#ampm');
  
      hoursDigits.textContent = this.hours;
      minutesDigits.textContent = this.minutes;
      zuluElm.textContent = this.zulu;
    }
  } 

  let NYClock = new Clock(17, 30, 'AM');
