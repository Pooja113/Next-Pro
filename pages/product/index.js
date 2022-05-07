import Link from "next/link"
import { useRouter } from "next/router"

function ProductList(){
  const router = useRouter();
  const buttonHandler = () =>{
    console.log("order Button");
    router.push('/')
  }
  return (<div>
          <Link href='/'>
           <a>Home</a>
          </Link>
          <h1>Product List</h1>
          <button onClick={buttonHandler}>Order</button>
        </div>)
}

export default ProductList