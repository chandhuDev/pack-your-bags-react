
export default async function updatePlace(id,seats,addSeats){
    const formData=new FormData()
    formData.append("data",JSON.stringify({seat:Number(seats)+Number(addSeats)}))
    const response=await fetch(`http://localhost:1337/api/places/${id}`,{
        method:"PUT",
        body:formData
    })
    if(!response.ok){
        throw new Error(response.message)
    }
    return response.json()  
}

