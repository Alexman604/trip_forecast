import { filterTripsByCity } from "../filterTripsByCity";

describe('filterTripsByCity', () => {
    const trips = [
        { id: '1', city: 'New York' },
        { id: '2', city: 'Los Angeles' },
        { id: '3', city: 'Chicago' },
    ];

    it('should filter trips by city name', () => {
        const searchQuery = 'New';
        const filteredTrips = filterTripsByCity(trips, searchQuery);

        expect(filteredTrips).toEqual([{ id: '1', city: 'New York' }]);
    });

    it('should be case-insensitive', () => {
        const searchQuery = 'LOs';
        const filteredTrips = filterTripsByCity(trips, searchQuery);

        expect(filteredTrips).toEqual([{ id: '2', city: 'Los Angeles' }]);
    });

    it('should return an empty array if no matches are found', () => {
        const searchQuery = 'Miami';
        const filteredTrips = filterTripsByCity(trips, searchQuery);

        expect(filteredTrips).toEqual([]);
    });

    it('should return all trips if searchQuery is empty', () => {
        const searchQuery = '';
        const filteredTrips = filterTripsByCity(trips, searchQuery);

        expect(filteredTrips).toEqual(trips);
    });
});
