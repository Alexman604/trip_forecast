export const filterTripsByCity = (trips, searchQuery) => {
    return trips.filter((trip) =>
        trip.city.toLowerCase().includes(searchQuery.toLowerCase())
    );
};