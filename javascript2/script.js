/* Sadie Coleman - 2025-07-06
  Project: JavaScript30 #2 Clock - Improved Version

  Credits:
  - Original clock logic and concept from Wes Bos's JavaScript30 #2 Clock Project (https://javascript30.com/)
  - Additional guidance and improvement suggestions from Professor Lisa Fredrickson, Johnson County Community College

  What was new or challenging:
  - Using getElementById instead of querySelector for selecting unique elements
  - Implementing a digital clock display with AM/PM formatting
  - Applying cubic-bezier transition timing functions for smooth second hand movement
  - Calculating precise rotation degrees for hour, minute, and second hands considering partial progress (e.g., minute affecting hour hand)

  Significant improvements made:
  - Added a digital time display below the analog clock showing hours:minutes:seconds with AM/PM suffix
  - Used smooth CSS transitions for realistic clock hand movement instead of instant jumps
  - Formatted digital time with leading zeros and proper 12-hour clock conversion
*/


const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const digitalTime = document.getElementById('digital-time');

function setTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  let hours = now.getHours();

  const secondsDegrees = ((seconds / 60) * 360) + 90; 
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  const hoursDegrees = ((hours % 12) / 12 * 360) + ((minutes/60)*30) + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; 

  const paddedMinutes = minutes.toString().padStart(2, '0');
  const paddedSeconds = seconds.toString().padStart(2, '0');

  digitalTime.textContent = `${hours}:${paddedMinutes}:${paddedSeconds} ${ampm}`;
}

setTime();
setInterval(setTime, 1000);
