import { getWeekDayName } from '../getWeekDayName';

test('returns correct weekday name for a given date string', () => {
    const dateString = '2023-08-01';
    const result = getWeekDayName(dateString);
    expect(result).toBe('Tuesday'); 
});

test('returns correct weekday name for another date string', () => {
    const dateString = '2023-08-04';
    const result = getWeekDayName(dateString);
    expect(result).toBe('Friday');
});