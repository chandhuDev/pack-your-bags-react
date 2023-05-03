import axios from 'axios'
export default async function signInUser(email,password){
    axios
        .post('http://localhost:1337/api/auth/local', {
            identifier: email,
            password: password,
        })
        .then(response => {
            // Handle success.
            // console.log('Well done!',response.data);
            localStorage.setItem('user',response.data.user)
            localStorage.setItem('JWT',response.data.jwt)
            return response.data.user
        })
        .catch(error => {
            // Handle error.
            // console.log('An error occurred:', error.response);
        })     
}