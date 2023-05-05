import axios from 'axios'
export default function signUpUser(username,email,password){
    
    axios
        .post('http://localhost:1337/api/auth/local/register', {
            username: username,
            email: email,
            password: password,
        })
        .then(response => {
            // Handle success.
            
            localStorage.setItem('user',response.data.user)
            localStorage.setItem('JWT',response.data.jwt)
            return response.data.user
        })
        .catch(error => {
            // Handle error.
             window.alert('An error occurred:', error.response);
        })    
}

