import { useRouter } from "next/router"

function Id(){
  const router = useRouter();
  const {id , review } = router.query;

  return <h1> Product: {id} review: {review} </h1>
}

export default Id