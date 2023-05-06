import { getAllProducts } from '../lib'
export default async function PostMutate(){
    const productsData = await getAllProducts()
    const products=await productsData
    console.log("how many times we are getting the data")
    const mutatedData=products?.data?.map(product=>{
        return {
            Destination:product.attributes.Destination,
            seat:product.attributes.seat,
            cost:product.attributes.cost,
            startDate:product.attributes.startDate,
            endDate:product.attributes.endDate,
            source:product.attributes.source,
            imageArray:product.attributes.images.data?.map(image=>{
                return {
                    Description:image.attributes.Description,
                    placeTitle:image.attributes.placeTitle,
                    imageUrl:`http://localhost:1337${image.attributes.placeImage.data.attributes.url}`
                }
            }),
            id:product.id
        }
    })
     
    return mutatedData
}
 
 