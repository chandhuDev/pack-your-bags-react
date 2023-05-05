import axios from 'axios'
export default async function signInUser(email,password){
    axios
        .post('http://localhost:1337/api/auth/local', {
            identifier: email,
            password: password,
        })
        .then(response => {
            ;
            localStorage.setItem('user',response.data.user)
            localStorage.setItem('JWT',response.data.jwt)
            return response.data.user
        })
        .catch(error => {
            
             window.alert('An error occurred:');
        })     
}