import cookie from 'react-cookies'

const uri = "mongodb+srv://realworld:realworld@cluster0-fhhab.mongodb.net/usersdb?retryWrites=true&w=majority";

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