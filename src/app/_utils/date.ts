/**
 * Converts the given hour:minute string to minutes.
 *
 * @param {string} date - The hour:minute string to convert.
 * @return {number} The total number of minutes.
 */
export function hourToMinute(date) {
  const hours = parseInt(date.split(":")[0]);
  const minutes = parseInt(date.split(":")[1]);
  const min = hours * 60 + minutes;
  return min;
}

/**
 * Converts a minute value to a formatted time string.
 *
 * @param {number} min - The minute value to convert.
 * @return {string} The formatted time string in the format "hours:minutes".
 */
export function minuteToHour(min) {
  const hours = Math.floor(min / 60).toString();
  const minutes = (min % 60).toString();
  return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
}

/**
 * Formats the given date into a string representation.
 *
 * @param {any} date - The date to be formatted.
 * @return {string} The formatted date string.
 */
export function formatDate(date) {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toISOString().split("T")[0];
  return formattedDate;
}

/**
 * Retrieves the formatted date from the given input date string.
 *
 * @param {string} date - The input date string.
 * @return {string} The formatted date string.
 */
export function displayDate(date) {
  const formattedDate = date.split("T")[0];
  return formattedDate;
}
