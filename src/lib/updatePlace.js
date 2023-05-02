import axios from 'axios';
export default async function updatePlace(id,seats){
  axios
  .put(`http://localhost:1337/api/places/${id}`, {
    seat:seats
  })
  .then(response => {
    return 
  })
  .catch(error => {
    // Handle error.
  //  console.log('An error occurred:', error.response);
  }); 
}

