import styled, { css } from 'styled-components';
import { TextField } from 'components/TextInput';
import { ReactComponent as LoginIcon } from '@assets/icons/login.svg';

export const 
AuthWrapper = styled.div.attrs(({ children }) => ({
  children: (
    <>
      <div>{children}</div>
    </>
  ),
}))`
  width: 400px;
  height: calc(100vh - 3rem);
  display: flex;
  justify-content: center;
  background-color: white;
  align-items: center;
  border: 1px solid #ccc;
  > div {
    min-width: 300px;
    max-width: 600px;
  }
  z-index: 2;
  margin-top: -2.5rem;
`,

Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,

IconStyle = css<{}>`
  flex: 0 0 89px;
  width: 89px;
  height: 89px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  border-radius: 50%;
`,

Header = styled.h1`
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem 1rem 1rem;
`,

ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`,

LinkRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`,

Button = styled.button`
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1rem;
  font-weight: 600;
  height: 42px;
  color: #ffffff;
  border: none;
  outline: none;
  background-color: #a7a7a7;
  margin: 0rem 0rem 0.5rem 0.5rem !important;
  transition: background-color 0.2s ease-in-out;
  &:first-child {
    flex: 1 1 auto;
    margin: 0rem 0rem 0rem 0rem !important;
  }
  :hover{
    background-color: #8b8b8b;
  }
  :active{
    background-color: #6d6d6d;
  }
`,

InputRow = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 42px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`,

TextInput = styled(TextField)``,

ButtonStyled = styled.div<{noshadow?:boolean}>`
  bottom: 1.5rem;
  right: 1rem;
  position: fixed;
  button {
    min-width: 3rem;
    min-height: 3.2rem;

    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%), 0px 16px 16px rgb(0 0 0 / 6%);
    ${p=>p.noshadow && 
      css`box-shadow: none;`
    }

    background: white;
    opacity: 1;
    :hover {
      background: #eee;
    }
  }
`,

SubMenu = styled.div<{open?:boolean}>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  max-height: 3.2rem;
  white-space: nowrap;
  padding-right: 3rem;
  display: flex;
  align-items: center;
  color: '#5e5e5e';
  font-weight: 600;
  max-width: ${p=>p.open ? '20rem' : '2rem'};
  transition: max-width 0.5s ease-in-out;
  height: 100%;
  overflow: hidden;
  border: 1px solid #ccc;
  opacity: 1;
  >div{
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >span:first-child{
      font-size: 1rem;
      cursor: pointer;

    }
    >span:last-child{
      font-size: 8px;
      cursor: pointer;

    }
    
  }
  
`,
  
LogoutButton = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  margin-left: 0.1rem;
  margin-right: 0.5rem;

  justify-content: center;
  cursor: pointer;
  background-color: rgb(0 0 0 / 0%);
  transition: background-color 0.2s ease-in-out;
  :hover{
    background-color: rgb(0 0 0 / 15%);
  }
`,

Avatar = styled.div.attrs({
  children: <LoginIcon/> as any
})`
  width:100%; 
  height:100%;
  border-radius: 50%;
  display: flex;
  position: relative;
  padding: 2px;
  >svg {
    width: 100%;
    height: 100%;
  }
`,

ButtonLow = styled.button`
  cursor: pointer;
  flex: 0 0 auto;
  background-color: white;
  transition: background-color 0.2s ease-in-out;
  width: 3.2rem;
  min-height: 3.2 !important;
  position: relative;
  margin: none;
  padding: none;
  :hover{
    background-color: #f5f5f5;
  }
  :active{
    background-color: #ebebeb !important;
  }
`