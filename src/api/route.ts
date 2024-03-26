import { getProductos } from "app/services/shopify/products"

export async function GET() {
    const products = await getProductos

    return Response.json({ products })
}