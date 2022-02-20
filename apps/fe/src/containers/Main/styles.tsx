import styled  from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`,

AddButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5rem;
  font-size: 24px;
  height: 2.5rem;
  border: 1px solid #ccc;
  user-select: none;
  cursor: pointer;
  :hover{
    background-color: #f5f5f5;
  }
  :active{
    background-color: #ebebeb;
    z-index: 100;
  }
`