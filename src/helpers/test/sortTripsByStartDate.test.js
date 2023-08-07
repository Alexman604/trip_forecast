import { sortTripsByStartDate }  from '../sortTripsByStartDate';

test('correctly sorts trips by start date in ascending order', () => {
    const trips = [
        { id: '1', startDate: '2023-08-05' },
        { id: '2', startDate: '2023-08-03' },
        { id: '3', startDate: '2023-08-04' },
    ];

    const sortedTrips = sortTripsByStartDate(trips);

    expect(sortedTrips).toEqual([
        { id: '2', startDate: '2023-08-03' },
        { id: '3', startDate: '2023-08-04' },
        { id: '1', startDate: '2023-08-05' },
    ]);
});

test('correctly sorts trips by start date in descending order', () => {
    const trips = [
        { id: '1', startDate: '2023-08-05' },
        { id: '2', startDate: '2023-08-03' },
        { id: '3', startDate: '2023-08-04' },
    ];

    const sortedTrips = sortTripsByStartDate(trips).reverse();

    expect(sortedTrips).toEqual([
        { id: '1', startDate: '2023-08-05' },
        { id: '3', startDate: '2023-08-04' },
        { id: '2', startDate: '2023-08-03' },
    ]);
});
