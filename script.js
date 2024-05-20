/* Script */

// Day.js
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const MicroModal = require('micromodal');
MicroModal.init();
dayjs.extend(utc);
dayjs.extend(timezone);


const timeZoneEl = document.getElementById("time-zone");
const timeZoneBtnEl = document.getElementById("time-zone-btn");
const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");
const continueBtnEl = document.getElementById("continue-btn");
const modeBtnEl = document.getElementById("mode-btn");
const bodyContainerEl = document.getElementById("body-container");
const clockContainerEl = document.getElementById("clock-container");
const modalContainerEl = document.getElementById("modal__container");
const modalTitleEl = document.getElementById("modal-1-title");
const dropDownEl = document.getElementById("arrayDropdown")
let timeZone = dayjs.tz.guess()
let isLightMode = true;



const updateTime = () => {
    let myDate = new Date ();
    let currentDate = dayjs.tz(myDate, `${timeZone}`).format("dddd, D, MMMM YYYY");
    let currentHour = dayjs.tz(myDate, `${timeZone}`).format("hh");
    let currentMinute = dayjs.tz(myDate, `${timeZone}`).format("mm");
    let currentSecond = dayjs.tz(myDate, `${timeZone}`).format("ss");
    let hourAmPm = dayjs.tz(myDate, `${timeZone}`).format("A");
    
    timeZoneEl.textContent = timeZone;
    hourEl.textContent = currentHour;
    minuteEl.textContent = currentMinute;
    secondEl.textContent = currentSecond;
    ampmEl.textContent = hourAmPm;
    dateEl.textContent = currentDate;
}

const updateTimeZone = () => {
    MicroModal.show('modal-1');
}

const changeMode = () => {
    isLightMode = !isLightMode

    if (isLightMode) {
        bodyContainerEl.style.backgroundColor = "#F7F7F7";
        bodyContainerEl.style.color = "black";
        clockContainerEl.style.backgroundColor = "#EEEEEE";
        modeBtnEl.style.color = "";
        hourEl.style.backgroundColor = "#EEEEEE";
        minuteEl.style.backgroundColor = "#EEEEEE";
        secondEl.style.backgroundColor = "#EEEEEE";
        timeZoneBtnEl.style.color = "";  
        modalContainerEl.style.backgroundColor = "#EEEEEE";
        modalTitleEl.style.color = "black";
    } else {

        bodyContainerEl.style.backgroundColor = "#31363F";
        bodyContainerEl.style.color = "white";
        clockContainerEl.style.backgroundColor = "#222831";
        modeBtnEl.style.color = "white";
        hourEl.style.backgroundColor = "#222831";
        minuteEl.style.backgroundColor = "#222831";
        secondEl.style.backgroundColor = "#222831";
        timeZoneBtnEl.style.color = "white";
        modalContainerEl.style.backgroundColor = "#222831";
        modalTitleEl.style.color = "white";
    }
}
modeBtnEl.addEventListener("click", changeMode)
timeZoneBtnEl.addEventListener("click", updateTimeZone)
const timeZonesList = [];

// Get supported time zones
for (const zone of Intl.supportedValuesOf('timeZone')) {
    timeZonesList.push(zone);
}

let options = '';
timeZonesList.map((op, i) => {
    options += `<option value="${op}" id="${i}" style="border-radius: 5px;">${op}</option>`;
});
dropDownEl.innerHTML = `
<option value="" disabled selected>Pick a timezone</option>
${options}
`;
 function handleSelectChange() {
    
    dropDownEl.value;

}

continueBtnEl.addEventListener("click", () => {
    timeZone = document.getElementById("arrayDropdown").value
    MicroModal.close('modal-1')
})
// Add event listener to the select element
dropDownEl.addEventListener("change", handleSelectChange);
updateTime();
setInterval(updateTime, 1000);

