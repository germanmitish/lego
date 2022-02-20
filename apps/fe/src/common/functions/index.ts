import { useEffect, useState } from "react"


  export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    useEffect(() => {
      window.addEventListener('mousemove', onMouseMove)
      return () => {
        window.removeEventListener('mousemove', onMouseMove)
      }
    }, [])
    return mousePosition
  }