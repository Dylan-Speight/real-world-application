import cookie from 'react-cookies'

export default function checkCookie() {
    if ((cookie.load('isLoggedIn') === "true" )  && (cookie.load('token') !== "") && (cookie.load('email') !== "")){
        return new Promise((resolve, reject) => {
            let token = cookie.load('token')
            console.log(token)
            fetch('http://localhost:4000/checkToken', {
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