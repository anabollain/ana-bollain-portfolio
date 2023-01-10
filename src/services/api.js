const callToApi = (data) => {
    return fetch ('http://ana-bollain-portfolio-server-production.up.railway.app/contact', {
        method: "POST", 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data), 
    })
    .then ((response) => response.json())
    .then ((data) => {
        return data
    })
};

export default callToApi;
