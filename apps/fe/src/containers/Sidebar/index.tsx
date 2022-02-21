import { PartContainer, SidebarContainer } from "./styles";
import { usePartsQuery, PartsQuery } from "generated";
import { useMousePosition } from "common";
import { useEffect, useState } from "react";
import { off } from "process";
import { atom, useRecoilState } from "recoil";
import { useSpring } from "react-spring";
import Preview from "./Preview";


export default function Sidebar(){

  const { data: { parts }={ parts: [] } } = usePartsQuery()
  const [clickedPosition, setClickedPosition] = useState<{x:number, y:number}|null>(null)
  const mouse = useMousePosition()
  const offset = {
    x: mouse.x - (clickedPosition?.x||mouse.x),
    y: mouse.y - (clickedPosition?.y||mouse.y),
  }
  const [dragged,setDragged] = useRecoilState(Sidebar.dragged)

  // console.log(dragged)

  useEffect(()=>{
    window.addEventListener('pointerup',()=>{
      setDragged(null)
      setClickedPosition(null)
    })
  },[])
  
  return <>
    <SidebarContainer>
      {parts.map((p, key)=>
        <PartContainer 
          dragged={Boolean(dragged)}
          style={{transform: `translate(${offset.x}px, ${offset.y}px)`}}
          onPointerDown={()=>{
            setDragged(p)
            setClickedPosition(mouse)}} 
          {...{key}}>
            <h3>{p.name}</h3>
            <Preview name={p.name as any}/>
        </PartContainer>
      )}
    </SidebarContainer>
  </>
}

Sidebar.dragged = atom({
  key: 'dragged',
  default: null as PartsQuery['parts'][number]|null,
})