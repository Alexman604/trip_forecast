export const sortTripsByStartDate = (trips) => {
    return [...trips].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
};
