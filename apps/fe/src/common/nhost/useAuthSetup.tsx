import { useApolloClient } from "@apollo/client";
import { atoms, auth } from "common";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useUserLazyQuery } from 'generated'

export default function useAuthSetup(){
  const [user, setUser] = useRecoilState(atoms.user);
  const [getUser, { data: userData }] = useUserLazyQuery({ fetchPolicy: 'cache-first' });
  const client = useApolloClient();
  // const history = useHistory();
  const [authScreen, setAuthScreen] = useRecoilState(atoms.authScreen)

  
  useEffect(() => {
    
    if (userData) {
      setUser(userData?.users_by_pk);
      // history.push('/');
    }
  }, [userData]);

  
  useEffect(() => {
    auth.onAuthStateChanged((loggedIn) => {
      if (loggedIn) {
        const userId = auth.getClaim('x-hasura-user-id');
        getUser({ variables: { user_id: userId } });
        setUser({ id: userId } as any);
        setAuthScreen(null)
      } else {
        setUser(null);
        client.resetStore();
      }
    });
  }, []);
  return {}
}