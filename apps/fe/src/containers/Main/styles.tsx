import styled  from "styled-components";

export const 
MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  flex: 1 1 auto;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 0rem;
`,

AddButton = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5rem;
  font-size: 24px;
  height: 2.5rem;
  border: 1px solid #ccc;
  background-color: white;
  user-select: none;
  align-self: flex-start;
  margin-bottom: 1rem;
  cursor: pointer;
  :hover{
    background-color: #f5f5f5;
  }
  :active{
    background-color: #ebebeb;
    z-index: 100;
  }
`,

ConstructionContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0rem;
  bottom: 0rem;
  overflow: scroll;
  left: 0rem;
  right: 0rem;
  padding-top: 5rem !important;
`