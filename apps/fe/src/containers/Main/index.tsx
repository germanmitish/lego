import { atoms, useUser } from "common";
import { AccountButton } from "containers/Auth/AccountButton";
import Login from "containers/Auth/Login";
import Register from "containers/Auth/Register";
import { 
  useAddConstructionMutation, 
  useConstructionsQuery, 
  ConstructionsDocument
} from "generated";
import { useRecoilState } from "recoil";
import Construction from "./Construction";
import { AddButton, ConstructionContainer, MainContainer } from "./styles";
import randomWords from 'random-words';
import { useEffect } from "react";

export default function Main(){
  const [authScreen, setAuthScreen] = useRecoilState(atoms.authScreen)
  const user = useUser();
  const [addConstruction, {data}] = useAddConstructionMutation({
    refetchQueries:['Constructions']
  })

  const { data: constructions, error } = useConstructionsQuery({
    variables:{
      owner: user?.id,
    },
    skip: !user?.id,
    fetchPolicy: "network-only"
  })

  useEffect(()=>{
    console.log(constructions)
  },[constructions])

  console.log(error)

  return <>
    <MainContainer>
      <AddButton 
        onClick={
          ()=>user? 
            addConstruction({
              variables:{
                owner: user?.id,
                name: randomWords(3).join('-'),
              }
              
            }): 
            setAuthScreen('login') 
        }>
        +
      </AddButton>
      <ConstructionContainer>
        {constructions?.constructionByOwner?.map((c,key)=>
          <Construction construction={c} {...{key}}/>
        )}
      </ConstructionContainer>
      <AccountButton/>
      { authScreen === 'login' ?
          <Login/>:
        authScreen === 'register' ?
          <Register/>:
        null }
    </MainContainer>
  </>
}