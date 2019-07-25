import cookie from 'react-cookies'
const uri = "https://magnanimous-goat-5432.herokuapp.com";

export default function checkCookie() {
    if ((cookie.load('isLoggedIn') === "true" )  && (cookie.load('token') !== "") && (cookie.load('email') !== "")){
        return new Promise((resolve, reject) => {
            let token = cookie.load('token')
            console.log(token)
            fetch(`${uri}/checkToken`, {
                headers: {
                    Authorization: token 
                }
            })
            .then(res => {
                if (res.status === 200) {
                    resolve({ isLoggedIn: true, token: token, email: cookie.load('email')})
                }
                else {
                    reject( { isLoggedIn: null, token: null, email: null})
                }
            })
        })
    }
}