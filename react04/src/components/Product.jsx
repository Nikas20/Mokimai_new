function Product(props) {
    const{title, price, onSale} = props
    
    return(
        <>
        <h1>{title}</h1>
        <p>{price}</p>
        <p style={{color:onSale ? "red" : "white"}}>{onSale ? "SALE!" : "not on sale"}</p>
        </>
    )
}

export default Product