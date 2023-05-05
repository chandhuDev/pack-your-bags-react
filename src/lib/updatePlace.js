import axios from 'axios'
export default async function updatePlace(id,seats){
    
    const formData=new FormData()
    formData.append("data",JSON.stringify({seat:seats}))
    axios.put(`http://localhost:1337/api/places/${id}`, formData)
        .then(response => {
            return response
        })
        .catch(error => {
            // Handle error.
              window.alert('An error occurred:');
        }) 
}

