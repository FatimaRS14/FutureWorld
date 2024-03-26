import { ProductsWrapper } from "app/components/store/ProductsWrapper"
import { getProductos } from "app/services/shopify/products"


interface CategoryProps{
    params: {
        categories: string[],

        searchParams?: string
    }
}


export default async function Category(props: CategoryProps){

    const products = await getProductos() //dataFetching de forma paralela
    const { categories } = props.params
    
    return(
        <ProductsWrapper products={products}/> 
    )
}