import { getProductos } from "app/services/shopify"

export async function GET() {
    const products = await getProductos

    return Response.json({ products })
}