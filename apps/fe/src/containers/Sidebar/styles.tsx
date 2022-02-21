import styled, { css }  from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  position: relative;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex: 0 0 300px;
  border: 1px solid #ccc;
  height: calc(100vh - 3rem);
  padding: 1rem;
  user-select: none; 

`,

PartContainer = styled.div<{dragged?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  position: relative;
  padding: 1rem;
  height: 100px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  background-color: white;
  transition: background-color 0.2s;
  cursor: pointer;
  :hover{
    background-color: #f5f5f5;
  }
  :active{
    background-color: #ebebeb;
    z-index: 100;
  }
  :not(:active){
    transform: none !important;
  }

  >*{
    pointer-events: none;
    user-select: none; 
  }
  ${props => props.dragged && css`
    pointer-events: none !important;
  `}
`