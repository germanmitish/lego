import { useUser } from "common";
import Sidebar from "containers/Sidebar";
import { ConstructionsQuery, useAddConstructionPartMutation, useDeleteConstructionMutation, useRemovePartMutation } from "generated";
import { useState } from "react";
import { useRecoilState } from "recoil";
import Part from "./Part";
import { ConstructionContainer, RemoveButton, StatsContainer } from "./styles";


export default function Construction({ construction }:{
  construction?: ConstructionsQuery['constructionByOwner'][number]
}){
  const [dragged, setDragged] = useRecoilState(Sidebar.dragged)
  const [hover, setHover] = useState(false)
  const user = useUser()

  const [deleteConstruction] = useDeleteConstructionMutation({
    variables:{
      id: construction?.id||'',
    },
    refetchQueries:['Constructions'],
    awaitRefetchQueries: true
  })

  const [addConstructionPart, {error}] = useAddConstructionPartMutation({
    variables:{
      constructionId: construction?.id||'',
      partId: dragged?.id||'',
    },
    refetchQueries:['Constructions'],
    awaitRefetchQueries: true
  })

  const [removeConstructionPart] = useRemovePartMutation({
    refetchQueries:['Constructions']
  })

  console.log(error)


  const parts = construction?.parts
    ?.reduce((agg,v,i)=>agg?.[v?.part?.name||'']? 
      ({...agg, [v?.part?.name||'']: {count: agg?.[v?.part?.name||''].count + 1, ids:[...agg?.[v?.part?.name||''].ids, v?.id||'']} }):
      ({...agg, [v?.part?.name||'']: {count: 1, ids:[v?.id||'']}}),
    {} as {[key:string]:{
      count: number,
      ids: string[]
    }})

  const count = construction?.parts?.length || 0
  const volume = construction?.parts?.reduce((agg,v)=>agg+(v?.part?.volume||0),0)

  console.log(parts)

  return <>
    <ConstructionContainer 
      onPointerEnter={()=>setHover(true)}
      onPointerLeave={()=>setHover(false)}
      onPointerUp={()=>{
        if(dragged){
          console.log('Add part', {
            constructionId: construction?.id||'',
            partId: dragged?.id||'',
          }, user?.id)
          addConstructionPart()
        }
      }}
      style={{
        border: (dragged&&hover)? '5px solid #ccc': '1px solid #ccc'
      }} {...{dragged}}>
        <h3>{construction?.name?.replaceAll('-',' ')}</h3>
        <RemoveButton onClick={()=>construction?.id && deleteConstruction() }>
          ✕
        </RemoveButton>
        <div>
          <div>
          {Object.entries(parts||{})
            .sort((a,b)=>a[0] > b[0]? 1: -1)
            ?.map((v,key)=>
              <Part {...{key}} name={v[0]} count={v[1].count} ids={v[1].ids} />)}
          </div>
          <StatsContainer>
            <div><h3>Total parts count: </h3> : <div>{count}</div></div>
            <div><h3>Total volume: </h3> : <div>{volume}</div></div>
          </StatsContainer>
        </div>
    </ConstructionContainer>
  </>;
}