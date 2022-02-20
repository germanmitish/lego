import { atoms, useUser } from "common";
import { AccountButton } from "containers/Auth/AccountButton";
import Login from "containers/Auth/Login";
import Register from "containers/Auth/Register";
import { useAddConstructionMutation } from "generated";
import { useRecoilState } from "recoil";
import { AddButton, MainContainer } from "./styles";


export default function Main(){
  const [authScreen, setAuthScreen] = useRecoilState(atoms.authScreen)
  const user = useUser();
  const [addConstruction, {data}] = useAddConstructionMutation({
    variables:{
      owner: user?.id,
    }
  })

  return <>
    <MainContainer>
      <AddButton onClick={()=>user? addConstruction(): setAuthScreen('login') }>
        +
      </AddButton>
      <AccountButton/>
      { authScreen === 'login' ?
          <Login/>:
        authScreen === 'register' ?
          <Register/>:
        null }
    </MainContainer>
  </>
}