export const getMatches = (countryCode) => {
    return fetch(`http://localhost:8080/${countryCode}`)
        .then(res => res.json())
};