function Product(props) {
    const{title, price, onSale} = props
    
    return(
        <>
        <h1>{title}</h1>
        <p>{price}</p>
        <p>{onSale}</p>
        </>
    )
}

export default Product