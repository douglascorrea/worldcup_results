export const getMatches = () => {
    return fetch('http://localhost:8080/matches')
        .then(res => res.json())
};