/* Script */
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import MicroModal from 'micromodal';

// Initialize MicroModal
MicroModal.init();

// Extend Day.js with UTC and Timezone plugins
dayjs.extend(utc);
dayjs.extend(timezone);


const timeZoneEl = document.getElementById("time-zone") as HTMLParagraphElement | null;
if (!timeZoneEl) {
    throw new Error ("timeZoneEl element not found!")
}
const timeZoneBtnEl = document.getElementById("time-zone-btn") as HTMLButtonElement | null;
if (!timeZoneBtnEl) {
    throw new Error ("timeZoneBtnEl element not found!")
}
const dateEl = document.getElementById("date") as HTMLParagraphElement | null;
if (!dateEl) {
    throw new Error ("dateEl element not found!")
}
const hourEl = document.getElementById("hour") as HTMLDivElement | null;
if (!hourEl) {
    throw new Error ("hourEl element not found!")
}
const minuteEl = document.getElementById("minute") as HTMLDivElement | null;
if (!minuteEl) {
    throw new Error ("minuteEl element not found!")
}
const secondEl = document.getElementById("second") as HTMLDivElement | null;
if (!secondEl) {
    throw new Error ("secondEl element not found!")
}
const ampmEl = document.getElementById("ampm") as HTMLDivElement | null;
if (!ampmEl) {
    throw new Error ("EampmEl eement not found!")
}
const continueBtnEl = document.getElementById("continue-btn") as HTMLButtonElement | null;
if (!continueBtnEl) {
    throw new Error ("continueBtnEl element not found!")
}
const modeBtnEl = document.getElementById("mode-btn") as HTMLButtonElement | null;
if (!modeBtnEl) {
    throw new Error ("modeBtnEl element not found!")
}
const bodyContainerEl = document.getElementById("body-container") as HTMLDivElement | null;
if (!bodyContainerEl) {
    throw new Error ("bodyContainerEl element not found!")
}
const clockContainerEl = document.getElementById("clock-container") as HTMLDivElement | null;
if (!clockContainerEl) {
    throw new Error ("clockContainerEl element not found!")
}
const modalContainerEl = document.getElementById("modal__container") as HTMLDivElement | null;
if (!modalContainerEl) {
    throw new Error ("modalContainerEl element not found!")
}
const modalTitleEl = document.getElementById("modal-1-title") as HTMLHeadingElement | null;
if (!modalTitleEl) {
    throw new Error ("modalTitleEl element not found!")
}
const dropDownEl = document.getElementById("arrayDropdown") as HTMLSelectElement | null;
if (!dropDownEl) {
    throw new Error ("dropDownEl element not found!")
}
let timeZone: string = dayjs.tz.guess()
let isLightMode: boolean = true;



const updateTime = (): void => {
    let myDate: Date = new Date ();
    let currentDate: string = dayjs.tz(myDate, `${timeZone}`).format("dddd, D, MMMM YYYY");
    let currentHour: string = dayjs.tz(myDate, `${timeZone}`).format("hh");
    let currentMinute: string = dayjs.tz(myDate, `${timeZone}`).format("mm");
    let currentSecond: string = dayjs.tz(myDate, `${timeZone}`).format("ss");
    let hourAmPm: string = dayjs.tz(myDate, `${timeZone}`).format("A");
    
    timeZoneEl.textContent = timeZone;
    hourEl.textContent = currentHour;
    minuteEl.textContent = currentMinute;
    secondEl.textContent = currentSecond;
    ampmEl.textContent = hourAmPm;
    dateEl.textContent = currentDate;
}

const updateTimeZone = (): void => {
    MicroModal.show('modal-1');
}

const changeMode = (): void => {
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
const timeZonesList: string[] = [
    'Europe/Andorra',
    'Asia/Dubai',
    'Asia/Kabul',
    'Europe/Tirane',
    'Asia/Yerevan',
    'Antarctica/Casey',
    'Antarctica/Davis',
    'Antarctica/DumontDUrville',
    'Antarctica/Mawson',
    'Antarctica/Palmer',
    'Antarctica/Rothera',
    'Antarctica/Syowa',
    'Antarctica/Troll',
    'Antarctica/Vostok',
    'America/Argentina/Buenos_Aires',
    'America/Argentina/Cordoba',
    'America/Argentina/Salta',
    'America/Argentina/Jujuy',
    'America/Argentina/Tucuman',
    'America/Argentina/Catamarca',
    'America/Argentina/La_Rioja',
    'America/Argentina/San_Juan',
    'America/Argentina/Mendoza',
    'America/Argentina/San_Luis',
    'America/Argentina/Rio_Gallegos',
    'America/Argentina/Ushuaia',
    'Pacific/Pago_Pago',
    'Europe/Vienna',
    'Australia/Lord_Howe',
    'Antarctica/Macquarie',
    'Australia/Hobart',
    'Australia/Currie',
    'Australia/Melbourne',
    'Australia/Sydney',
    'Australia/Broken_Hill',
    'Australia/Brisbane',
    'Australia/Lindeman',
    'Australia/Adelaide',
    'Australia/Darwin',
    'Australia/Perth',
    'Australia/Eucla',
    'Asia/Baku',
    'America/Barbados',
    'Asia/Dhaka',
    'Europe/Brussels',
    'Europe/Sofia',
    'Atlantic/Bermuda',
    'Asia/Brunei',
    'America/La_Paz',
    'America/Noronha',
    'America/Belem',
    'America/Fortaleza',
    'America/Recife',
    'America/Araguaina',
    'America/Maceio',
    'America/Bahia',
    'America/Sao_Paulo',
    'America/Campo_Grande',
    'America/Cuiaba',
    'America/Santarem',
    'America/Porto_Velho',
    'America/Boa_Vista',
    'America/Manaus',
    'America/Eirunepe',
    'America/Rio_Branco',
    'America/Nassau',
    'Asia/Thimphu',
    'Europe/Minsk',
    'America/Belize',
    'America/St_Johns',
    'America/Halifax',
    'America/Glace_Bay',
    'America/Moncton',
    'America/Goose_Bay',
    'America/Blanc-Sablon',
    'America/Toronto',
    'America/Nipigon',
    'America/Thunder_Bay',
    'America/Iqaluit',
    'America/Pangnirtung',
    'America/Atikokan',
    'America/Winnipeg',
    'America/Rainy_River',
    'America/Resolute',
    'America/Rankin_Inlet',
    'America/Regina',
    'America/Swift_Current',
    'America/Edmonton',
    'America/Cambridge_Bay',
    'America/Yellowknife',
    'America/Inuvik',
    'America/Creston',
    'America/Dawson_Creek',
    'America/Fort_Nelson',
    'America/Vancouver',
    'America/Whitehorse',
    'America/Dawson',
    'Indian/Cocos',
    'Europe/Zurich',
    'Africa/Abidjan',
    'Pacific/Rarotonga',
    'America/Santiago',
    'America/Punta_Arenas',
    'Pacific/Easter',
    'Asia/Shanghai',
    'Asia/Urumqi',
    'America/Bogota',
    'America/Costa_Rica',
    'America/Havana',
    'Atlantic/Cape_Verde',
    'America/Curacao',
    'Indian/Christmas',
    'Asia/Nicosia',
    'Asia/Famagusta',
    'Europe/Prague',
    'Europe/Berlin',
    'Europe/Copenhagen',
    'America/Santo_Domingo',
    'Africa/Algiers',
    'America/Guayaquil',
    'Pacific/Galapagos',
    'Europe/Tallinn',
    'Africa/Cairo',
    'Africa/El_Aaiun',
    'Europe/Madrid',
    'Africa/Ceuta',
    'Atlantic/Canary',
    'Europe/Helsinki',
    'Pacific/Fiji',
    'Atlantic/Stanley',
    'Pacific/Chuuk',
    'Pacific/Pohnpei',
    'Pacific/Kosrae',
    'Atlantic/Faroe',
    'Europe/Paris',
    'Europe/London',
    'Asia/Tbilisi',
    'America/Cayenne',
    'Africa/Accra',
    'Europe/Gibraltar',
    'America/Godthab',
    'America/Danmarkshavn',
    'America/Scoresbysund',
    'America/Thule',
    'Europe/Athens',
    'Atlantic/South_Georgia',
    'America/Guatemala',
    'Pacific/Guam',
    'Africa/Bissau',
    'America/Guyana',
    'Asia/Hong_Kong',
    'America/Tegucigalpa',
    'America/Port-au-Prince',
    'Europe/Budapest',
    'Asia/Jakarta',
    'Asia/Pontianak',
    'Asia/Makassar',
    'Asia/Jayapura',
    'Europe/Dublin',
    'Asia/Jerusalem',
    'Asia/Kolkata',
    'Indian/Chagos',
    'Asia/Baghdad',
    'Asia/Tehran',
    'Atlantic/Reykjavik',
    'Europe/Rome',
    'America/Jamaica',
    'Asia/Amman',
    'Asia/Tokyo',
    'Africa/Nairobi',
    'Asia/Bishkek',
    'Pacific/Tarawa',
    'Pacific/Enderbury',
    'Pacific/Kiritimati',
    'Asia/Pyongyang',
    'Asia/Seoul',
    'Asia/Almaty',
    'Asia/Qyzylorda',
    'Asia/Qostanay',
    'Asia/Aqtobe',
    'Asia/Aqtau',
    'Asia/Atyrau',
    'Asia/Oral',
    'Asia/Beirut',
    'Asia/Colombo',
    'Africa/Monrovia',
    'Europe/Vilnius',
    'Europe/Luxembourg',
    'Europe/Riga',
    'Africa/Tripoli',
    'Africa/Casablanca',
    'Europe/Monaco',
    'Europe/Chisinau',
    'Pacific/Majuro',
    'Pacific/Kwajalein',
    'Asia/Yangon',
    'Asia/Ulaanbaatar',
    'Asia/Hovd',
    'Asia/Choibalsan',
    'Asia/Macau',
    'America/Martinique',
    'Europe/Malta',
    'Indian/Mauritius',
    'Indian/Maldives',
    'America/Mexico_City',
    'America/Cancun',
    'America/Merida',
    'America/Monterrey',
    'America/Matamoros',
    'America/Mazatlan',
    'America/Chihuahua',
    'America/Ojinaga',
    'America/Hermosillo',
    'America/Tijuana',
    'America/Bahia_Banderas',
    'Asia/Kuala_Lumpur',
    'Asia/Kuching',
    'Africa/Maputo',
    'Africa/Windhoek',
    'Pacific/Noumea',
    'Pacific/Norfolk',
    'Africa/Lagos',
    'America/Managua',
    'Europe/Amsterdam',
    'Europe/Oslo',
    'Asia/Kathmandu',
    'Pacific/Nauru',
    'Pacific/Niue',
    'Pacific/Auckland',
    'Pacific/Chatham',
    'America/Panama',
    'America/Lima',
    'Pacific/Tahiti',
    'Pacific/Marquesas',
    'Pacific/Gambier',
    'Pacific/Port_Moresby',
    'Pacific/Bougainville',
    'Asia/Manila',
    'Asia/Karachi',
    'Europe/Warsaw',
    'America/Miquelon',
    'Pacific/Pitcairn',
    'America/Puerto_Rico',
    'Asia/Gaza',
    'Asia/Hebron',
    'Europe/Lisbon',
    'Atlantic/Madeira',
    'Atlantic/Azores',
    'Pacific/Palau',
    'America/Asuncion',
    'Asia/Qatar',
    'Indian/Reunion',
    'Europe/Bucharest',
    'Europe/Belgrade',
    'Europe/Kaliningrad',
    'Europe/Moscow',
    'Europe/Simferopol',
    'Europe/Kirov',
    'Europe/Astrakhan',
    'Europe/Volgograd',
    'Europe/Saratov',
    'Europe/Ulyanovsk',
    'Europe/Samara',
    'Asia/Yekaterinburg',
    'Asia/Omsk',
    'Asia/Novosibirsk',
    'Asia/Barnaul',
    'Asia/Tomsk',
    'Asia/Novokuznetsk',
    'Asia/Krasnoyarsk',
    'Asia/Irkutsk',
    'Asia/Chita',
    'Asia/Yakutsk',
    'Asia/Khandyga',
    'Asia/Vladivostok',
    'Asia/Ust-Nera',
    'Asia/Magadan',
    'Asia/Sakhalin',
    'Asia/Srednekolymsk',
    'Asia/Kamchatka',
    'Asia/Anadyr',
    'Asia/Riyadh',
    'Pacific/Guadalcanal',
    'Indian/Mahe',
    'Africa/Khartoum',
    'Europe/Stockholm',
    'Asia/Singapore',
    'America/Paramaribo',
    'Africa/Juba',
    'Africa/Sao_Tome',
    'America/El_Salvador',
    'Asia/Damascus',
    'America/Grand_Turk',
    'Africa/Ndjamena',
    'Indian/Kerguelen',
    'Asia/Bangkok',
    'Asia/Dushanbe',
    'Pacific/Fakaofo',
    'Asia/Dili',
    'Asia/Ashgabat',
    'Africa/Tunis',
    'Pacific/Tongatapu',
    'Europe/Istanbul',
    'America/Port_of_Spain',
    'Pacific/Funafuti',
    'Asia/Taipei',
    'Europe/Kiev',
    'Europe/Uzhgorod',
    'Europe/Zaporozhye',
    'Pacific/Wake',
    'America/New_York',
    'America/Detroit',
    'America/Kentucky/Louisville',
    'America/Kentucky/Monticello',
    'America/Indiana/Indianapolis',
    'America/Indiana/Vincennes',
    'America/Indiana/Winamac',
    'America/Indiana/Marengo',
    'America/Indiana/Petersburg',
    'America/Indiana/Vevay',
    'America/Chicago',
    'America/Indiana/Tell_City',
    'America/Indiana/Knox',
    'America/Menominee',
    'America/North_Dakota/Center',
    'America/North_Dakota/New_Salem',
    'America/North_Dakota/Beulah',
    'America/Denver',
    'America/Boise',
    'America/Phoenix',
    'America/Los_Angeles',
    'America/Anchorage',
    'America/Juneau',
    'America/Sitka',
    'America/Metlakatla',
    'America/Yakutat',
    'America/Nome',
    'America/Adak',
    'Pacific/Honolulu',
    'America/Montevideo',
    'Asia/Samarkand',
    'Asia/Tashkent',
    'America/Caracas',
    'Asia/Ho_Chi_Minh',
    'Pacific/Efate',
    'Pacific/Wallis',
    'Pacific/Apia',
    'Africa/Johannesburg'
  ];

let options = '';
timeZonesList.map((op, i) => {
    options += `<option value="${op}" id="${i}" style="border-radius: 5px;">${op}</option>`;
});
dropDownEl.innerHTML = `
<option value="" disabled selected>Pick a timezone</option>
${options}
`;
 function handleSelectChange(): void {
    if (dropDownEl) {
        dropDownEl.value;
    }

}

continueBtnEl.addEventListener("click", () => {
    timeZone = dropDownEl.value
    MicroModal.close('modal-1')
})
// Add event listener to the select element
dropDownEl.addEventListener("change", handleSelectChange);
updateTime();
setInterval(updateTime, 1000);
