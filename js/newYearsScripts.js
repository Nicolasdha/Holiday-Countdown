const holiday = '31 Dec 2021'

function countDown() {
    const holidayDate = new Date(holiday);
    const currentDate = new Date();

    const totalSeconds = (holidayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    
    const daysCont = document.querySelector('#days');
    const hoursCont = document.querySelector('#hours');
    const minsCont = document.querySelector('#mins');
    const secondsCont = document.querySelector('#seconds');

    daysCont.textContent = formatTime(days);
    hoursCont.textContent = formatTime(hours);
    minsCont.textContent = formatTime(mins);
    secondsCont.textContent = formatTime(seconds);

}


function formatTime(time){
    return time <10 ? `0${time}` : time
}


setInterval(countDown, 1000);
countDown();
