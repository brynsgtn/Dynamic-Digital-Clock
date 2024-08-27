"use strict";

// Importing modules
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import MicroModal from "micromodal";

// Initialize MicroModal
MicroModal.init();

// Extend Day.js with UTC and Timezone plugins
dayjs.extend(utc);
dayjs.extend(timezone);

// DOM Element Retrieval and Error Checking
const timeZoneEl = document.getElementById("time-zone");
if (!timeZoneEl) throw new Error("timeZoneEl element not found!");

const timeZoneBtnEl = document.getElementById("time-zone-btn");
if (!timeZoneBtnEl) throw new Error("timeZoneBtnEl element not found!");

const dateEl = document.getElementById("date");
if (!dateEl) throw new Error("dateEl element not found!");

const hourEl = document.getElementById("hour");
if (!hourEl) throw new Error("hourEl element not found!");

const minuteEl = document.getElementById("minute");
if (!minuteEl) throw new Error("minuteEl element not found!");

const secondEl = document.getElementById("second");
if (!secondEl) throw new Error("secondEl element not found!");

const ampmEl = document.getElementById("ampm");
if (!ampmEl) throw new Error("ampmEl element not found!");

const continueBtnEl = document.getElementById("continue-btn");
if (!continueBtnEl) throw new Error("continueBtnEl element not found!");

const modeBtnEl = document.getElementById("mode-btn");
if (!modeBtnEl) throw new Error("modeBtnEl element not found!");

const bodyContainerEl = document.getElementById("body-container");
if (!bodyContainerEl) throw new Error("bodyContainerEl element not found!");

const clockContainerEl = document.getElementById("clock-container");
if (!clockContainerEl) throw new Error("clockContainerEl element not found!");

const modalContainerEl = document.getElementById("modal__container");
if (!modalContainerEl) throw new Error("modalContainerEl element not found!");

const modalTitleEl = document.getElementById("modal-1-title");
if (!modalTitleEl) throw new Error("modalTitleEl element not found!");

const dropDownEl = document.getElementById("arrayDropdown");
if (!dropDownEl) throw new Error("dropDownEl element not found!");

// Time Zone Handling
let timeZone = dayjs.tz.guess();
let isLightMode = true;

const updateTime = () => {
    const myDate = new Date();
    const currentDate = dayjs.tz(myDate, timeZone).format("dddd, D, MMMM YYYY");
    const currentHour = dayjs.tz(myDate, timeZone).format("hh");
    const currentMinute = dayjs.tz(myDate, timeZone).format("mm");
    const currentSecond = dayjs.tz(myDate, timeZone).format("ss");
    const hourAmPm = dayjs.tz(myDate, timeZone).format("A");
    timeZoneEl.textContent = timeZone;
    hourEl.textContent = currentHour;
    minuteEl.textContent = currentMinute;
    secondEl.textContent = currentSecond;
    ampmEl.textContent = hourAmPm;
    dateEl.textContent = currentDate;
};

const updateTimeZone = () => {
    MicroModal.show('modal-1');
};

const changeMode = () => {
    isLightMode = !isLightMode;
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
};

modeBtnEl.addEventListener("click", changeMode);
timeZoneBtnEl.addEventListener("click", updateTimeZone);

// Time Zones List and Dropdown
const timeZonesList = [
    // (your list of time zones here)
];

let options = '';
timeZonesList.forEach((op, i) => {
    options += `<option value="${op}" id="${i}" style="border-radius: 5px;">${op}</option>`;
});
dropDownEl.innerHTML = `
<option value="" disabled selected>Pick a timezone</option>
${options}
`;

const handleSelectChange = () => {
    if (dropDownEl) {
        dropDownEl.value;
    }
};

continueBtnEl.addEventListener("click", () => {
    timeZone = dropDownEl.value;
    MicroModal.close('modal-1');
});

dropDownEl.addEventListener("change", handleSelectChange);

// Initial Update
updateTime();
setInterval(updateTime, 1000);
