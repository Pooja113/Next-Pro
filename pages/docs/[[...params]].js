import { useRouter } from "next/router"

function Doc(){
  const router = useRouter();
  const {params = []} = router.query;
  console.log(params)

  return <h1> Docs File  {params[0]} ,{params[1]} </h1>
}

export default Doc