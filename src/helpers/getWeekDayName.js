export const getWeekDayName = (dateString) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayOfWeekNumber = date.getDay();
    return daysOfWeek[dayOfWeekNumber];
};