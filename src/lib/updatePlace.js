import axios from 'axios'
export default async function updatePlace(id,seats){
    console.log(id,seats)
    const formData=new FormData()
    formData.append("data",JSON.stringify({seat:seats}))
    axios.put(`http://localhost:1337/api/places/${id}`, formData)
        .then(response => {
            return response
        })
        .catch(error => {
            // Handle error.
              console.log('An error occurred:', error.response);
        }) 
}

