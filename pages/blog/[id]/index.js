import { useRouter } from "next/router"

function Id(){
  const router = useRouter();
  const productId = router.query.id;

  return <h1>Latest Blogs</h1>
}

export default Id