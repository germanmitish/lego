import { PartsQuery } from 'generated'
import styled, { css } from 'styled-components'

export const
ConstructionContainer = styled.div<{drugged?:PartsQuery['parts'][number]}>`
  border: 1px solid #ccc;
  min-height: 150px;
  height: fit-content;
  flex: 0 0 auto;
  width: calc(100% - 1rem);
  padding: 0 1rem;
  margin-bottom: 1rem;
  position: relative;
  transition: border 0.2s;
  >h3{
    text-transform: capitalize;
  }
  >div{
    display: flex;
  }
`,

RemoveButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5rem;
  font-size: 16px;
  height: 2.5rem;
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
`,

StatsContainer = styled.div`
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  justify-content: center;
  padding: 0 1rem;
  >div{
    display: flex;
    align-items: center;
    justify-content: start;
    line-height: 1rem;
    h3,div{
      line-height: 1rem;
      margin: 0.5rem;
      
    }
  }
`