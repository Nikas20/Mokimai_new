import './App.css'
import products from "../data"
import Product from './components/Product'
function App() {

  const prodctArray = products.map((product) => {
    return <Product title={product.title} price={product.price} onSale={product.onSale} key={product.id}/>
  })
console.log(prodctArray);

  return (
    <>
      <div>
        {prodctArray}
      </div>
    </>
  )
}

export default App
