const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } if (response.status === 404) {
        // handling wrong country code
        response.json = () => [];
        return response;
    }
    else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error
    }
};

const parseJson = (res) => res.json();

export const getMatches = (countryCode) => {
    return fetch(`http://localhost:8080/${countryCode}`)
        .then(checkStatus)
        .then(parseJson)
        .catch((error) => {
            console.log('request failed a', error)
        })
};