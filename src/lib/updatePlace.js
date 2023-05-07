export default async function updatePlace(id,seats,addSeats){
    //console.log(seats,addSeats)
    const seat=Number(seats)+Number(addSeats)
   // console.log(seat)
    const formData=new FormData()
    // const data={
    //  data:{
    //     seat
    //  }
    // }
    formData.append("data",JSON.stringify({data:{seat}}))
   const response=await fetch(`http://localhost:1337/api/places/${id}`,{
        method:"PUT",
        body:formData
    })
    if(!response.ok){
        throw new Error(response.message)
    }
    return response.json()  
}

