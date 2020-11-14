const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

function getTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = (((seconds / 60) * 360) + 90);
    secondHand.style.transform = `rotate(${secondsDegree}deg)`


    const minutes = now.getMinutes();
    const minutesDegree = (((minutes / 60) * 360) + 90);
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`


    const hours = now.getHours();
    const hoursDegree = (((hours / 60) * 360) + 90);
    hourHand.style.transform = `rotate(${hoursDegree}deg)`



}

setInterval(getTime, 1000);