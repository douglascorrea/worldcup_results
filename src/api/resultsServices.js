const baseUrl = process.env.REACT_APP_RESULTS_URL;

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        response.json = () => [];
        return response;
    }
};

const parseJson = (res) => res.json();

export const getMatches = (countryCode) => {
    return fetch(`${baseUrl}${countryCode}`)
        .then(checkStatus)
        .then(parseJson)
        // handling wrong country code
        .catch((error) => [])
};