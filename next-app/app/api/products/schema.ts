import {z} from "zod";

 const productSchema=z.object(
    {
        name:z.string().min(3),
        price:z.number().min(10).max(1000)
    }
)

export default productSchema;