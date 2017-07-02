 export function isEmpty(str) {
     return (!str || str.length === 0);
 }

 export function isEmptyObj(obj) {
     if (!obj) {
         return true;
     }
     return Object.getOwnPropertyNames(obj).length === 0;
 }

export function compareDate(date1, date2) {

    const day1  = date1.getDate();
    const mon1  = date1.getMonth();
    const year1 = date1.getFullYear();
    const day2  = date2.getDate();
    const mon2  = date2.getMonth();
    const year2 = date2.getFullYear();

    if (day1 === day2 && mon1 === mon2 && year1 === year2) {
       return true;
    } else {
        return false;
    }
}

export function dateToHours(dateStr) {
    const date    = new Date(dateStr);
    const hours   = date.getHours();
    const minutes = date.getMinutes();
    const suffix  = (hours >= 12) ? 'PM' : 'AM';

    const hh = ((hours + 11) % 12 + 1);
    const mm = (minutes < 10 ? "0" : "") + minutes;
    const formattedTime = hh + "." + mm + " " + suffix;
    return formattedTime;
}

