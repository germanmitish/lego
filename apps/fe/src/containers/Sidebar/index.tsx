import { PartContainer, SidebarContainer } from "./styles";
import { usePartsQuery } from "generated";
import { useMousePosition } from "common";
import { useState } from "react";
import { off } from "process";
import { atom, useRecoilState } from "recoil";
import { useSpring } from "react-spring";


export default function Sidebar(){

  const { data: { parts }={ parts: [] } } = usePartsQuery()
  const [clickedPosition, setClickedPosition] = useState<{x:number, y:number}|null>(null)
  const mouse = useMousePosition()
  const offset = {
    x: mouse.x - (clickedPosition?.x||mouse.x),
    y: mouse.y - (clickedPosition?.y||mouse.y),
  }
  const [_,setDragged] = useRecoilState(Sidebar.dragged)

  
  return <>
    <SidebarContainer>
      <h1>Menu</h1>
      {parts.map((p, key)=>
        <PartContainer 
          style={{transform: `translate(${offset.x}px, ${offset.y}px)`}}
          onPointerUp={()=>{
            setDragged(false)
            setClickedPosition(null)}}
          onPointerDown={()=>{
            setDragged(true)
            setClickedPosition(mouse)}} 
          {...{key}}>
            <h2>{p.name}</h2>
        </PartContainer>
      )}
    </SidebarContainer>
  </>
}

Sidebar.dragged = atom({
  key: 'dragged',
  default: false,
})