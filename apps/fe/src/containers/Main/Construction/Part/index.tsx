import { useRemovePartMutation } from "generated";
import { PartContainer, RemovePart } from "./styles";


export default function Part({ 
  name, count, ids
}: { 
  name: string, 
  count: number,
  ids: string[]
}){

  const [removePart] = useRemovePartMutation({
    refetchQueries:['Constructions'],
    awaitRefetchQueries: true
  })
  console.log(ids)

  return <>
    <PartContainer>
      <h3>{name.replace('Part','')}</h3> : <div>{count}</div>
      <RemovePart onClick={()=>ids[0] && removePart({variables:{id:ids[0]}})}>-</RemovePart>
    </PartContainer>
  </>
}