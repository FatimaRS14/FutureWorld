import { env } from "app/config/env"
import { shopifyUrls } from "./urls"

export const getProductos = async (id?: string): Promise<ProductType[]> => {
    try{
        const apiUrl = id ? `${shopifyUrls.products.all}ids=${id}`: shopifyUrls.products.all
        const response = await fetch(apiUrl, {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN 
            }),
            cache: 'no-cache'
        })
    
        const { products } = await response.json()
        const transformedProducts = products.map((product: any) => {
            return {
                id: product.id,
                title: product.title,
                description: product.body.html,
                price: product.variants[0].price,
                image: product.images[0].src,
                quantity: product.variants[0].inventory_quality,
                handle: product.handle,
                tags: product.tags,
                gql_id: product.variants[0].admin_graphql_api_id,
            }
        })
        return transformedProducts

    }catch (error){
        console.log(error)
    }
    
}

export const getMainProducts = async () => {
    const response = await fetch(shopifyUrls.products.mainProducts, {
        headers: new Headers({
            'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
        })
    })

    const {products} = await response.json()
}