const uri = "https://magnanimous-goat-5432.herokuapp.com";

export default function removeInvestment(investment) {       

    fetch(`${uri}/api/removeinvestment`, {
        method: 'POST',
        body: JSON.stringify({propertyid : investment}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
    if (res.status === 200) {
        console.log(res)
    } else {
        const error = res.json().then(response => {
        console.log(response.error)
    }).then( () => {throw error})
    }
    })
    .catch(err => {
    alert('Error removing investment please try again');
    });    
}










