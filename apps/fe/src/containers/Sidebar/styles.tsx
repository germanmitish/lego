import styled, { css }  from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  position: absolute;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex: 0 0 300px;
  border: 1px solid #ccc;
  height: calc(100% - 3rem);
  padding: 0 1rem;
  user-select: none; 

`,

PartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
`