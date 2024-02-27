interface categoryProps{
    params: {
        category: string
    }
}


export default function category(props: categoryProps){
    const { category } = props.params

    return(
        <h1>Categoria dinámica: {category}</h1>
    )
}