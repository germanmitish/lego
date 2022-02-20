import { atoms, auth } from 'common';
import { useState } from 'react';
import {
  ButtonRow,
  Header,
  Wrapper,
  Button,
  TextInput,
  InputRow,
  AuthWrapper,
  LinkRow,
} from './styles';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [authScreen, setAuthScreen] = useRecoilState(atoms.authScreen)

  return (
    <>
      <AuthWrapper>
        <Wrapper>
          <Header>Login</Header>
          <InputRow>
            <TextInput
              required
              value={credentials.email}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  email: e.target.value,
                })
              }
              id="email"
              placeholder="Email *"
            />
          </InputRow>
          <InputRow>
            <TextInput
              required
              value={credentials.password}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  password: e.target.value,
                })
              }
              type="password"
              id="password"
              placeholder="Password *"
            />
          </InputRow>
          <ButtonRow>
            <Button
              onClick={() =>
                auth
                  .login(credentials)
                  .then((response) => {
                    console.log('resp', response);
                    if (!response.session) {
                      console.log('Please, check your email');
                    }
                  })
                  .catch((err) => {
                    console.log(
                      err?.response?.data?.message?.replaceAll('"', '') ||
                        err.message
                    );
                  })
              }
            >
              Login
            </Button>
          </ButtonRow>
          <LinkRow>
            <div/>
            <a href='#' onClick={()=>setAuthScreen('register')}>Register</a>
          </LinkRow>
        </Wrapper>
      </AuthWrapper>
    </>
  );
}
