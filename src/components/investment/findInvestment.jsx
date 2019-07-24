export default function findUserInvestment(email) {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:4000/api/findinvestment', {
            method: "POST",
            headers: {
                Authorization: email 
            }
        })
        .then(async res => {
            if (await res.status === 200) {
                resolve(res.json())
            }
            else {
                reject("nothingfound")
            }
        })
    })
}
