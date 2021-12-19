export const dateHoursMinutesFormat = (date: Date) => {
  const fullDate = new Date(date);
  const hours = fullDate.getUTCHours();
  const minutes = fullDate.getUTCMinutes();
  return `${hours}:${minutes}`;
};
