import styled from 'styled-components'

export const 
PartContainer = styled.div`
  border: 1px solid #ccc;
  height: 50px;
  display: flex;
  align-items: center;
  width: 240px;
  padding: 0 1rem;
  margin-bottom: 1rem;
  position: relative;
  transition: border 0.2s;
  >h3{
    text-transform: capitalize;
  }

  >div{
    min-width: 24px;
    text-align: right;
  }
  
`,

RemovePart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  font-size: 20px;
  height: 1.25rem;
  border: 1px solid #ccc;
  user-select: none;
  align-self: flex-start;
  margin-bottom: 1rem;
  position: absolute;
  right: -1px;
  top: -1px;
  cursor: pointer;
  :hover{
    background-color: #f5f5f5;
  }
  :active{
    background-color: #ebebeb;
    z-index: 100;
  }
`