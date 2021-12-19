export const dateHoursMinutesFormat = (date: Date) => {
  const fullDate = new Date(date);
  const hours = fullDate.getHours();
  const minutes = fullDate.getMinutes();
  return `${hours}:${minutes}`;
};
