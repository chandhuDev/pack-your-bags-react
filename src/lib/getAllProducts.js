const qs = require('qs');
const query = qs.stringify(
  {
    populate: {
        source:true,
        Destination:true,
        cost:true,
        seat:true,
        startDate:true,
        endDate:true,
        images:{
            populate:{
                placeTitle:true,
                Description:true,
                placeImage:true
            }
        }

    },
  },
  {
    encodeValuesOnly: true, // prettify URL
  }
);
export default async function getAllProducts(){
    const response = await fetch(`http://localhost:1337/api/places?${query}`)
    if(!response.ok){
        throw new Error(response.message)
    }
    return response.json()
}
