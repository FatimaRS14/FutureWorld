interface categoryProps{
    params: {
        categories: string[],

        searchParams?: string
    }
}


export default function category(props: categoryProps){

    console.log(props)

    const { categories } = props.params

    console.log(categories)

    return(
        <h1>Categoria dinámica: {categories}</h1>
    )
}