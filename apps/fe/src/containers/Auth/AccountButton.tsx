import { useRecoilState } from 'recoil';
import { atoms, auth, useUser } from 'common';
import { useEffect, useState } from 'react';
import { ButtonStyled, SubMenu, Avatar, ButtonLow } from './styles';
// import { Button, Avatar } from '@material-ui/core';

export function AccountButton() {

  const [open, setOpen] = useState(false);
  const [authScreen, setAuthScreen] = useRecoilState(atoms.authScreen)

  useEffect(()=>{
    if(open){
      setTimeout(()=>{
        setOpen(false)
      }, 50000)
    }
  },[open])

  const user = useUser();
  
  return (
    <ButtonStyled noshadow>
      <SubMenu open={open}>
        {user ? 
          <div onClick={()=>auth.logout()}>
            <span>{user?.first_name||"User"} {user?.last_name||""}</span>
            <span>LOGOUT</span>
          </div>:
          <div onClick={()=>setAuthScreen('login')}>
            <span>LOGIN</span>
            <span></span>
          </div>
        }
      </SubMenu>
      <ButtonLow style={{border: '1px solid #ccc'}} onClick={()=>setOpen(!open)}>
        <Avatar authorized={Boolean(user)}/>
      </ButtonLow>
    </ButtonStyled>
  );
}